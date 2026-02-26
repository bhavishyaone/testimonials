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


export const createWall = async(req,res)=>{

    try{
        const workspace = await Workspace.findById(req.params.id);
        if (!workspace) {
            return res.status(404).json({ message: "Workspace not found." });
        }
        if (workspace.owner.toString() !== req.user) {
            return res.status(403).json({ message: "Not authorized." });
        }

        const existingWall = await WallOfLove.findOne({workspaceId:req.params.id})
        if(existingWall){
            return res.status(400).json({message:"Wall already existed."})
        }

        const {layout,testimonialOrder} = req.body

        if (!testimonialOrder || !Array.isArray(testimonialOrder) || testimonialOrder.length === 0){
            return res.status(400).json({message:"At least one testimonial must be selected."})
        }

         const wall = await WallOfLove.create({
            workspaceId: req.params.id,
            layout,
            darkTheme: req.body.darkTheme ?? true,
            hideDate: req.body.hideDate ?? true,
            hideSourceIcons: req.body.hideSourceIcons ?? true,
            showClosedCaptions: req.body.showClosedCaptions ?? true,
            autoplay: req.body.autoplay ?? true,
            showMoreButton: req.body.showMoreButton ?? true,
            oneRowSlider: req.body.oneRowSlider ?? true,
            sameHeightVideos: req.body.sameHeightVideos ?? true,
            minimizeImages: req.body.minimizeImages ?? true,
            cardSize: req.body.cardSize || "large",
            arrowColor: req.body.arrowColor || "#000000",
            testimonialOrder
        });

        
        const embedCode = `<iframe src="${process.env.BASE_URL}/embed/${wall._id}" width="100%" height="600" frameborder="0" style="border:none;overflow:hidden;" scrolling="no"></iframe>`;

        return res.status(201).json({
            message: "Wall of Love created.",
            wall,
            embedCode
        })

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})

    }
}


export const getWall = async(req,res)=>{
    try{
        const workspace = await Workspace.findById(req.params.id);
        
        if (!workspace) {
            return res.status(404).json({ message: "Workspace not found." });
        }

        if (workspace.owner.toString() !== req.user) {
            return res.status(403).json({ message: "Not authorized." });
        }

        const wall = await WallOfLove.findOne({ workspaceId: req.params.id });
        if (!wall) {
            return res.status(404).json({ message: "Wall not created yet." });
        }

        const embedCode = `<iframe src="${process.env.BASE_URL}/embed/${wall._id}" width="100%" height="600" frameborder="0" style="border:none;overflow:hidden;" scrolling="no"></iframe>`;
        return res.status(200).json({ wall, embedCode });
    
    }

    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }
}

export const updateWall = async (req, res) => {
  try {

    const workspace = await Workspace.findById(req.params.id);

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found." });
    }
    if (workspace.owner.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized." });
    }

    const wall = await WallOfLove.findOne({ workspaceId: req.params.id });
    if (!wall) {
      return res.status(404).json({ message: "Wall not found." });
    }

    const allowedFields = [
      "layout",
      "darkTheme",
      "hideDate",
      "hideSourceIcons",
      "showClosedCaptions",
      "autoplay",
      "showMoreButton",
      "oneRowSlider",
      "sameHeightVideos",
      "minimizeImages",
      "cardSize",
      "arrowColor",
      "testimonialOrder"
    ];

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body is empty." });
    }

    // console.log(req.body)

    const updates = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });


    if (updates.layout && !["masonry-animated", "masonry-fixed", "carousel"].includes(updates.layout)) {
      return res.status(400).json({ message: "Invalid layout." });
    }

    if (updates.cardSize && !["small", "medium", "large"].includes(updates.cardSize)) {
      return res.status(400).json({ message: "Invalid card size." });
    }

    const updated = await WallOfLove.findByIdAndUpdate(
      wall._id,
      { $set: updates },
      { returnDocument: "after" }
    );

    const embedCode = `<iframe src="${process.env.BASE_URL}/embed/${updated._id}" width="100%" height="600" frameborder="0" style="border:none;overflow:hidden;" scrolling="no"></iframe>`;
    return res.status(200).json({
      message: "Wall updated.",
      wall: updated,
      embedCode
    });

  } 
  catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error." });
  }
};