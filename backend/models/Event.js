import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false
    },
    photo: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
