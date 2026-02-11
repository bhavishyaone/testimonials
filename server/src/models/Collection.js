import  mongoose from 'mongoose'


const collectionSchema = new mongoose.Schema(
    {
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: ""
    },
    questions: [
      {
        type: String
      }
    ],
    slug: {
      type: String,
      unique: true,
      required: true
    },
    allowVideo: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }

)

export default mongoose.model("Collections",collectionSchema)``