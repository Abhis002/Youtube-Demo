
import { useEffect, useState } from "react";
import axios from "axios";

function ChannelPage() {
  const userId = "user01"; 
  const [channel, setChannel] = useState(null);
  const [form, setForm] = useState({ channelName: "", description: "", channelBanner: "" });

  const fetchChannel = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/channels/user/${userId}`);
      setChannel(res.data);
    } catch (err) {
      console.error("Failed to fetch channel", err);
    }
  };

  const handleCreateChannel = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/channels", {
        ...form,
        owner: userId,
      });
      setChannel(res.data);
    } catch (err) {
      console.error("Failed to create channel", err);
    }
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`http://localhost:5000/api/channels/${channel._id}/video/${videoId}`);
      fetchChannel();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchChannel();
  }, []);

  if (!channel) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Create Your Channel</h2>
          <input
            placeholder="Channel Name"
            onChange={(e) => setForm({ ...form, channelName: e.target.value })}
          />
          <input
            placeholder="Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            placeholder="Banner URL"
            onChange={(e) => setForm({ ...form, channelBanner: e.target.value })}
          />
          <button onClick={handleCreateChannel}>Create</button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <img className="channel-banner" src={channel.channelBanner} alt="banner" />
      <div className="channel-info">
        <h2>{channel.channelName}</h2>
        <p>{channel.description}</p>
        <p>Subscribers: {channel.subscribers}</p>
      </div>

      <h3 style={{ marginBottom: "10px" }}>My Videos</h3>
      {channel.videos.map((video) => (
        <div className="video-item" key={video._id}>
          <h4>{video.title}</h4>
          <video controls src={video.videoUrl}></video>
          <button style={{ color: "red", marginTop: "10px" }} onClick={() => handleDeleteVideo(video._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChannelPage;
