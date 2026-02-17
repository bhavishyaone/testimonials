import mongoose from "mongoose";


const workspaceSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
      trim:true
    },

    logo: {
      type: String
    },

    headerTitle: {
      type: String,
      required: true
    },

    customMessage: {
      type: String,
      required: true,
      minlength: 30
    },

    collectName: {
      type: Boolean,
      default: true
    },

    collectEmail: {
      type: Boolean,
      default: true
    },

    collectionType: {
      type: String,
      enum: ["text", "video", "both"],
      default: "both"
    },

    allowStarRating: {
      type: Boolean,
      default: false
    },

    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light"
    },

    slug: {
      type: String,
      required: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  
  { timestamps: true }
);

workspaceSchema.index({ slug: 1 }, { unique: true });
workspaceSchema.index({ owner: 1 });

export default mongoose.model("Workspace", workspaceSchema);