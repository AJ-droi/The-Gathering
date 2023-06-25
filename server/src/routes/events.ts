import express from "express";
import { getEvents } from "../controller/eventController";


const router = express.Router()

router.get('/getEvents',  getEvents)

export default router

