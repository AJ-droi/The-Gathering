import express from 'express'
import { AdminRegister, createPhotographer, deletePhotographer, superAdmin } from '../controller/adminController';
import { auth } from '../middleware/authorization';
const router = express.Router()

router.post('/create-admin', auth, AdminRegister);
router.post('/create-super-admin', superAdmin);
router.post('/create-photographer', auth, createPhotographer);
router.delete('/delete-photographer/:id', auth, deletePhotographer);

export default router