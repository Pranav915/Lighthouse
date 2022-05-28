import React from "react";
import { useState } from "react";
import "./LoginPage.css";
import { Routes, Route, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    // 👇️ navigate to /signup
    navigate("/signup");
  };

  const [credential, setCredential] = useState({ login: "", password: "" });

  const handleSignIn = (event) => {
    event.preventDefault();
    setCredential({ login: "", password: "" });
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
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="login"
                  value={credential.login}
                  onChange={onChange}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credential.password}
                  onChange={onChange}
                />
              </div>
              <input type="submit" value="Login" class="btn solid" />
              <a href="/forgotPassword">Forgot Password?</a>
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" class="btn" value="Sign up" on />
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
                onClick={navigateToSignup}
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
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </div>
            <img src="img/signup.png" class="image" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="login">
        <h2>Sign Up</h2>
        <h2 style={{ "border-bottom": "2px solid #1161ed" }}>Login</h2>
        <form method="post" action="">
          <p>
            <input
              type="text"
              name="login"
              value={credential.login}
              placeholder="Username or Email"
              onChange={onChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value={credential.password}
              placeholder="Password"
              onChange={onChange}
            />
          </p>
          <p className="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me" />
              Remember me on this computer
            </label>
          </p>
          <p className="submit">
            <input
              type="submit"
              name="commit"
              value="Login"
              onSubmit={handleSubmit}
            />
          </p>
        </form>
      </div>

      <div className="login-help">
        <p>
          Forgot your password?{" "}
          <a href="/forgotpassword">Click here to reset it</a>.
        </p>
      </div>
      <script src="./Log_In.js"></script> */}
    </>
  );
};
