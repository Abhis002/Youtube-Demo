import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import VideoPlayer from "./pages/VideoPlayer";
import ChannelPage from "./pages/ChannelPage";
import Sidebar from "./components/Sidebar";
import UploadVideo from "./pages/UploadVideo";
import VideoDetail from "./pages/VideoDetail";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Header onMenuToggle={toggleSidebar} search={searchQuery} setSearch={setSearchQuery} />
        <Sidebar isOpen={sidebarOpen} />
        <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
          <Routes>
            <Route path="/" element={<Home search={searchQuery} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/channel" element={<ChannelPage />} />
            <Route path="/upload" element={<UploadVideo />} />
            <Route path="/video/:videoId" element={<VideoDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;