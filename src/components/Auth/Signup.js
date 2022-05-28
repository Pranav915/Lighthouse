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
      body: JSON.stringify({"title":title[0] , "description":description[0] , "tag":tag[0]}),
    setCredential({ login: "", password: "", role: "" });
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
      <div className="container sign-up-mode">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <a href="../Forget_Pass/Forget_Password.html">Forgot Password?</a>
            </form>
            {/* Sign Up Form */}
            <form className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={onChange}
                  value={credential.email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                  value={credential.password}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <select
                  name="role"
                  id="role"
                  value={credential.role}
                  onChange={onChange}
                >
                  <option value="" disabled>
                    Role
                  </option>
                  <option value="Mentee">Mentee</option>
                  <option value="Mentor">Mentor</option>
                </select>
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Make your account and get all your medical reports on Med
                Portfolio
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
            <img src="img/signin.png" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Already have an Account ?</h3>
              <p></p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={navigateToLogin}
              >
                Sign in
              </button>
            </div>
            <img src="img/signup.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
