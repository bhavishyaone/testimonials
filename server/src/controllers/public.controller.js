import Testimonial from "../models/Testimonial.js";
import Workspace from "../models/Workspace.js";
import cloudinary from '../config/cloudinary.js'
import streamifier from 'streamifier'



// Get Public Workspaces 


export const getPublicWorkspace =  async(req,res)=>{
    try{

        const workspace  = await Workspace.findOne({slug:req.params.slug})

        if(!workspace){
            return res.status(404).json({message:"Workspace is Found."})
        }

        const {
            name,
            logo,
            headerTitle,
            customMessage,
            collectName,
            collectEmail,
            collectionType,
            allowStarRating,
            theme
        } = workspace;

        return res.status(200).json({
            message:"Workspace fetched correctly on public url.",
             workspace: {
                id: workspace._id,
                name,
                logo,
                headerTitle,
                customMessage,
                collectName,
                collectEmail,
                collectionType,
                allowStarRating,
                theme
            }
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }
}

