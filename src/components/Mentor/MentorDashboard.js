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
    <section className="home-section" style={{'backgroundColor':'#E4E9F7','padding':'18px 0px 60px 0px'}}>
        <div style={{'max-height':'80%'}}>
            <div style={{'backgroundColor':'lightgray','borderRadius':'8px','margin':'0px 300px 18px 18px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>This is the first message from </p>
            </div>
            <div style={{'backgroundColor':'lightgreen','borderRadius':'8px','margin':'0px 18px 18px 300px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>This is the first message from </p>
            </div>
            <div style={{'backgroundColor':'lightgray','borderRadius':'8px','margin':'10px 300px 10px 10px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>Hi whats up</p>
            </div>
            <div style={{'backgroundColor':'lightgreen','borderRadius':'8px','margin':'18px 18px 18px 300px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>How you doing</p>
            </div>
            <div style={{'backgroundColor':'lightgray','borderRadius':'8px','margin':'10px 300px 10px 10px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>10 bje E cell ki meet hai <br></br> Mai nahi aa paunga</p>
            </div>
            <div style={{'backgroundColor':'lightgreen','borderRadius':'8px','margin':'18px 18px 18px 300px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>[4:18 pm, 27/05/2022] IITI Rahul Cse: arey class ke jagah className ise kuch changes bol raha hoga woh
                [4:41 pm, 27/05/2022] IITI Pranav Me: 6 bje meet karte</p>
            </div>
            <div style={{'backgroundColor':'lightgray','borderRadius':'8px','margin':'10px 300px 10px 10px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>[3:55 pm, 27/05/2022] Mayank Tayal: Bhulna mat ki html nahi JSX hai
                [3:55 pm, 27/05/2022] Mayank Tayal: Changes kar diyo</p>
            </div>
            <div style={{'backgroundColor':'lightgreen','borderRadius':'8px','margin':'18px 18px 18px 300px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>How you doing</p>
            </div>
            <div style={{'backgroundColor':'lightgray','borderRadius':'8px','margin':'10px 300px 10px 10px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>10 bje E cell ki meet hai <br></br> Mai nahi aa paunga</p>
            </div>
            <div style={{'backgroundColor':'lightgreen','borderRadius':'8px','margin':'18px 18px 18px 300px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>[4:18 pm, 27/05/2022] IITI Rahul Cse: arey class ke jagah className ise kuch changes bol raha hoga woh
                [4:41 pm, 27/05/2022] IITI Pranav Me: 6 bje meet karte</p>
            </div>
            <div style={{'backgroundColor':'lightgray','borderRadius':'8px','margin':'10px 300px 10px 10px','minHeight':'35px','display':'flex','alignItems':'center'}}>
                <p style={{'fontSize':'18px','margin':'8px 10px'}}>[3:55 pm, 27/05/2022] Mayank Tayal: Bhulna mat ki html nahi JSX hai
                [3:55 pm, 27/05/2022] Mayank Tayal: Changes kar diyo</p>
            </div>
        </div>
       

        <i className="bi-arrow-right-square-fill"></i>

        <div style={{'borderRadius':'8px','margin':'18px 18px 0px 18px','display':'bottom','backgroundColor':'white','top':'635px','position': 'fixed','width':'93%','border':'3px solid #8AC007'}}>
           
            <input type="text" style={{'width':'95%','fontSize':'18px','padding':'12px'}} placeholder="Type your message here"/>
            <button>Send</button>
            
        </div>
        </section>


      <Helmet>
        <script src="./Dashboard.js"></script>
      </Helmet>
    </>
  );
};