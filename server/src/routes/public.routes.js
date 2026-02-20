import {getPublicWorkspace} from '../controllers/public.controller.js'
import express from 'express'

const router = express.Router()

router.get("/:slug",getPublicWorkspace)

export default router
