import mongoose from "mongoose";


const workspaceSchema = new mongoose.Schema({
    name: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
},
    {timestamps:true}
)

export default mongoose.model("Workspace",workspaceSchema);