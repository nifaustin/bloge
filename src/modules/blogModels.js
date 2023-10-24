import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    blogImage: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },

    authorP: {
      type: String,
      required: false,
    },
    Comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const blogmodel = mongoose.model("blogs",blogSchema);
export default blogmodel