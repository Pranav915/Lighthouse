import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword } from "./components/Auth/ForgotPassword";
import { LoginPage } from "./components/Auth/LoginPage";
import { SignupPage } from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import MentorDashboard from "./components/Mentor/MentorDashboard";
import Sidebar from "./components/Mentee/Sidebar";
import { Browse } from "./components/Mentee/Browse";
import { MentorRegister } from "./components/Mentor/MentorRegister";
import { MenteeRegister } from "./components/Mentee/MenteeRegister";
import { Mentorlist } from "./components/Mentee/Mentorlist";

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
            <Route exact path="/browse" element={<Browse />} />
            <Route
              exact
              path="/mentordashboard"
              element={<MentorDashboard />}
            />
            <Route
              exact
              path="/menteedashboard"
              element={<Sidebar />}
            />
            <Route exact path="/mentorregister" element={<MentorRegister />} />
            <Route exact path="/menteeregister" element={<MenteeRegister />} />
            <Route exact path="/mentorlist" element={<Mentorlist />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
