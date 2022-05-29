import React from "react";
import "./MentorRegister.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MentorRegister = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    qualification: "",
    category: "",
    about: "",
  });

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/auth/mentorregister",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    setProfile({});
    const res = await response.json();
    if (res.success) {
      if (res.user.isDetail === true) {
        if (res.user.role === "Mentor") {
          navigate("/mentordashboard");
        } else if (res.user.role === "Mentee") {
          navigate("/menteedashboard");
        } else {
          alert(res.error);
        }
      } else if (res.user.isDetail === false) {
        navigate("/register");
      } else {
        alert(res.error);
      }
    }
    console.log(res);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProf) => {
      return {
        ...prevProf,
        [name]: value,
      };
    });
  };

  return (
    <div className="Register">
      <body>
        <div className="container">
          <div className="title">Register as a Mentor</div>
          <div className="content">
            <form>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Age</span>
                  <input
                    type="text"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Qualification</span>
                  <input
                    type="text"
                    name="qualification"
                    value={profile.qualification}
                    onChange={handleChange}
                    placeholder="Enter your qualification"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    className="details"
                    value={profile.category}
                    onChange={handleChange}
                  >
                    <option value="volvo">Entrance</option>
                    <option value="saab">Placements</option>
                    <option value="mercedes">Higher Education</option>
                  </select>
                </div>
                <div className="input-box">
                  <span className="details">About</span>
                  <input
                    type="textarea"
                    name="about"
                    value={profile.about}
                    onChange={handleChange}
                    placeholder="Describe Yourself"
                    required
                  />
                </div>
              </div>
              <div className="gender-details">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  id="dot-2"
                />
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  id="dot-3"
                />
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  id="dot-1"
                />
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
                <input value="Register" onClick={handleRegister} />
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};
