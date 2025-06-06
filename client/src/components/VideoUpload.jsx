import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!videoFile) {
      setMessage("Please select a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("video", videoFile);
    formData.append("thumbnailUrl", thumbnailUrl);
    formData.append("channelId", "123456"); // Replace with actual channel/user ID if available

    try {
      const token = localStorage.getItem("token"); // Your JWT token

      const res = await axios.post("http://localhost:5000/api/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Video uploaded successfully!");
      console.log(res.data);
      // Optionally redirect or reset the form here
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea><br />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Thumbnail URL"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        /><br />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          required
        /><br />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VideoUpload;
