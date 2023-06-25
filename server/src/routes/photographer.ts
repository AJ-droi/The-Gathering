import express from 'express'
import { deleteEvent, deletePhotos, uploadEventPhotos } from '../controller/eventController'
import { getPhotographer, getSinglePhotographer } from '../controller/photographerController'
import { authPhoto } from '../middleware/authorization'
import { upload } from '../utils/multer'

const router = express.Router()
router.get('/get-photographer', getPhotographer )
router.get('/get-singlephotographer/:id', getSinglePhotographer )
router.patch('/upload-photos', authPhoto, upload.array('images'), uploadEventPhotos)
router.delete('/delete-photos', authPhoto, deletePhotos)

export default router