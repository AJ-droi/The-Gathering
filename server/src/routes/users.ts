import express from 'express';
import { getSingleUser, getUsers, Login, ResendOtp, Signup, updateUserProfile, verifyUser } from '../controller/userController';
import { auth } from '../middleware/authorization';

const router = express.Router();

router.get('/get-users', getUsers)
router.get('/get-singleusers/:id', getSingleUser)
router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify/:signature', verifyUser)
router.get('/resendotp/:signature', ResendOtp)
router.patch('/update', auth, updateUserProfile)


export default router