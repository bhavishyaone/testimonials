import Testimonial from "../models/Testimonial.js";
import Workspace from "../models/Workspace.js";

// get Testimonial for inbox 
export const getTestimonial = async(req,res)=>{
    try{
        const workspace = await Workspace.findById(req.params.id)

        if (!workspace) {
            return res.status(404).json({ message: "Workspace not found." });
        }

        if (workspace.owner.toString() !== req.user) {
            return res.status(403).json({ message: "Not authorized." });
        }

        const filter = { spaceId: req.params.id };
        if (req.query.type) filter.type = req.query.type;
        if (req.query.status) filter.status = req.query.status;
        if (req.query.liked === "true") filter.liked = true;
        if (req.query.archived === "true") filter.archived = true;
        if (req.query.spam === "true") filter.spam = true;

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const total = await Testimonial.countDocuments(filter);
        const testimonials = await Testimonial.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        return res.status(200).json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            testimonials
            
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }
}    