import React from "react";
import "./MentorDashboardViewProfile.scss";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MentorDashboardViewProfile = () => {
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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");

  const onsele = async (event) => {
    const response = await fetch("http://localhost:5000/api/viewprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email: "patilpranav915@gmail.com",
      }),
    });
    const res = await response.json();
    console.log(res.mentor);
    setName(res.mentor.name);
    setAge(res.mentor.age);
    setEmail(res.mentor.email);
    setGender(res.mentor.gender);
    setMobile(res.mentor.mobile);
    setQualification(res.mentor.qualification);
    setCategory(res.mentor.category);
    setAbout(res.mentor.about);
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(mobile);
    console.log(name);
    console.log(name);
    console.log(name);
    // console.log(response.mentor);
    // const response = await fetch("http://localhost:5000/api/mentorDashboardviewProfile", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "auth-token": localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify({
    //     name: profile.name,
    //     age: profile.age,
    //     gender: profile.gender,
    //     mobile: profile.mobile,
    //     qualification: profile.qualification,
    //     category: profile.category,
    //     about: profile.about,
    //   }),
    // });
    // setProfile({
    //   name: "",
    //   age: "",
    //   gender: "",
    //   mobile: "",
    //   qualification: "",
    //   category: "",
    //   about: "",
    // });
    // const res = await response.json();
    // if (res.success) {
    //   navigate("/viewprofile");
    // }
    // console.log(res);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setProfile((prevProf) => {
  //     return {
  //       ...prevProf,
  //       [name]: value,
  //     };
  //   });
  // };

  useEffect(() => {
    onsele();
  }, []);

  return (
    <>
      <div className="MentorDashboardViewProfile">
        <body>
          <div
            className="container"
            style={{ minHeight: "100%", margin: "50px 0px" }}
          >
            <div className="border-right" style={{ display: "flex" }}>
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
                className="d-flex flex-column align-items-center text-center p-3 py-5"
                style={{
                  width: "50%",
                  marginLeft: "0px",
                  paddingLeft: "120px",
                }}
              >
                <img
                  className="rounded-circle mt-5"
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
                    <span className="details">Name</span>
                    <input type="text" placeholder={name} />
                  </div>
                  <div className="input-box">
                    <span className="details">Age</span>
                    <input type="text" placeholder={age} />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder={email} />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="text" placeholder={mobile} />
                  </div>
                  <div className="input-box">
                    <label htmlFor="category" style={{ fontWeight: "500" }}>
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      value={category}
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
                    <input type="textarea" placeholder={about} />
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span className="gender-title">Gender</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one"></span>
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two"></span>
                      <span className="gender">Female</span>
                    </label>
                    <label htmlFor="dot-3">
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
