import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({ onMenuToggle, search, setSearch }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <header className="header">
      <div className="left-section">
        <button className="menu-button" onClick={onMenuToggle}>
          ☰
        </button>
        <Link to="/" className="logo">
          YouTube Clone
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="right-section">
        {user ? (
          <>
            <span className="username">Hi, {user.username}</span>
            <Link to="/upload">
              <button className="header-btn">Upload</button>
            </Link>
            <Link to="/profile">
              <button className="header-btn">Profile</button>
            </Link>

            <button onClick={handleLogout} className="header-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
