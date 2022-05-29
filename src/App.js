import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { LoginPage } from "./components/Auth/LoginPage";
import { SignupPage } from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import MentorDashboard from "./components/Mentor/MentorDashboard";
import { Register } from "./components/Register/Register.js";
import MenteeDashboard from "./components/Mentee/MenteeDashboard";
import {Browse} from "./components/Mentee/Browse";
import Sidebar from "./components/Mentee/Sidebar";
import {MentorDashboardViewProfile} from "./components/Mentor/MentorDashboardViewProfile";
import {MenteeDashboardViewProfile} from "./components/Mentee/ViewProfile";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/browse" element={<Browse />} />
            <Route exact path="/sidebar" element={<Sidebar />} />
            <Route
              exact
              path="/mentordashboard"
              element={<MentorDashboard />}
            />
            <Route
              exact
              path="/mentordashboardviewProfile"
              element={<MentorDashboardViewProfile />}
            />
            <Route
              exact
              path="/menteedashboard"
              element={<MenteeDashboard />}
            />
            <Route
              exact
              path="/menteedashboardviewProfile"
              element={<MenteeDashboardViewProfile />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
