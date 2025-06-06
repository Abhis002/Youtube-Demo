import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: "Video", required: true },
  userId: { type: String, required: true }, // you can later change to ObjectId if needed
  username: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);
