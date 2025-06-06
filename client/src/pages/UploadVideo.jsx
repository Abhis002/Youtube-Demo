
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadVideo() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); 
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [videoFile, setVideoFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) return alert("Please select a video file.");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("uploader", user.userId); 
    formData.append("video", videoFile);

    try {
      await axios.post("http://localhost:5000/api/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Video uploaded!");
      navigate("/channel");
    } catch (err) {
      alert("❌ Upload failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} placeholder="Title" required />
        <input name="description" onChange={handleChange} placeholder="Description" required />
        <input name="category" onChange={handleChange} placeholder="Category" required />
        <input type="file" accept="video/*" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadVideo;
