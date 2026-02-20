import mongoose from "mongoose";


const testimonialSchema = mongoose.Schema(
    {
        spaceId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Workspace",
            required:true
        },

        type:{
            type:String,
            enum:["text","video"],
            required:true
        },

        name:{
            type:String,
            trim:true
        },

        email: {
            type: String,
            trim: true
        },

        rating: {
            type: Number,
            min: 1,
            max: 5
        },

        message: {
            type: String,
            trim: true
        },

        videoUrl: {
            type: String
        },

        consent: {
            type: Boolean,
            required: true
        },

        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },

        liked: {
            type: Boolean,
            default: false
        },

        archived: {
            type: Boolean,
            default: false
        },

        spam: {
            type: Boolean,
            default: false
        }
    },

    { timestamps: true }
        
)

testimonialSchema.index({ spaceId: 1 });


export default mongoose.model("Testimonial",testimonialSchema)