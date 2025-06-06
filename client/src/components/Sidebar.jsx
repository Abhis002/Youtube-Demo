import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <nav className="sidebar-nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/channel">📺 My Channel</Link>
        <Link to="/upload">⬆️ Upload Video</Link>
        <button className="slider-button">All</button>
        <button className="slider-button">Music</button>
        <button className="slider-button">Coding</button>
        <button className="slider-button">Gaming</button>
        <button className="slider-button">News</button>
        <button className="slider-button">React</button>
        <button className="slider-button">Node.js</button>
        <button className="slider-button">MongoDB</button>
        <button className="slider-button">Frontend</button>
        <button className="slider-button">Backend</button>
      </nav>
    </div>
  );
}

export default Sidebar;
