import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration successful!");
      navigate("/signin");
    } catch (err) {
      alert("Error: " + err.response?.data || "Server error");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input name="username" onChange={handleChange} placeholder="Username" required />
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" required />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
