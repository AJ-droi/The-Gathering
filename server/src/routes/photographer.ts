import express from 'express'
import { deleteEvent, deletePhotos, uploadEventPhotos } from '../controller/eventController'
import { getPhotographer, getSinglePhotographer, updateProfile } from '../controller/photographerController'
import { authPhoto } from '../middleware/authorization'
import { upload } from '../utils/multer'

const router = express.Router()
router.get('/get-photographer', getPhotographer )
router.get('/get-singlephotographer', authPhoto, getSinglePhotographer )
router.patch('/upload-photos', authPhoto, upload.array('images'), uploadEventPhotos)
router.delete('/delete-photos', authPhoto, deletePhotos)
router.patch('/update', authPhoto, upload.single('photo'), updateProfile)

export default router