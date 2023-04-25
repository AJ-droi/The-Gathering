import express from 'express';
import {  getSingleUser, getUsers, GoogleLogin, googleOauthHandler, Login, ResendVerification, Signup, updateUserProfile, verifyUser } from '../controller/userController';
import { auth } from '../middleware/authorization';

const router = express.Router();

router.get('/get-users', getUsers)
router.get('/get-singleusers/:id', getSingleUser)
router.post('/signup', Signup);
router.post('/login', Login);
router.get('/auth/google/callback', googleOauthHandler);
router.patch('/verify', verifyUser)
router.get('/resendverification/:signature', ResendVerification)
router.patch('/update', auth, updateUserProfile)


export default router