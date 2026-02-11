import express from 'express'
import { getWorkspaces,createworkspace,getWorkspaceById,updateWorkspace} from '../controllers/workspace.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get("/",authMiddleware,getWorkspaces)
router.post("/",authMiddleware,createworkspace)
router.get("/:id",authMiddleware,getWorkspaceById)
router.patch("/:id",authMiddleware,updateWorkspace)
export default router;