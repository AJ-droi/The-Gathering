import express from 'express';
import Joi from "joi"
import bcrypt from 'bcrypt';
import { APP_SECRETE } from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AuthPayLoad } from '../interface';

export const registerSchema = Joi.object().keys({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirm_password:Joi.any().equal(Joi.ref('password')).required()
    .label('Confirm password').messages({'any.only': '{{#label}} does not match'})
})

export const adminSchema = Joi.object().keys({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

export const updateSchema = Joi.object().keys({
    phone: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
})

export const photoSchema = Joi.object().keys({
    name: Joi.string().required(),  
    brandName: Joi.string().required(), 
    phone: Joi.string().required(), 
    address: Joi.string().required(), 
    email: Joi.string().required(), 
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})


export const option = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
}

export const GenerateSalt = async() =>{
    return await bcrypt.genSalt()
}

export const GeneratePassword = async(password:string, salt:string) => {
    return await bcrypt.hash(password, salt)
}


export const Generatesignature = async(payload:AuthPayLoad) => {
    return jwt.sign(payload, APP_SECRETE, {expiresIn:'1d'})
}

export const verifySignature= async(signature:string) => {
    return jwt.verify(signature, APP_SECRETE) as JwtPayload
}

export const loginSchema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

export const validatePassword = async(enteredPassword:string, savedPassword:string, salt:string) => {
    return await GeneratePassword(enteredPassword,salt) === savedPassword
}