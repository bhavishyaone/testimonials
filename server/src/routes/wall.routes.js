import {getWallTestimonials,createWall} from '../controllers/wall.controller.js' 
import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get("/workspace/:id/wall/testimonials",authMiddleware,getWallTestimonials)
router.post("/workspace/:id/wall", authMiddleware, createWall);

export default router