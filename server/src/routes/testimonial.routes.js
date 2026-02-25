import express from 'express'
import {getTestimonial} from '../controllers/testimonial.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router =express.Router()

router.get("/workspace/:id/testimonials", authMiddleware, getTestimonial);

export default router