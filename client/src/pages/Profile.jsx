
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        setError("Failed to fetch profile");
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div className="profile-container">{error}</div>;
  if (!user) return <div className="profile-container">Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Your Profile</h2>
        <div className="profile-detail">
          <strong>Username:</strong> <span>{user.username}</span>
        </div>
        <div className="profile-detail">
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        {user.avatar && (
          <div className="profile-avatar">
            <img src={user.avatar} alt="avatar" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
