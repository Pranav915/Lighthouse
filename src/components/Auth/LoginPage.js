import React from "react";
import { useState } from "react";
import "./style.css";

export const LoginPage = () => {
  const [credential, setCredential] = useState({ login: "", password: "" });

  const handleSubmit = (event) => {
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
      <div className="login">
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
          {/* <p className="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me" />
              Remember me on this computer
            </label>
          </p> */}
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
    </>
  );
};
