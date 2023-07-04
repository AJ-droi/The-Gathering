import express, { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import { JwtPayload } from "jsonwebtoken";
import { v4 as uuidV4 } from "uuid";
import { fromAdminMaill, GOOGLE_CLIENT_IDE, userSubjectt } from "../config";
import { UserAttributes } from "../interface/userAttributes";
import { UserInstance } from "../model/userModel";
import { emailHtml, GenerateOTP, sendmail } from "../utils/notifications";


import {
  GeneratePassword,
  GenerateSalt,
  Generatesignature,
  loginSchema,
  option,
  registerSchema,
  updateSchema,
  validatePassword,
  verifySignature,
} from "../utils/validate";
import { getGoogleOauthToken, getGoogleUser } from "../services/session.service";
import axios from "axios";
import { EventInstance } from "../model/eventModel";
import { EventAttributes, Image } from "../interface/eventAttributes";
import { PhotographerInstance } from "../model/photographerModel";
import { PhotographerAttributes } from "../interface/photographerAttributes";
import { UUIDV4 } from "sequelize";
import { NotifyInstance } from "../model/notificationModel";
import { NotificationAttributes } from "../interface/notificationAttributes";
import { BookInstance } from "../model/bookModel";
import { MovieInstance } from "../model/movieModel";

export const Signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const uuidUser = uuidV4(); //generate uuid
    const validResult = registerSchema.validate(req.body, option); //validate user input
    if (validResult.error) {
      return res.status(400).json({
        Error: validResult.error.details[0].message,
      });
    }

    //Generate Salt
    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    //Generate OTP
    const { otp, expiry } = GenerateOTP();

    //check if the user exist
    const User = await UserInstance.findOne({ where: { email: email } });

    if (!User) {
      await UserInstance.create({
        id: uuidUser,
        email,
        password: userPassword,
        firstName,
        lastName,
        salt,
        address: "",
        phone: "",
        otp,
        role: "user",
        userName: "",
        otpExpiry: expiry,
        gender: "",
        verified: false,
        googleId: "",
        facebookId: "",
        dateOfBirth: "",
        photo:"",
        gallery:[]
      });

   


      //Send OTP to user
      // await onRequestOTP(otp, phone)

      //check if the user exist
      const User = (await UserInstance.findOne({
        where: { email: email },
      })) as unknown as UserAttributes;

      //Generate signature from user
      const signature = await Generatesignature({
        id: User.id,
        email: User.email,
        verified: User.verified,
      });

      //send mail to users
      const html = emailHtml(otp, signature);
      await sendmail(fromAdminMaill, email, userSubjectt, html);

      await NotifyInstance.create({
        id:uuidV4(),
        message: `A new User with id:${uuidUser} just joined the gathering`,
        recipient: "admin"
      }) as unknown as NotificationAttributes

      return res.status(201).json({
        message:
          "User Created Successfully check your email or phone for OTP verification",
        signature,
        verified: User.verified,
      });
    }
    return res.status(400).json({
      Error: "User Already Exist",
    });
  } catch (err) {
    res.status(500).json({
      Error: "Internal server Error",
      route: "/users/signup",
    });
  }
};


/** ======================= Verify Users ========================  **/
export const verifyUser = async (req: Request, res: Response) => {
  try {
    const token = req.query.token;
    if (typeof token === "string") {
      const verified = await verifySignature(token);
      //check if user exits
      if (!verified) throw { code: 400, message: "Please Register An Account" };
      if (verified) {
        await UserInstance.update(
          {
            verified: true,
          },
          {
            where: { id: verified.id },
          }
        );
        return res.status(200).json({
          message: "Account verified Please Login !",
        });
      }
    }
    throw { code: 401, message: "Unauthorized" };
  } catch (err) {
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/users/verify",
    });
  }
};

/** ======================= Login ========================  **/

export const Login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const validateResult = loginSchema.validate(req.body, option);

    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }

    //check if user exist
    const User = (await UserInstance.findOne({
      where: { email: email },
    })) as unknown as UserAttributes;

    if(!User){
      const Photographer = (await PhotographerInstance.findOne({
      where: { email: email },
    })) as unknown as PhotographerAttributes;

    if (Photographer.verified ) {
      const validation = await validatePassword(
        password,
        Photographer.password,
        Photographer.salt
      );

      if (validation) {
        let signature = await Generatesignature({
          id: Photographer.id,
          email: Photographer.email,
          verified: Photographer.verified,
        });
        console.log("hello");
        return res.status(200).json({
          message: "You have Successfully logged In",
          signature,
          email: Photographer.email,
          verified: Photographer.verified,
          role: Photographer.role,
        });
      }
    }
    }

    if (User.verified ) {
      const validation = await validatePassword(
        password,
        User.password,
        User.salt
      );

      if (validation) {
        let signature = await Generatesignature({
          id: User.id,
          email: User.email,
          verified: User.verified,
        });
        console.log("hello");
        return res.status(200).json({
          message: "You have Successfully logged In",
          signature,
          id: User.id,
          verified: User.verified,
          role: User.role,
        });
      }
    }

    return res.status(400).json({
      Error: "Wrong Username or password",
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/users/login",
    });
  }
};

