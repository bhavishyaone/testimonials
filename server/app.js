import express from 'express';
import cors from 'cors'
import helmet from 'helmet'

import authRoutes from "./src/routes/auth.routes.js";
import workspaceRoutes from './src/routes/workspace.routes.js'
import publicRoutes from './src/routes/public.routes.js'
import testimonialRoutes from './src/routes/testimonial.routes.js'


const app  = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/auth",authRoutes)
app.use("/workspace",workspaceRoutes)
app.use("/public",publicRoutes)
app.use("/",testimonialRoutes)

app.get("/",(req,res)=>{
    return res.status(200).json({message:"server start ho gaya finally."})
})

export default app;
