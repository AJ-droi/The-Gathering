import dotenv from 'dotenv'
dotenv.config

export default{
    DB_NAME: process.env.LOCAL_DB_NAME
}

console.log("local mode activated")