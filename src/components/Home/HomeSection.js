import React from "react";

export const HomeSection = () => {
  return (
    <>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, Welcome</div>
            <div class="text-2">MedFolio</div>
            <div class="text-3">
              <span>You Trust, We Care...</span>
            </div>
            <a href="/signup">Sign up</a>
            {/* <a href="/signup">Signup</a> */}
          </div>
        </div>
      </section>
    </>
  );
};
