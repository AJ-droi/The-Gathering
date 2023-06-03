import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { v4 as uuidV4 } from "uuid";
import { fromAdminMaill, userSubjectt } from "../config";
import { EventAttributes } from "../interface/eventAttributes";
import { PhotographerAttributes } from "../interface/photographerAttributes";
import { UserAttributes } from "../interface/userAttributes";
import { EventInstance } from "../model/eventModel";
import { PhotographerInstance } from "../model/photographerModel";
import { UserInstance } from "../model/userModel";
import { GenerateOTP, photoHtml, sendmail } from "../utils/notifications";
import { adminSchema, eventSchema, GeneratePassword, generateRandomPassword, GenerateSalt, Generatesignature, option, photoSchema, verifySignature } from "../utils/validate";

export const superAdmin = async (req:JwtPayload, res: Response) => {
    try {
      const { email, phone, password,firstName,lastName,address } = req.body;
      const uuidUser = uuidV4();
      const validateResult = adminSchema.validate(req.body, option);
      if (validateResult.error) {
        return res.status(400).json({
          Error: validateResult.error.details[0].message,
        });
      }
      //generate salt
      const salt = await GenerateSalt();
      const adminPassword = await GeneratePassword(password, salt);
      // //generate OTP
      const { otp, expiry } = GenerateOTP();
      // //check if the admin exist
      const Admin = (await UserInstance.findOne({
        where: { email: email },
      })) as unknown as UserAttributes;
      // create Admin
      if (!Admin) {
        await UserInstance.create({
            id: uuidUser,
            email,
            password:adminPassword,
            firstName:'',
            lastName:'',
            salt,
            address: '',
            phone,
            otp,
            role: 'superadmin',
            userName: '',  
            otpExpiry: expiry,
            gender:'',
            verified: true,
            googleId:'', 
            facebookId:'', 
            dateOfBirth:'',
            photo:'',
            gallery:[],
        });
        //check if the admin exist
        const Admin = (await UserInstance.findOne({
          where: { email: email },
        })) as unknown as UserAttributes;

        
        //Generate a signature
        let signature = await Generatesignature({
          id: Admin.id,
          email: Admin.email,
          verified: Admin.verified,
        });
        return res.status(201).json({
          message: "admin created successfully",
          signature,
          verified: Admin.verified,
          role: Admin.role
        });
  
      }
      return res.status(400).json({
        message: "admin already exist",
      });
    } catch (err: any) {
      ///console.log(err.name)
      console.log(err.message);
      // console.log(err.stack)
      res.status(500).json({
        Error: "Internal server Error",
        route: "/admins/create-super-admin",
      });
    }
  };


  export const AdminRegister = async (req: JwtPayload, res: Response, next: NextFunction) => {
    try{
        const id = req.user.id
        const { email, firstName, lastName, address, phone, password} = req.body
        const uuidUser = uuidV4()
        
        const validateResult = adminSchema.validate(req.body,option)

        if(validateResult.error){
            console.log(validateResult.error)
            return res.status(400).json({
                Error: validateResult.error.details[0].message
            })
        }

        //Generate Salt
        const salt = await GenerateSalt()
        const adminPassword = await GeneratePassword(password, salt)
        
        //Generate OTP
        const {otp, expiry} = GenerateOTP();

        //check if the Admin exist
        const Admin = await UserInstance.findOne({where:{id:id}}) as unknown as UserAttributes
        

        if(Admin.role === "superadmin"){
            const User = await UserInstance.findOne({where:{email:email}}) as unknown as UserAttributes

            if(!User){
                const newAdmin =  await UserInstance.create({
                    id: uuidUser,
                    email,
                    password:adminPassword,
                    firstName:'',
                    lastName:'',
                    salt,
                    address: '',
                    phone,
                    otp,
                    role: 'admin',
                    userName: '',  
                    otpExpiry: expiry,
                    gender:'',
                    verified: true,
                    googleId:'', 
                    facebookId:'', 
                    dateOfBirth:'',
                    photo:'',
                    gallery:[],
            
                })as unknown as UserAttributes
    
    
                //Generate signature from user
                const signature = await Generatesignature({
                    id: newAdmin.id,
                    email: newAdmin.email,
                    verified: newAdmin.verified
                })
    
                return res.status(201).json({
                    message: 'Admin Created Successfully',
                    signature,
                    verified: newAdmin.verified,
                    role: newAdmin.role,
                    password
                })
            }
            return res.status(400).json({
                message: 'Admin Already Exist'
            })
           
        }
        

    }catch(err){
        res.status(500).json({
            Error: "Internal server Error",
            route: "/admins/create-admin"
        })
    }
}

export const createPhotographer = async(req:JwtPayload, res: Response) => {
  try{
    const {name, brandName, phone, address, email} = req.body;
    
    const id = req.user.id 

    const uuidVendor = uuidV4();

    const validateResult = photoSchema.validate(req.body, option);

    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }
    
    //generate salt
    const salt = await GenerateSalt();
    const password = generateRandomPassword()
    const vendorPassword = await GeneratePassword(password, salt);

    console.log("hello")

    //check if the vendor exist
    const Vendor = (await PhotographerInstance.findOne({
      where: { email: email },
    })) as unknown as PhotographerAttributes
   

    const Admin= (await UserInstance.findOne({
      where: { id: id },
    })) as unknown as UserAttributes

   

   

    if(Admin.role === 'admin' || Admin.role === 'superadmin'){
      
      if(!Vendor){
        const createVendor = await PhotographerInstance.create({
          id: uuidVendor,
          email,
          password: vendorPassword,
          name,
          brandName,
          salt,
          address,
          phone,
          serviceAvailable: true,
          role:"photographer",
          rating: 0,
          coverImage: '',
          googleId:'',
          facebookId:'',
          gender:'',
          verified: true,
          dateOfBirth:''
        });

        //send mail to photgraphers
      const html = photoHtml(email, password);
      await sendmail(fromAdminMaill, email, userSubjectt, html);
  
        return res.status(201).json({
          message: "Photographer created successfully",
          createVendor
        });
      }
  
      return res.status(400).json({
        message: "Photographer already exist",
      });
    }

    return res.status(400).json({
      message: "unauthorised",
    });

   


  }catch(err){
    res.status(500).json({
      Error: "Internal server Error",
      route: "/admins/create-vendors",
    });
  }

}


export const deletePhotographer = async(req:JwtPayload, res: Response) => {
  try{
    const id = req.user.id

    const photoId = req.params.id

    const Admin= (await UserInstance.findOne({
      where: { id: id },
    })) as unknown as UserAttributes 
    
    if (Admin.role === 'admin' || Admin.role === 'superadmin'){
      const photographer = PhotographerInstance.findOne({where:{id:photoId}}) as unknown as PhotographerAttributes

      if(!photographer){
        return res.status(400).json({
          Error:"Photographer does not exist"
        })
      }

      const delette =  await PhotographerInstance.destroy({where:{id:photoId}}) as unknown as PhotographerAttributes
      return res.status(200).json({
        message: "deleted successfully",
        delette,
      })
    }

  }catch(err){
    res.status(500).json({
      Error: "Internal server Error",
      route: "/admins/create-vendors",
    });
  }

}

