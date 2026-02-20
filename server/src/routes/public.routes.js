import { getPublicWorkspace, submitTestimonial } from '../controllers/public.controller.js'
import { uploadVideo } from "../middlewares/upload.middleware.js";
import express from 'express'
import ratelimit from 'express-rate-limit';

const router = express.Router()

const submitlimit = ratelimit({
    windowMs:15*60*1000,
    limit:50,
    message: { message: "Too many submissions. Please try again later." }
})

router.get("/:slug", getPublicWorkspace)
router.post("/:slug/submit",submitlimit, uploadVideo.single("video"), submitTestimonial)

export default router
