import { Image } from "./eventAttributes";

export interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role: string;
    address: string;
    googleId: string;
    facebookId: string;
    dateOfBirth: string;
    otp: number;
    otpExpiry: Date;
    salt: string;
    gender: string;
    verified: boolean;
    phone: string;
    photo: string;
    gallery: Image[];
}