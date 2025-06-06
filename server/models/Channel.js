import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  channelName: { type: String, required: true },
  owner: { type: String, required: true }, // userId
  description: String,
  channelBanner: String,
  subscribers: { type: Number, default: 0 },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

export default mongoose.model("Channel", channelSchema);
