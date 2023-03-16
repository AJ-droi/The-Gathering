import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidV4} from 'uuid';
import { fromAdminMaill, userSubjectt } from '../config';
import { PhotographerAttributes } from '../interface/photographerAttributes';
import { UserAttributes } from '../interface/userAttributes';
import { PhotographerInstance } from '../model/photographerModel';
import { UserInstance} from '../model/userModel';
import { emailHtml, GenerateOTP, sendmail } from '../utils/notifications';
import { GeneratePassword, GenerateSalt, Generatesignature, loginSchema, option, registerSchema, validatePassword, verifySignature } from '../utils/validate';


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

export const getSinglePhotographer = async(req:Request, res:Response, next:NextFunction) => {
    try{
        const id = req.params.id

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



