import React from "react";
import "./style.css";

export const SignupPage = () => {
  return (
    <>
      <div className="login">
        <h2 style={{ "border-bottom": "2px solid #1161ed;" }}>Sign Up</h2>
        <h2>Login</h2>
        <form method="post" action="">
          <p>
            <input type="text" name="login" value="" placeholder="Username" />
          </p>
          <p>
            <input type="email" name="login" value="" placeholder="Email" />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Password"
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Confirm Password"
            />
          </p>
          <p>
            <input type="radio" id="html" name="fav_language" value="Mentee" />
            <label htmlFor="html">Register as Mentee</label>
            <input type="radio" id="css" name="fav_language" value="Mentor" />
            <label htmlFor="css">Register as Mentor</label>
          </p>

          <p className="submit">
            <input type="submit" name="commit" value="Sign Up" />
          </p>
        </form>
      </div>
    </>
  );
};