export const GoogleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  

    



  

  } catch (err) {
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/users/googlelogin",
    });
  }
};



export const ResendVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const signature = req.params.signature;
    const decode = await verifySignature(signature);

    const User = (await UserInstance.findOne({
      where: { email: decode.email },
    })) as unknown as UserAttributes;

    if (!User) {
      return res.status(404).json({
        message: "User Not Found, Kindly SignUp",
      });
    }

    
    const { otp, expiry } = GenerateOTP();

    const html = emailHtml(otp, signature);

    await sendmail(fromAdminMaill, decode.email, userSubjectt, html);
    console.log("hello")

    return res.status(200).json({
      message: "Verification Mail Resent Successfully",
    });

  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server Error",
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserInstance.findAll();

    return res.status(200).json({
      user,
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server Error",
    });
  }
};

export const getSingleUser = async (
  req:JwtPayload,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user.id;

    const {limit, offset} = req.query;


    const User = (await UserInstance.findOne({
      where: { id: id },
    })) as unknown as UserAttributes;

    const gallery = User.gallery.slice(offset, limit);

    if (User) {
      return res.status(200).json({
        User,
      });
    }
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server Error",
    });
  }
};

export const getGallery = async (
  req:JwtPayload,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.user.id;

    const {limit, offset} = req.query;
    let start = 0;
    let end=10

    if(offset > 1){
      start = offset * limit - 9;
      end = offset * limit;
    }


    const User = (await UserInstance.findOne({
      where: { id: id },
    })) as unknown as UserAttributes;

    

    const gallery = User.gallery.slice(start, end);

    if (User) {
      return res.status(200).json({
        gallery
      });
    }
  } catch (err) {
    return res.status(500).json({
      Error: "Internal Server Error",
    });
  }
};

export const updateUserProfile = async (req: JwtPayload, res: Response) => {
  try {
    const id = req.user.id;
   
    const { firstName, lastName, address, phone, photo } = req.body;


    const User = (await UserInstance.findOne({
      where: { id: id },
    })) as unknown as UserAttributes;


    if (!User) {
      return res.status(400).json({
        Error: "Not authorised to update your profile",
      });
    }else{

   

    if(User.photo === ''){
      return res.status(400).json({
        Error: "Please upload a photo",
      });
    }
    
    console.log("hello")


const updatedUser = (await UserInstance.update(
      {
        phone:phone || User.phone,
        photo: req.file.path 
      },
      { where: { id: id } }
    )) as unknown as UserAttributes;
 
    if (updatedUser) {
      return res.status(200).json({
        message: "You have successfully updated your profile",
        User,
      });
    }

    return res.status(400).json({
      message: "Error updating your profile",
    });
  }
  } catch (err) {
    res.status(500).json({
      Error: "Internal server Error",
      route: "/users/update-profile",
    });
  }
};

export const googleOauthHandler = async (req: Request, res: Response) => {
  const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN as unknown as string || "http://localhost:3000"

  try {
    const code = req.query.code as string;
    const pathUrl = (req.query.state as string)


    if (!code) {
      return res.status(401).json({
        status: "fail",
        message: "Authorization code not provided!",
      });
    }

    const { id_token, access_token } = await getGoogleOauthToken({ code });
  

    const {id, name, email, picture } = await getGoogleUser({
      id_token,
      access_token,
    });

    console.log('id', id)


    const user= await UserInstance.findOne({
      where: { email: email },
    }) as unknown as UserAttributes;


    if(user && user !== null){
      await UserInstance.update({
        googleId:id
      }, {where:{
        email:email
      }}) as unknown as UserAttributes;

      const token = await Generatesignature({
        id: user.id,
        email: user.email,
        verified: user.verified, 
      })
    
    return res.redirect(`${FRONTEND_ORIGIN}/auth/social/?token=${token}`);
    }



    if(!user){

      const salt = await GenerateSalt();
      const userPassword = await GeneratePassword(id, salt);
      const uuidUser = uuidV4();

      const newUser = await UserInstance.create({
          id: uuidUser,
          email,
          password: userPassword,
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          salt,
          address: "",
          phone: "",
          otp: 0,
          role: "user",
          userName: "",
          otpExpiry: new Date(),
          gender: "",
          verified: true,
          googleId: id,
          facebookId: '',
          dateOfBirth: "",
          photo: picture,
          gallery:[]
      }) as unknown as UserAttributes;

      console.log("new", newUser)
      

      const token = await Generatesignature({
        id: newUser.id,
        email: newUser.email,
        verified: newUser.verified, 
      })
      
      return res.redirect(`${FRONTEND_ORIGIN}/auth/social/?token=${token}`);
     
    }



      
    } catch (err: any) {
      return res.redirect(`${FRONTEND_ORIGIN}`);
    }

  };


