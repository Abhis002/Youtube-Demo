import express from "express";
import Video from "../models/Video.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Upload a video (Protected route)
router.post("/upload", auth, upload.single("video"), async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const videoUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const video = new Video({
      title,
      description,
      category,
      videoUrl,
      userId: req.user.id, // from JWT token
      uploadDate: new Date(),
    });

    await video.save();
    res.status(201).json(video);
  } catch (err) {
    console.error(err);
    res.status(400).json("Upload failed");
  }
});

// Get all videos (with optional filters)
router.get("/", async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    const videos = await Video.find(query).sort({ uploadDate: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json("Failed to fetch videos");
  }
});

// Get a single video
router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });
    if (!video) return res.status(404).json("Video not found");
    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json("Failed to fetch video");
  }
});

// Like a video
router.put("/:id/like", auth, async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(video);
  } catch (err) {
    res.status(500).json("Failed to like video");
  }
});

// Dislike a video
router.put("/:id/dislike", auth, async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { $inc: { dislikes: 1 } },
      { new: true }
    );
    res.json(video);
  } catch (err) {
    res.status(500).json("Failed to dislike video");
  }
});

// Add a comment to a video
router.post("/:id/comments", auth, async (req, res) => {
  const { text } = req.body;
  try {
    const newComment = {
      commentId: Date.now().toString(),
      userId: req.user.id,
      text,
      timestamp: new Date().toISOString(),
    };

    const video = await Video.findById(req.params.id);
    video.comments.push(newComment);
    await video.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json("Failed to add comment");
  }
});

export default router;
