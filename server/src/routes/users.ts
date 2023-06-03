import express from 'express';
import { getEvents } from '../controller/eventController';
import {  addImage, getSingleUser, getUsers, GoogleLogin, googleOauthHandler, Login, ResendVerification, Signup, updateUserProfile, verifyUser } from '../controller/userController';
import { auth } from '../middleware/authorization';

const router = express.Router();

router.get('/get-users', getUsers)
router.get('/get-singleusers/:id', getSingleUser)
router.get('/auth/google/callback', googleOauthHandler);
router.get('/resendverification/:signature', ResendVerification)
router.put('/addImage', auth, addImage)
router.post('/signup', Signup);
router.post('/login', Login);
router.patch('/verify', verifyUser)
router.patch('/update', auth, updateUserProfile)



export default router