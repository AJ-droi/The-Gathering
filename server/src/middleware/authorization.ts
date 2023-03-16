import { Request, Response, NextFunction } from "express"
import jwt,{ JwtPayload } from "jsonwebtoken"
import { APP_SECRETE } from "../config"
import { UserAttributes } from "../interface/userAttributes"
import { UserInstance} from "../model/userModel"

export const auth = async(req:JwtPayload, res:Response, next:NextFunction) => {
    try{
        const authorization = req.headers.authorization

        if(!authorization){
            return res.status(401).json({
                Error: "Kindly signin"
            })
        }

        const token = authorization.slice(7, authorization.length)
        let verified = jwt.verify(token, APP_SECRETE)

        if(!verified){
            return res.status(401).json({
                Error: "unauthorised"
            })
        }

        const {id} = verified as {[key:string]:string}

        const user = await UserInstance.findOne({where:{id: id}})as unknown as UserAttributes;

        if(!user){
            return res.status(401).json({
                Error: "Invalid Credentials"
            })
        }

        req.user = verified 
        next()
     
    }catch(err){
        return res.status(401).json({
            Error: "unauthorised",
        })
    }
    
}
