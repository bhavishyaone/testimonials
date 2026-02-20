import { createWorkSpaces,getWorkspaces,getWorkspaceById,updateWorkspace,deleteWorkspace} from "../controllers/workspace.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/upload.middleware.js";
import express from 'express'

const router = express.Router()

router.post("/", authMiddleware, upload.single("logo"), createWorkSpaces);
router.get("/",authMiddleware,getWorkspaces)
router.get("/:id", authMiddleware, getWorkspaceById);
router.patch("/:id", authMiddleware, upload.single("logo"), updateWorkspace);
router.delete("/:id", authMiddleware, deleteWorkspace);

export default router
