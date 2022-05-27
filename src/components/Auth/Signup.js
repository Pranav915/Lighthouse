import React from "react";
import "./LoginPage.css";

export const SignupPage = () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  return (
    <>
      <div class="container sign-up-mode">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" />
              <a href="../Forget_Pass/Forget_Password.html">Forgot Password?</a>
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
              <button class="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src="img/signin.png" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>Already have an Account ?</h3>
              <p></p>
              <button class="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="img/signup.png" class="image" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="login">
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
      </div> */}
    </>
  );
};
