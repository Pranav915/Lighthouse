import React from "react";
import './style.css'

export const LoginPage = () => {
  return (
  <>
  <div className="login">
  <h2 >Sign Up</h2>
  <h2 style="border-bottom: 2px solid #1161ed;">Login</h2>
  <form method="post" action="">
    <p><input type="text" name="login" value="" placeholder="Username or Email"/></p>
    <p><input type="password" name="password" value="" placeholder="Password"/></p>
    <p className="remember_me">
      <label>
        <input type="checkbox" name="remember_me" id="remember_me"/>
        Remember me on this computer
      </label>
    </p>
    <p className="submit"><input type="submit" name="commit" value="Login"/></p>
  </form>
</div>

<div className="login-help">
  <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
</div>
  </>
  )
};
