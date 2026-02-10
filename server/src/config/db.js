import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO DB connect ho gaya hai finally.")
    }
    catch(err){
        console.log("MONGO DB connect nahi hua.")
        console.log(err)
        process.exit(1)

    }
}

export default connectDB;