import express from 'express'
import { deleteEvent, deletePhotos, uploadEventPhotos } from '../controller/eventController'
import { getPhotographer, getSinglePhotographer, updateProfile, verifyPhotoEmail } from '../controller/photographerController'
import { authPhoto } from '../middleware/authorization'
import { upload } from '../utils/multer'
import { forgotPassword } from '../controller/userController'

const router = express.Router()
router.get('/get-photographer', getPhotographer )
router.get('/get-singlephotographer', authPhoto, getSinglePhotographer )
router.patch('/upload-photos', authPhoto, upload.array('images'), uploadEventPhotos)
router.delete('/delete-photos', authPhoto, deletePhotos)
router.patch('/update', authPhoto, upload.single('photo'), updateProfile)
router.patch('/forgot-password',  forgotPassword )
router.put('/verify-email', verifyPhotoEmail)

export default router