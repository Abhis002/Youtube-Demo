import mongoose from "mongoose";

// Embedded comment schema
const commentSchema = new mongoose.Schema({
  commentId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Main video schema
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    default: "", 
  },
  userId: { 
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "General",
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  comments: [commentSchema],
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
