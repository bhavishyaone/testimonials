import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};




export const registerUser  = async(req,res)=>{
    try{
        const {name,email,password} = req.body

        if(!name || ! email || !password){
            return res.status(400).json({message:"All the fields are required."})
        }

        const existingtUser = await User.findOne({email})

        if(existingtUser){
            return res.status(400).json({message:"user already exists."})
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });


        return res.status(201).json({message:"User Registered successfully.",user})


    }

    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }
}




export const loginUser = async(req,res)=>{
    try{

        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({message:"All the field required."})
        }

        const user  = await User.findOne({email})



        if(!user){
            return res.status(400).json({message:"User not found."})
        }



        const compare = await bcrypt.compare(password,user.password)

        if(!compare){
            return res.status(400).json({message:"Invalid credentials."})
        }


        const token = generateToken(user._id)

        return res.status(200).json({message:"Logged In successfully",token,user})


    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})

    }
}