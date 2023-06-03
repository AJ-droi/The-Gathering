import nodemailer from 'nodemailer'
import { fromAdminMaill, FRONTEND_BASE_URLE, GMAIL_PASSE, GMAIL_USERE, userSubjectt } from "../config"

export const GenerateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 90000)
    const expiry = new Date()
    expiry.setTime(new Date().getTime() + (30*60*1000))

    return {otp, expiry}
}

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: GMAIL_USERE,
        pass: GMAIL_PASSE
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendmail = async(
    from:string,
    to:string,
    subject:string,
    html: string)=>{
    
    try{
       const response =  await transporter.sendMail({
            from: fromAdminMaill,
            to,
            subject:userSubjectt,
            html
        })
    }catch(error){
        console.log(error)
    }
}

export const emailHtml = (otp:number, token:string) => {
    const temp = `
    <div style="background-color: #f5f5f5; padding: 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: auto; background-color: white; padding: 20px;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to THE GATHERING </h2>
            <p>Congratulations! You're almost set to start using THE GATHERING APP. Just enter this one time code to verify your account.</p>
            <div style="padding: 10px; background-color: #e0e0e0; text-align: center;">
            <a href="${FRONTEND_BASE_URLE}/verify/?token=${token}">click here to verify</a> or copy this ${FRONTEND_BASE_URLE}/verify/?token=${token} link and paste in your browser.
            </div>
            <p>Thanks,<br>
            THE GATHERING Team</p>
        </div>
    </div>
    `
    return temp;
}

export const photoHtml = (email:string, password:string) => {
    const temp = `
    <div style="background-color: #f5f5f5; padding: 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: auto; background-color: white; padding: 20px;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to THE GATHERING </h2>
            <p>Congratulations! You have been registered as an photographer for THE GATHERING</p>
            <div style="padding: 10px; background-color: #e0e0e0; text-align: center;">
            <h3>Here are your Login Details</h3>
            <p>Email :${email} </p>
            <p>Password :${password}</p>
            </div>
            <p>Thanks,<br>
            THE GATHERING Team</p>
        </div>
    </div>
    `
    return temp;
}
