import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sampleVideos from "../data/sampleVideos";

function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const selectedVideo = sampleVideos.find((v) => v.videoId === id);
    if (selectedVideo) {
      setVideo(selectedVideo);
      setComments(selectedVideo.comments || []);
    }
  }, [id]);

  const handleCommentSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return alert("Please sign in to comment.");

    const newComment = {
      commentId: Date.now().toString(),
      userId: user.userId || "guest",
      text: commentText,
      timestamp: new Date().toISOString(),
    };

    setComments((prev) => [...prev, newComment]);
    setCommentText("");
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-detail-container">
      {/* Main Video Section */}
      <div className="main-video">
        <video width="100%" height="400" controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <p><strong>Channel:</strong> {video.channelId}</p>
        <p><strong>Views:</strong> {video.views.toLocaleString()}</p>
        <p>
          👍 <strong>{video.likes}</strong> &nbsp;&nbsp;
          👎 <strong>{video.dislikes}</strong>
        </p>

        {/* Comments */}
        <div style={{ marginTop: "30px" }}>
          <h3>Comments</h3>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{ width: "70%", padding: "10px", marginRight: "10px" }}
          />
          <button onClick={handleCommentSubmit}>Post</button>

          <ul style={{ marginTop: "20px" }}>
            {comments.map((comment) => (
              <li key={comment.commentId} style={{ marginBottom: "10px" }}>
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suggested Videos Sidebar */}
      <div className="suggested-videos">
        <h3>Suggested Videos</h3>
        {sampleVideos.map((v) => (
          <Link
            to={`/video/${v.videoId}`}
            key={v.videoId}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="video-card" style={{ display: "flex", marginBottom: "10px", cursor: "pointer" }}>
              <img
                src={v.thumbnailUrl}
                alt={v.title}
                style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "6px" }}
              />
              <div style={{ marginLeft: "10px" }}>
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>{v.title}</p>
                <p style={{ fontSize: "12px", color: "#aaa" }}>{v.channelId}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
