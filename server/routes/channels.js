import express from "express";
import Channel from "../models/Channel.js";
import Video from "../models/Video.js";

const router = express.Router();

// Create channel
router.post("/", async (req, res) => {
  try {
    const newChannel = new Channel(req.body);
    await newChannel.save();
    res.status(201).json(newChannel);
  } catch (err) {
    res.status(500).json("Failed to create channel");
  }
});

// Get channel by user 
router.get("/user/:userId", async (req, res) => {
  try {
    const channel = await Channel.findOne({ owner: req.params.userId }).populate("videos");
    res.json(channel);
  } catch (err) {
    res.status(500).json("Failed to get channel");
  }
});

// Delete video from channel
router.delete("/:channelId/video/:videoId", async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.channelId);
    channel.videos.pull(req.params.videoId);
    await channel.save();
    await Video.findByIdAndDelete(req.params.videoId);
    res.json("Video deleted");
  } catch (err) {
    res.status(500).json("Failed to delete video");
  }
});

export default router;
