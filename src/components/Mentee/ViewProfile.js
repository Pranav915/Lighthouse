import React from "react";
import "./ViewProfile.scss";
import { Helmet } from "react-helmet";

export const MenteeDashboardViewProfile = () => {
  return (
    <>
      <div className="ViewProfile">
        <body>
          <div
            className="container"
            style={{ minHeight: "100%", margin: "50px 0px" }}
          >
            <div class="border-right" style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                <h1 style={{ fontSize: "40px", margin: "50px 10px 10px 60px" }}>
                  Profile Page
                </h1>
                <hr
                  style={{
                    height: "8px",
                    marginLeft: "50px",
                    background: "linear-gradient(-135deg, #71b7e6, #9b59b6)",
                  }}
                />
              </div>
              <div
                class="d-flex flex-column align-items-center text-center p-3 py-5"
                style={{
                  width: "50%",
                  marginLeft: "0px",
                  paddingLeft: "120px",
                }}
              >
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span> </span>
                <input type="file" id="img" name="img" accept="image/*"></input>
              </div>
            </div>

            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="input-box">
                    <span className="details">Age</span>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="text" placeholder="Enter your number" />
                  </div>
                  <div className="input-box">
                    <label for="category" style={{ fontWeight: "500" }}>
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="details"
                      style={{
                        marginTop: "5px",
                        width: "300px",
                        height: "45px",
                        borderRadius: "5px",
                        borderWidth: "2px",
                        borderColor: "#9b59b6",
                      }}
                    >
                      <option value="volvo">Entrance</option>
                      <option value="saab">Placements</option>
                      <option value="mercedes">Higher Education</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">About</span>
                    <input type="textarea" placeholder="Describe Yourself" />
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span className="gender-title">Gender</span>
                  <div className="category">
                    <label for="dot-1">
                      <span className="dot one"></span>
                      <span className="gender">Male</span>
                    </label>
                    <label for="dot-2">
                      <span className="dot two"></span>
                      <span className="gender">Female</span>
                    </label>
                    <label for="dot-3">
                      <span className="dot three"></span>
                      <span className="gender">Prefer not to say</span>
                    </label>
                  </div>
                </div>
                <div className="button">
                  <input type="submit" value="Save Changes" />
                </div>
              </form>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};
