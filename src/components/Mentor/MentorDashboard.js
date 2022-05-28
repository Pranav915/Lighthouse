import React from "react";
import "./Dashboard.css";
import { Helmet } from "react-helmet";

export const MentorDashboard = () => {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div className="sidebar">
        <div className="logo-details">
          <div className="logo_name" style={{ textAlign: "center" }}>
            &nbsp;&nbsp;LightHouse
          </div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#" className="report">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Mentees</span>
            </a>
            <span className="tooltip">Mentees</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">View Profile</span>
            </a>
            <span className="tooltip">View Profile</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Payments</span>
            </a>
            <span className="tooltip">Payments</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-log-out" id="log_out"></i>
              <span className="links_name">Logout</span>
            </a>
            <span className="tooltip">Logout</span>
          </li>

          <li className="profile">
            <div className="profile-details">
              <img src="Img/photo.jpg" alt="profileImg" />
              <div className="name_job">
                <div className="name">Mentors Name</div>
                <div className="job">Mentor ID</div>
              </div>
            </div>
            <i className="bx bx-user" id="log_out"></i>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="text">This space we can add chat</div>
      </section>

      <Helmet>
        <script src="./Dashboard.js"></script>
      </Helmet>
    </>
  );
};
