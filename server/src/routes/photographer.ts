import express from 'express'
import { getPhotographer, getSinglePhotographer } from '../controller/photographerController'

const router = express.Router()

router.get('/get-photographer', getPhotographer )
router.get('/get-singlephotographer/:id', getSinglePhotographer )

export default router