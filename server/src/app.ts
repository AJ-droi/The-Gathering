import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import { db } from './config';
import { HttpError } from "http-errors";
import userRouter  from './routes/users';
import adminRouter from './routes/admin';
import photoRouter from './routes/photographer'
import eventRouter from './routes/events'
import cors from 'cors';
import session from 'express-session';
import { authController } from './controller/userController';
// import { fboauthBackend } from './utils/facebook';


dotenv.config();

db.sync({}).then(() => {
    console.log('Database is connected');
    }).catch((err:HttpError) => {
    console.log(err);
});

const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'))



const port = process.env.PORT || 5000;


app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/photographer', photoRouter)
app.use('/event', eventRouter)



app.get('/auth/facebook', authController.facebookLogin);
app.get('/auth/facebook/callback', authController.facebookCallback);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app

