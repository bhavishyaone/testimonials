import cloudinary from "../config/cloudinary.js";
import Workspace from '../models/Workspace.js'
import Testimonial from "../models/Testimonial.js";
import streamifier from "streamifier";
import { nanoid } from "nanoid";

const uploadToCloundinary = (buffer)=>{
    return new Promise((resolve,reject)=>{
        const stream = cloudinary.uploader.upload_stream(
            {folder:"workspaces/logos"},
            (error,result)=>{
                if(error){
                    reject(error)
                }
                else{
                    resolve(result)
                }
            }
        )

        streamifier.createReadStream(buffer).pipe(stream)
    })
}

const generateUniqueSlug = async()=>{
    let slug;
    let exists = true
    while (exists) {
    slug = nanoid(10);
    exists = await Workspace.findOne({ slug });
  }
  return slug;
}

// Create Workspaces 

export const createWorkSpaces = async(req,res)=>{
    try{
        // console.log("REQ BODY", req.body);
        // console.log("REQ FILE", req.file);
        const { name, headerTitle, customMessage, collectName, collectEmail, collectionType, allowStarRating, theme } = req.body;

        if(!name || !headerTitle || !customMessage){
            return res.status(400).json({message:"Required field are missing."})
        };
        if(customMessage.length<30){
            return res.status(400).json({message:"customMessage must be at least 30 characters."})
        };

        let logoUrl =""

        if(req.file){
            const result = await uploadToCloundinary(req.file.buffer)
            logoUrl = result.secure_url
        }

        const slug = await generateUniqueSlug();
        // console.log(slug)

        const workspace = await Workspace.create({
            name:name,
            logo: logoUrl,
            headerTitle: headerTitle.trim(),
            customMessage: customMessage.trim(),
            collectName: collectName ?? true,
            collectEmail: collectEmail ?? true,
            collectionType: collectionType || "both",
            allowStarRating: allowStarRating ?? false,
            theme: theme || "light",
            slug,
            owner: req.user,
        })

        return res.status(201).json({ message: "Workspace created successfully.", workspace });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }
}

// Get All the Spaces

export const getWorkspaces = async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const total = await Workspace.countDocuments({owner:req.user})

        const workspaces = await Workspace.find({ owner: req.user })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

        return res.status(200).json({
            messgae:"workspaces fetched succesfully",
            total,
            page,
            totalPages: Math.ceil(total / limit),
            workspaces
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }
}

export const getWorkspaceById = async (req, res) => {
  try {
    
    const workspace = await Workspace.findById(req.params.id);
    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found." });
    }
    if (workspace.owner.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized." });
    }
    return res.status(200).json({ workspace });
  } 
  catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error." });
  }
};

export const updateWorkspace = async(req,res)=>{
    try{    
        const workspace = await Workspace.findById(req.params.id)
        if(!workspace){
            return res.status(404).json({ message: "Workspace not found." });
        }
        if (workspace.owner.toString() !== req.user) {
        return res.status(403).json({ message: "Not authorized." });
        }
        const allowedFields = [
        "name",
        "headerTitle",
        "customMessage",
        "collectName",
        "collectEmail",
        "collectionType",
        "allowStarRating",
        "theme",
        ];
        
        const updates = {}

        allowedFields.forEach((field)=>{
            if(req.body[field]!==undefined){
                updates[field] = req.body[field]
            }
        })
        
        if (updates.customMessage && updates.customMessage.length < 30){
            return res.status(400).json({message:"customMessage must be at least 30 characters."})
        }
        
        // Yaha pe Logo Update handle kiya hai 
        if (req.file) {
            const result = await uploadToCloundinary(req.file.buffer);
            updates.logo = result.secure_url;
        }

        const updated = await Workspace.findByIdAndUpdate(
            req.params.id,
            { $set: updates },
            { new: true, runValidators: true }
        );
        return res.status(200).json({ message: "Workspace updated.", workspace: updated });

    }
    catch(err){

        console.log(err)
        return res.status(500).json({message:"server error."})
    }
};

// Delete the Workspace 
export const deleteWorkspace = async (req, res) => {
   try {
    const workspace = await Workspace.findById(req.params.id);
    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found." });
    }

    if (workspace.owner.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized." });
    }

    await Workspace.findByIdAndDelete(req.params.id);
    await Testimonial.deleteMany({ spaceId: req.params.id })
    return res.status(200).json({ message: "Workspace deleted successfully." });

  } 
  catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error." });
  }
};


