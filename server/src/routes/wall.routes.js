import {getWallTestimonials,createWall,getWall,updateWall,reorderWall,getEmbedData,getEmbedCode,deleteWall} from '../controllers/wall.controller.js' 

import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get("/workspace/:id/wall/testimonials",authMiddleware,getWallTestimonials)
router.post("/workspace/:id/wall", authMiddleware, createWall);
router.get("/workspace/:id/wall", authMiddleware, getWall);
router.patch("/workspace/:id/wall", authMiddleware, updateWall);
router.patch("/workspace/:id/wall/reorder", authMiddleware, reorderWall);
router.get("/embed/:wallId", getEmbedData);
router.get("/workspace/:id/wall/embed-code", authMiddleware, getEmbedCode);
router.delete("/workspace/:id/wall", authMiddleware, deleteWall);

export default router;