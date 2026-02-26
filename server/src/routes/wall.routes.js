import {getWallTestimonials} from '../controllers/wall.controller.js' 
import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get("/workspace/:id/wall/testimonials",authMiddleware,getWallTestimonials)

export default router