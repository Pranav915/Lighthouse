import React, { useState } from "react";
import "./LoginPage.css";
import { Routes, Route, useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /signup
    navigate("/login");
  };

  const [credential, setCredential] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setCredential({ login: "", password: "" });
    const json = await response.json();
    console.log(json);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setCredential((prevCred) => {
      return {
        ...prevCred,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div class="container sign-up-mode">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" />
              <a href="../Forget_Pass/Forget_Password.html">Forgot Password?</a>
            </form>
            {/* Sign Up Form */}
            <form class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={onChange}
                  value={credential.email}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                  value={credential.password}
                />
              </div>
              <input type="submit" class="btn" value="Sign up" />
            </form>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Make your account and get all your medical reports on Med
                Portfolio
              </p>
              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
            <img src="img/signin.png" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>Already have an Account ?</h3>
              <p></p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={navigateToLogin}
              >
                Sign in
              </button>
            </div>
            <img src="img/signup.png" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
