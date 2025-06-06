import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Add a comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json("Failed to add comment");
  }
});

// Get comments by video ID
router.get("/:videoId", async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
  } catch (err) {
    res.status(500).json("Failed to fetch comments");
  }
});

// Delete a comment
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json("Comment deleted");
  } catch (err) {
    res.status(500).json("Failed to delete comment");
  }
});

// Update a comment
router.put("/:id", async (req, res) => {
  try {
    const updated = await Comment.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json("Failed to update comment");
  }
});

export default router;
