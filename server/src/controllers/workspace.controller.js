import Workspace from '../models/Workspace.js';

// GET Workspaces 

export const getWorkspaces = async(req,res)=>{
    try{

        const workspaces = await Workspace.find({owner:req.user})
        return res.status(200).json({message:"Workspaces fetched successfully.", workspaces})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})
    }

};


//  CREATE workspace 


export const createworkspace  = async(req,res)=>{
    try{
        const {name} = req.body

        if(!name){
            return res.status(400).json({message:"All the fiels required."})
        }

        const existworkspace = await Workspace.findOne({name:name})
        if(existworkspace){
            return res.status(400).json({message:"workspace already exists."})
        }
        const workspace = await Workspace.create({
            name:name,
            owner:req.user
        })

        return res.status(201).json({message:"workspace created successfully",workspace})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"server error."})

    }
};



// Get workspace by Id 



export const getWorkspaceById = async (req, res) => {
  try {
    
    const { id } = req.params;
    const workspace = await Workspace.findOne({
      _id: id,
      owner: req.user
    });

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    return res.status(200).json({ message: "Workspace fetched successfully.", workspace });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error." });
  }
};



// Update the Workspace 

export const updateWorkspace = async (req, res) => {
  const { name } = req.body;

  const workspace = await Workspace.findOne({
    _id: req.params.id,
    owner: req.user
  });

  if (!workspace) {
    return res.status(404).json({ message: "Workspace not found" });
  }

  if (name) workspace.name = name;
  await workspace.save();

  return res.status(200).json({message:"Updated successfully",workspace});
};






