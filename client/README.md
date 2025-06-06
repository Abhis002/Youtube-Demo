# YouTube Clone - MERN Stack Capstone Project 🎥

A full-stack YouTube Clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for learning and showcasing core web development skills.

---

## 🌐 Live Demo

> _Coming Soon_ — Deploying with [Vercel](https://vercel.com/) and [Render](https://render.com/) or [Railway](https://railway.app/)!

---

## 🚀 Features

- ✅ **Video Uploading** using `multer`
- ✅ **Video Playback** via HTML5 `<video>` tag
- ✅ **User Authentication** (JWT, bcrypt)
- ✅ **Like / Dislike System**
- ✅ **Comment System**
- ✅ **Channels & Metadata**
- ✅ **Sample Videos and Suggested Sidebar**
- ✅ **Responsive UI** styled like YouTube

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios
- Plain CSS (`App.css`)

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file uploads)
- JSON Web Token (JWT)
- bcrypt (password hashing)
- dotenv (env vars)

---

## 📁 Folder Structure

youtube/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── data/sampleVideos.js
│ │ └── App.jsx / App.css
│ └── README.md
│ └── package.json
│
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── uploads/ # Uploaded video files
│ ├── server.js
│──package.json