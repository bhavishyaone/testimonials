import express from 'express';
import cors from 'cors'
import helemt from 'helmet'

import authRoutes from "./src/routes/auth.routes.js";

const app  = express()

app.use(cors())
app.use(helemt())
app.use(express.json())

app.use("/auth",authRoutes)

app.get("/",(req,res)=>{
    return res.status(200).json({message:"server start ho gaya finally."})
})

export default app;
