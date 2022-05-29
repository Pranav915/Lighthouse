import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeNavbar = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (localStorage.getItem("token")) {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({}),
      });
      console.log("token available");
      const res = await response.json();
      console.log(res.user);
      if (res.success === true) {
        if (res.user.role === "Mentor") {
          navigate("/mentordashboard");
        } else if (res.user.role === "Mentee") {
          navigate("/menteedashboard");
        } else {
          console.log("role error");
        }
      } else if (res.success === false) {
        console.log("error");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <a href="/">
              Light<span>House</span>
            </a>
          </div>
          <ul class="menu">
            <li>
              <a href="#home" class="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="menu-btn">
                About
              </a>
            </li>
            {/* <li><a href="#services" class="menu-btn">Services</a></li> */}
            <li>
              <a href="#contact" class="menu-btn">
                Contact
              </a>
            </li>
            <li>
              <a class="menu-btn" onClick={handleLogin}>
                Sign in
              </a>
            </li>
            <li>
              <a href="/signup" class="menu-btn">
                Sign up
              </a>
            </li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};
