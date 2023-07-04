import express from 'express'
import { AdminRegister, UploadBooks, UploadMovies, createPhotographer, deletePhotographer, getNotifications, superAdmin } from '../controller/adminController';
import { createEvent, deleteEvent } from '../controller/eventController';
import { auth } from '../middleware/authorization';
import { upload } from '../utils/multer';
const router = express.Router()

router.post('/create-admin', auth, AdminRegister);
router.post('/create-super-admin', superAdmin);
router.post('/create-photographer', auth, createPhotographer);
router.delete('/delete-photographer/:id', auth, deletePhotographer);
router.post('/create-event', auth, createEvent);
router.delete('/delete-event/:id', auth, deleteEvent);
router.post('/upload-books', auth, upload.single('coverImage'), UploadBooks)
router.post('/upload-movies', auth, upload.single('coverImage'), UploadMovies)
router.get('/notifications', getNotifications)




export default router