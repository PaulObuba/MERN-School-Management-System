import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
