import React from "react";
import { useState } from "react";
import "./LoginPage.scss";
import { Routes, Route, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    // 👇️ navigate to /signup
    navigate("/signup");
  };

  const [credential, setCredential] = useState({ email: "", password: "" });

  const handleSignIn = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    setCredential({ email: "", password: "" });
    const res = await response.json();
    if (res.success) {
      localStorage.setItem("token", res.authToken);
    }
    console.log(res);
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
      <div className="LoginPage">
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form" onSubmit={handleSignIn}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    name="email"
                    value={credential.email}
                    onChange={onChange}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={credential.password}
                    onChange={onChange}
                  />
                </div>
                <input type="submit" value="Login" className="btn solid" />
                <a href="/forgotPassword">Forgot Password?</a>
              </form>
              <form className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input className="btn" value="Sign up" on />
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
                  onClick={navigateToSignup}
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
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="img/signup.png" className="image" alt="" />
            </div>
          </div>
        </div>

        {/* <div classNameName="login">
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
          <p classNameName="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me" />
              Remember me on this computer
            </label>
          </p>
          <p classNameName="submit">
            <input
              type="submit"
              name="commit"
              value="Login"
              onSubmit={handleSubmit}
            />
          </p>
        </form>
      </div>

      <div classNameName="login-help">
        <p>
          Forgot your password?{" "}
          <a href="/forgotpassword">Click here to reset it</a>.
        </p>
      </div>
      <script src="./Log_In.js"></script> */}
      </div>
    </>
  );
};
