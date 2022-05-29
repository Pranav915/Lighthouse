import React, { useEffect, useState } from "react";
import MenteeDashboard from "./MenteeDashboard";
import { Browse } from "./Browse";
import "./Browse.scss";
import { useNavigate } from "react-router-dom";
export const Mentorlist = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      !(localStorage.getItem("role") === "Mentee")
    ) {
      navigate("/login");
    }
  });
  const sty = {
    width: "25em",
    marginLeft: "25em",
  };
  const [mentors, setlist] = useState(<div></div>);
  const getlist = async () => {
    const response = await fetch("http://localhost:5000/api/getmentors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        query: "IAS",
      }),
    });
    const res = await response.json();
    const f = res.finds;
    const m = f.map((find) => (
      <div className="Browse" style={{ margin: "1em 1.2em 1em 1em" }}>
        <div class="card-container">
          {/* <span class="pro">PRO</span> */}
          <img
            class="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>{find.name}</h3>
          <h6>New York</h6>
          {/* <p>User interface designer and <br/> front-end developer</p> */}
          <div class="buttons">
            {/* <button class="primary">
              Book A Session
          </button> */}
            {/* <button class="primary ghost">
              Following
          </button> */}
          </div>
          <div class="skills">
            <h6>Mentorship In</h6>
            <ul>
              <li>{find.qualification}</li>
              {/* <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li> */}
            </ul>
          </div>
        </div>
      </div>
    ));
    setlist(m);
  };

  useEffect(() => {
    getlist();
  }, []);

  return (
    <div>
      <MenteeDashboard />
      <div
        style={{
          margin: "1em 0em 0em 10em",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {mentors}
      </div>
    </div>
  );
};
