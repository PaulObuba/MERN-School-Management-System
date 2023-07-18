import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

export default mongoose.model("Student", studentSchema);
