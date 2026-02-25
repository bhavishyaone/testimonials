import express from 'express'
import {getTestimonial,approveTestimonial,rejectTestimonial,likeTestimonial,deleteTestimonial,markSpam,archiveTestimonial} from '../controllers/testimonial.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router =express.Router()

router.get("/workspace/:id/testimonials", authMiddleware, getTestimonial);
router.patch("/testimonials/:id/approve",authMiddleware,approveTestimonial)
router.patch("/testimonials/:id/reject",authMiddleware,rejectTestimonial)
router.patch("/testimonials/:id/like",authMiddleware,likeTestimonial)
router.patch("/testimonials/:id/archive",authMiddleware,archiveTestimonial)
router.patch("/testimonials/:id/spam", authMiddleware, markSpam);
router.delete("/testimonials/:id", authMiddleware, deleteTestimonial);

export default router