// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import StudentLogin from "./Pages/StudentLogin";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";
import LecturerLogin from "./Pages/LecturerLogin";
import LecturerDashboard from "./Pages/LecturerDashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
  
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/lecturer-login" element={<LecturerLogin />} />
          <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
