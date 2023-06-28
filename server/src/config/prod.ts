import dotenv from 'dotenv'
dotenv.config

export default{
    DB_NAME: process.env.PROD_DB_NAME,
}

console.log("running in production")