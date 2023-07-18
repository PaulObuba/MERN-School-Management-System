import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    title: {
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

export default mongoose.model("Notification", notificationSchema);