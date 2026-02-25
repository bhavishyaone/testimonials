import express from 'express'
import {getTestimonial,approveTestimonial,rejectTestimonial} from '../controllers/testimonial.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router =express.Router()

router.get("/workspace/:id/testimonials", authMiddleware, getTestimonial);
router.patch("/testimonials/:id/approve",authMiddleware,approveTestimonial)
router.patch("/testimonials/:id/reject",authMiddleware,rejectTestimonial)


export default router