export const authController = {
  async facebookLogin(req: Request, res: Response) {
    const params = new URLSearchParams({
      client_id: process.env.FB_APP_ID!,
      redirect_uri: process.env.FB_REDIRECT!,
      scope: ['email', 'user_profile'].join(','),
      response_type: 'code',
      auth_type: 'rerequest',
      display: 'popup',
    });

    console.log(params)

    const url = `https://www.facebook.com/v11.0/dialog/oauth?${params.toString()}`;
    res.redirect(url);
  },

  async facebookCallback(req: Request, res: Response) {
    const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN as unknown as string || "http://localhost:3000"
    const { code } = req.query;

    try {
      const params = new URLSearchParams({
        client_id: process.env.FB_APP_ID!,
        client_secret: process.env.FB_APP_SECRET!,
        redirect_uri: process.env.FB_REDIRECT! || "http://localhost:5000/auth/facebook/callback",
        code: code as string
      });

      const response = await axios.get('https://graph.facebook.com/v11.0/oauth/access_token', {
        params,
      }
      );

      const { access_token } = await response.data;

      const userData = await axios.get(`https://graph.facebook.com/v11.0/me?fields=id,name,email,picture&access_token=${access_token}`);

      const { id, name, email, picture } = userData.data;
      console.log(picture.data);
      const user= await UserInstance.findOne({
        where: { facebookId: id },
      }) as unknown as UserAttributes;

      if(!user){
      const salt = await GenerateSalt();
      const userPassword = await GeneratePassword(id, salt);
      const uuidUser = uuidV4();
  
     const newUser = await UserInstance.create({
          id: uuidUser,
          email,
          password: userPassword,
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          salt,
          address: "",
          phone: "",
          otp: 0,
          role: "user",
          userName: "",
          otpExpiry: new Date(),
          gender: "",
          verified: true,
          googleId: "",
          facebookId: id,
          dateOfBirth: "",
          photo: picture.data.url,
          gallery:[]
      }) as unknown as UserAttributes;
    
      const token = await Generatesignature({
        id: newUser.id,
        email: newUser.email,
        verified: newUser.verified, 
      })
      
      return res.redirect(`${FRONTEND_ORIGIN}/auth/social/?token=${token}`);
     
    }

     const token = await Generatesignature({
        id: user.id,
        email: user.email,
        verified: user.verified, 
      })
    
    return res.redirect(`${FRONTEND_ORIGIN}/auth/social/?token=${token}`);


    } catch (error) {
      return res.redirect(`${FRONTEND_ORIGIN}`);
    }
  },
};


export const addImage = async (req: JwtPayload, res: Response) => {
  try{

    const userId = req.user.id

    const user = await UserInstance.findOne({
      where:{ id : userId },
    }) as unknown as UserAttributes;

    if(!user){
      return res.status(404).json({
        message: "User not found, Kindly SignUp or Login",
      });
    }

    const {images} = req.body 

    console.log("img", images)

    let img = [] as unknown as string[]

    images.forEach((image:string) => {
      img.push(image)
    })

    await UserInstance.update({
      gallery: [...user.gallery, ...img]
    },{
      where: { id: userId },
    }) as unknown as UserAttributes;

    return res.status(200).json({
      message: "Image Saved Successfully",
    });
  }catch(err){
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const registerEvent = async (req: JwtPayload, res: Response) => {
  try{

    const userId = req.user.id

    const {fullname, email, phone, numberOfTickets} = req.body

    const user = await UserInstance.findOne({
      where:{ id : userId },
    }) as unknown as UserAttributes;

    if(!user){
      return res.status(404).json({
        Error: "User not found, Kindly SignUp or Login",
      });
    }

    const { id } = req.query as any

    const event = await EventInstance.findOne({
      where:{ id : id },
    }) as unknown as EventAttributes;

    if(!event){
      return res.status(404).json({
        Error: "Event not found",
      });
    }

    let eventIndex = event.attendees.findIndex((attendee) => attendee.email === user.email)

    if(eventIndex !== -1){
      return res.status(400).json({
        Error: "You have already registered for this event",
      });
    }

    await EventInstance.update({
      attendees: [...event.attendees, {
        fullname,
        email,
        phone,
        numberOfTickets
      }]
    },{
      where: { id: id },
    }) as unknown as EventAttributes;

    return res.status(200).json({
      message: "You have succesfully registered for this event"
    });
  }catch(err){
    return res.status(500).json({
      Error: "Internal server error",
    });
  }
}

export const getBooks = async(req:Request, res:Response) => {
  try{
    const books = await BookInstance.findAll() 

    return res.status(200).json({
      books
    })

  }catch(err){
    return res.status(500).json({
      Error: "Internal server error",
    });
  }
}


export const getMovies = async(req:Request, res:Response) => {
  try{
    const movies = await MovieInstance.findAll() 

    return res.status(200).json({
      movies
    })

  }catch(err){
    return res.status(500).json({
      Error: "Internal server error",
    });
  }
}

export const getNotifications = async(req:Request, res:Response) => {
  try{
    const notifications = await NotifyInstance.findAll() 

    return res.status(200).json({
      notifications
    })

  }catch(err){
    return res.status(500).json({
      Error: "Internal server error",
    });
  }
}
