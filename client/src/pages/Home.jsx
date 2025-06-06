
import { useNavigate } from "react-router-dom";
import sampleVideos from "../data/sampleVideos";

function Home({ search }) {
  const navigate = useNavigate();

  const filteredVideos = sampleVideos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        {filteredVideos.map((video) => (
          <div
            key={video.videoId}
            onClick={() => navigate(`/video/${video.videoId}`)}
            style={{
              cursor: "pointer",
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <h4 style={{ margin: "10px 0 5px", fontWeight: "bold" }}>{video.title}</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
              {video.views} views • {video.uploadDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;