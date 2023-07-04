import express from 'express';
import { getEvents } from '../controller/eventController';
import {  addImage, getBooks, getGallery, getMovies, getNotifications, getSingleUser, getUsers, GoogleLogin, googleOauthHandler, Login, registerEvent, ResendVerification, Signup, updateUserProfile, verifyUser } from '../controller/userController';
import { auth } from '../middleware/authorization';
import { upload } from '../utils/multer';

const router = express.Router();

router.get('/get-users', getUsers)
router.get('/get-singleuser', auth, getSingleUser)
router.get('/auth/google/callback', googleOauthHandler);
router.get('/resendverification/:signature', ResendVerification)
router.put('/save-image', auth, addImage)
router.post('/signup', Signup);
router.post('/login', Login);
router.patch('/verify', verifyUser)
router.patch('/update', auth, upload.single('photo'), updateUserProfile)
router.patch('/register-event', auth, registerEvent)
router.patch("/user-gallery", auth, getGallery)
router.get('/get-movies', getMovies)
router.get('/get-books', getBooks)
router.get('/notifications', getNotifications)



export default router