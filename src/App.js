import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/about" element={<LoginPage />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
