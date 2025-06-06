import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <Link to={`/video/${video._id}`}>
        <video
          src={`http://localhost:5000/uploads/${video.videoUrl}`}
          controls
          className="thumbnail"
        />
      </Link>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-channel">{video.channelName || "Unknown Channel"}</p>
        <p className="video-views">
          {video.views ? video.views.toLocaleString() : "0"} views
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
