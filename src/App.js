import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/Auth/LoginPage";
import { SignupPage } from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import { MentorDashboard } from "./components/Mentor/MentorDashboard";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/mentorDashboard" element={<MentorDashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
