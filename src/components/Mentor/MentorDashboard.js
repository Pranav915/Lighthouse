//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./MentorDashboard.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MentorDashboard = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      !localStorage.getItem("role") === "Mentor"
    ) {
      navigate("/login");
    }
    console.log(localStorage.getItem("token"), localStorage.getItem("role"));
  });
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    console.log(token);
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/menteelist");
  };
  const handleProfileClick = () => {
    navigate("/mentorprofile");
  };

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div className="MentorDashboard">
        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem
                  active={true}
                  icon={<FiHome />}
                  onClick={handleHomeClick}
                >
                  Home
                </MenuItem>
                <MenuItem icon={<FaList />}>Messages</MenuItem>
                <MenuItem icon={<FaRegHeart />} onClick={handleProfileClick}>
                  Profile
                </MenuItem>
                <MenuItem icon={<BiCog />}>Settings</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
