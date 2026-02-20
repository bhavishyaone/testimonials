import { getPublicWorkspace, submitTestimonial } from '../controllers/public.controller.js'
import { uploadVideo } from "../middlewares/upload.middleware.js";
import express from 'express'

const router = express.Router()

router.get("/:slug", getPublicWorkspace)
router.post("/:slug/submit", uploadVideo.single("video"), submitTestimonial)

export default router
