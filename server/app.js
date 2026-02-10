import express from 'express';
import cors from 'cors'
import helemt from 'helmet'


const app  = express()

app.use(cors())
app.use(helemt())
app.use(express.json())

app.get("/",(req,res)=>{
    return res.status(200).json({message:"server start ho gaya finally."})
})

export default app;
