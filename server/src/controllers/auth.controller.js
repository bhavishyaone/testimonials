import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Workspace from '../models/Workspace.js';



export const register = async(req,res)=>{

    try{
        const {name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({message:"All the fields are required."})
        }

        const userexist = await User.findOne({email:email})
        if(userexist){
            return res.status(400).json({message:"User already exists."})
        }

        const hashedpassword  = await bcrypt.hash(password,10)

        const user = await User.create({
            name:name,
            email:email,
            password:hashedpassword
        });


        await Workspace.create({ name: `${name}'s Workspace`, owner: user._id });

        return res.status(201).json({message:"User created successfully.",user})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})

    }
};




export const login = async(req,res)=>{
    try{    

        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({message:"Invalid credentials."})
        }

        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"Invalid credentials."})
        }

        const match = await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(400).json({message:"Invalid credentials"})
        }

        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}

        )

        return res.status(200).json({message:"login successfully",token})


    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})

    }
}
