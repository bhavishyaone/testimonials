import Testimonial from "../models/Testimonial.js";
import WallOfLove from "../models/WallOfLove.js";
import Workspace from "../models/Workspace.js";

export const getWallTestimonials = async(req,res)=>{
    try{
        const workspace = await Workspace.findById(req.params.id);

        if (!workspace) {
            return res.status(404).json({ message: "Workspace not found." });
        }

        if (workspace.owner.toString() !== req.user) {
            return res.status(403).json({ message: "Not authorized." });
        }

        const testimonial = await Testimonial.find({
            spaceId: req.params.id,
            status: "approved",
            spam: false
        })

        .select("type name rating message videoUrl createdAt")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            total: testimonial.length,
            testimonial
        });

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})

    }
}