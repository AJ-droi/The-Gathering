import express, {Request, Response, NextFunction} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import {v4 as uuidV4} from 'uuid';
import { fromAdminMaill, userSubjectt } from '../config';
import { UserAttributes } from '../interface/userAttributes';
import { UserInstance } from '../model/userModel';
import { emailHtml, GenerateOTP, sendmail } from '../utils/notifications';
import { GeneratePassword, GenerateSalt, Generatesignature, loginSchema, option, registerSchema, updateSchema, validatePassword, verifySignature } from '../utils/validate';

export const Signup = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const { email, phone, password, confirm_password} = req.body;

        const uuidUser = uuidV4(); //generate uuid
        const validResult = registerSchema.validate(req.body, option); //validate user input
        if(validResult.error){
            return res.status(400).json({
                Error: validResult.error.details[0].message
            });
        }

        //Generate Salt
        const salt = await GenerateSalt()
        const userPassword = await GeneratePassword(password, salt)

        //Generate OTP
        const {otp, expiry} = GenerateOTP();

        //check if the user exist
        const User = await UserInstance.findOne({where:{email:email}})

        if(!User){
            await UserInstance.create({
               id: uuidUser,
               email,
               password:userPassword,
               firstName:'',
               lastName:'',
               salt,
               address: '',
               phone,
               otp,
               role: 'user',
               userName: '',  
               otpExpiry: expiry,
               gender:'',
               verified: false,
               googleId:'', 
               facebookId:'', 
               dateOfBirth:''
           })

           //Send OTP to user
           // await onRequestOTP(otp, phone)
           
           //send mail to users
           const html =  emailHtml(otp)
           await sendmail(fromAdminMaill, email, userSubjectt, html);

           //check if the user exist
           const User = await UserInstance.findOne({where:{email:email}})as unknown as UserAttributes

           //Generate signature from user
           const signature = await Generatesignature({
               id: User.id,
               email: User.email,
               verified: User.verified
           })

           return res.status(201).json({
               message: 'User Created Successfully check your email or phone for OTP verification',
               signature,
               verified: User.verified,
           })
       }
       return res.status(400).json({
           Error: 'User Already Exist'
       })

   }catch(err){
       res.status(500).json({
           Error: "Internal server Error",
           route: "/users/signup"
       })
   }
}

/** ======================= Verify Users ========================  **/
export const verifyUser = async (req: Request, res: Response) => {
    try{
        const token = req.params.signature
        const decode = await verifySignature(token) 

        //check if the user is a registered user
        const User = await UserInstance.findOne({where:{email:decode.email}})as unknown as UserAttributes

        if(User){
            const {otp} = req.body

            if(User.otp == otp && User.otpExpiry >= new Date()){
                const updatedUser = await UserInstance.update({
                    verified: true
                }, {where:{email: decode.email}})as unknown as UserAttributes

                //Generate a new Signature
                const signature = await Generatesignature({
                    id: updatedUser.id,
                    email: updatedUser.email,
                    verified: updatedUser.verified
                })

                return res.status(200).json({
                    message: 'User Verified Successfully',
                    signature,
                    verified: updatedUser.verified,
                    role: User.role
                })
            }
            return res.status(400).json({
                Error: 'OTP is invalid or expired'
            })
        }

      
    }catch(err){
        return res.status(500).json({
            Error: "Internal server Error",
            route: "/users/verify"
        })
    }
}

/** ======================= Login ========================  **/

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { email, password} = req.body
        
        const validateResult = loginSchema.validate(req.body,option)

        if(validateResult.error){
            return res.status(400).json({
                Error: validateResult.error.details[0].message
            })
        }

   
        //check if user exist
        const User = await UserInstance.findOne({where:{email:email}})as unknown as UserAttributes;
    
        if(User.verified){
           const validation = await validatePassword(password, User.password, User.salt)
          
           if(validation){
            let signature = await Generatesignature({
                id: User.id,
                email: User.email,
                verified: User.verified,
            });
            console.log("hello")
            return res.status(200).json({
                message:"You have Successfully logged In",
                signature,
                email: User.email,
                verified: User.verified,
                role: User.role
            })
           }
        }

        return res.status(400).json({
            Error: "Wrong Username or password"
        })
    
    }catch(err){
        return res.status(500).json({
            Error: "Internal server Error",
            route: "/users/login"
        })
    }
}

export const ResendOtp = async(req:Request, res:Response, next: NextFunction) => {
    try{
        
        const signature = req.params.signature
        console.log('hello')
        const decode = await verifySignature(signature)
        
 
        const User = await UserInstance.findOne({where:{email:decode.email}})as unknown as UserAttributes;

        if(!User){
            return res.status(404).json({
                message: "User Not Found, Kindly SignUp"
            })
        }
       
        const {otp,expiry} = GenerateOTP()

        const updatedUser = await UserInstance.update({
            otp,otpExpiry: expiry
        },{where:{email:decode.email}}) as unknown as UserAttributes;

        if(updatedUser){
            const html = emailHtml(otp)
            await sendmail(fromAdminMaill, User.email, userSubjectt, html)

            return res.status(200).json({
                otp
            })
        }
       
        
    }catch(err){
        return res.status(500).json({
            Error: "Internal Server Error"
        })
    }


}

export const getUsers = async(req:Request, res:Response) => {
    try{
        const user = await UserInstance.findAll()

        return res.status(200).json({
            user
        })
    }catch(err){
        return res.status(500).json({
            Error:"Internal Server Error"
        })
    }
   
}

export const getSingleUser = async(req:Request, res:Response, next:NextFunction) => {
    try{
        const id = req.params.id

        const User = await UserInstance.findOne({where:{id:id}}) as unknown as UserAttributes

       if (User){
        return res.status(200).json({
            User
        })
       }
    }catch(err){
        return res.status(500).json({
            Error:"Internal Server Error"
        })
    }
}



export const updateUserProfile = async(req:JwtPayload, res:Response) => {
    
    try{
        const id = req.user.id;
        const {firstName, lastName, address, phone} = req.body

        const validateResult = await updateSchema.validate(req.body,option)
        if(validateResult.error){
            return res.status(400).json({
                Error: validateResult.error.details[0].message
            })
        }

        const User = await UserInstance.findOne({where:{id: id}})as unknown as UserAttributes;

        if(!User){
            return res.status(400).json({
                Error: "Not authorised to upfate your profile"
            })
        }

        const updatedUser = await UserInstance.update({
            firstName, lastName, address, phone
        }, {where:{id:id}})as unknown as UserAttributes

        if(updatedUser){
            return res.status(200).json({
                message: "You have successfully updated your profile",
                User
            })
        }

        return res.status(400).json({
            message:"Error updating your profile"
        })


    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/users/update-profile"
        })
    }
}

