import express, {Request, Response, NextFunction} from 'express';
import { JwtPayload } from 'jsonwebtoken';
import {v4 as uuidV4} from 'uuid';
import { fromAdminMaill, userSubjectt } from '../config';
import { PhotographerAttributes } from '../interface/photographerAttributes';
import { UserAttributes } from '../interface/userAttributes';
import { PhotographerInstance } from '../model/photographerModel';
import { UserInstance} from '../model/userModel';
import { emailHtml, GenerateOTP, sendmail } from '../utils/notifications';
import { GeneratePassword, GenerateSalt, Generatesignature, loginSchema, option, photoUpdateSchema, registerSchema, updateSchema, validatePassword, verifySignature } from '../utils/validate';
import {  } from '../model/notificationModel';



export const getPhotographer = async(req:Request, res:Response, next:NextFunction) => {
    try{ 
        const photographer = await PhotographerInstance.findAll()

        return res.status(200).json({
            photographer
        })
    }catch(err){
        return res.status(500).json({
            Error:"Internal Server Error"
        })
    }
}

export const getSinglePhotographer = async(req:JwtPayload, res:Response, next:NextFunction) => {
    try{
        const id = req.user.id

        console.log(id)

        const photographer = await PhotographerInstance.findOne({where:{id:id}}) as unknown as PhotographerAttributes

       if (photographer){
        return res.status(200).json({
            photographer
        })
       }
    }catch(err){
        return res.status(500).json({
            Error:"Internal Server Error"
        })
    }
}

export const updateProfile = async (req: JwtPayload, res: Response) => {
    try {
      const id = req.user.id;
     
      const { name, brandName, address, phone, photo } = req.body;

      
      const User = (await PhotographerInstance.findOne({
        where: { id: id },
      })) as unknown as PhotographerAttributes;
  
      if (!User) {
        return res.status(400).json({
          Error: "Not authorised to update your profile",
        });
      }

      if(User.coverImage === ''){
        return res.status(400).json({
          Error: "Please upload a photo",
        });
      }
      
  
      const updatedUser = (await PhotographerInstance.update(
        {
          phone:phone || User.phone,
          coverImage: req.file.path
        },
        { where: { id: id } }
      )) as unknown as PhotographerAttributes;
  
      if (updatedUser) {
        return res.status(200).json({
          message: "You have successfully updated your profile",
          User,
        });
      }
  
      return res.status(400).json({
        message: "Error updating your profile",
      });
    } catch (err) {
      res.status(500).json({
        Error: "Internal server Error",
        route: "/users/update-profile",
      });
    }
  };



