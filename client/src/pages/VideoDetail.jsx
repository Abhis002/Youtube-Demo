
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get(`/api/videos/${id}`);
        setVideo(res.data);
        setLikes(res.data.likes || 0);
        setDislikes(res.data.dislikes || 0);
        setComments(res.data.comments || []);
      } catch (err) {
        console.error("Error loading video:", err);
      }
    }

    async function fetchRecommended() {
      try {
        const res = await axios.get("/api/videos");
        setRecommendedVideos(res.data.filter((v) => v._id !== id));
      } catch (err) {
        console.error("Error loading videos:", err);
      }
    }

    fetchVideo();
    fetchRecommended();
  }, [id]);

  if (!video) return <h2>Loading...</h2>;

  const handleLike = async () => {
    try {
      const res = await axios.put(`/api/videos/${id}/like`);
      setLikes(res.data.likes);
    } catch (err) {
      console.error("Failed to like");
    }
  };

  const handleDislike = async () => {
    try {
      const res = await axios.put(`/api/videos/${id}/dislike`);
      setDislikes(res.data.dislikes);
    } catch (err) {
      console.error("Failed to dislike");
    }
  };

  const handlePostComment = async () => {
    if (newComment.trim() === "") return;

    try {
      const token = localStorage.getItem("token"); 
      const res = await axios.post(
        `/api/videos/${id}/comments`,
        { text: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments([res.data, ...comments]);
      setNewComment("");
    } catch (err) {
      console.error("Failed to post comment");
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Main Video Section */}
      <div style={{ flex: 2, marginRight: "20px" }}>
        <video
          controls
          width="100%"
          style={{ maxHeight: "400px", background: "#000" }}
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>

        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <p>{video.views} views • {new Date(video.uploadDate).toLocaleDateString()}</p>

        <div>
          <button onClick={handleLike}>👍 {likes}</button>{" "}
          <button onClick={handleDislike}>👎 {dislikes}</button>
        </div>

        <h4>Comments</h4>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            style={{ width: "80%", padding: "8px" }}
          />
          <button onClick={handlePostComment} style={{ padding: "8px 12px" }}>
            Post
          </button>
        </div>

        {comments.map((c) => (
          <div key={c.commentId} style={{ marginBottom: "10px" }}>
            <strong>{c.userId}</strong>: {c.text}
          </div>
        ))}
      </div>

      {/* Sidebar Videos */}
      <div style={{ flex: 1 }}>
        <h3>Recommended</h3>
        {recommendedVideos.map((v) => (
          <div
            key={v._id}
            onClick={() => navigate(`/video/${v._id}`)}
            style={{
              display: "flex",
              cursor: "pointer",
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "5px",
            }}
          >
            <img
              src={v.thumbnailUrl}
              alt="thumb"
              style={{ width: "120px", marginRight: "10px" }}
            />
            <div>
              <p style={{ fontWeight: "bold" }}>{v.title}</p>
              <p>{v.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoDetail;
