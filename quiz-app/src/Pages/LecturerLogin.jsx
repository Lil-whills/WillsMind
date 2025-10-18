import React, { useState } from "react";
import loginLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LecturerLogin = () => {
  const [name, setName] = useState("");
  const [QuizNo, setQuizNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validation = (e) => {
    e.preventDefault();
    let message = "";
    const QuizNo = "willsMind210903"

    if (!name.trim()) {
      message = "Please enter your full name.";
    } else if (name.trim().length < 3) {
      message = "Name must be at least 3 characters.";
    } else if (!QuizNo.trim()) {
      message = "Please enter the Quiz code.";
    } else if (QuizNo !== "willsMind210903") {
      message = "The quiz code is wrong.";
    }

    if (message) {
      setError(message);
    } else {
      const lecturerData = { name, QuizNo };
      localStorage.setItem("lecturerData", JSON.stringify(lecturerData));
      alert("Validation passed! 🎉 Redirecting you to the Lecturer’s Dashboard...");
      navigate("/lecturer-dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-white to-blue-100 text-blue-950">
      <div className="mb-6">
        <img src={loginLogo} alt="WillsMind Logo" className="w-28 h-28 rounded-full shadow-md" />
      </div>

      <div className="text-center space-y-2 mb-6">
        <p className="text-2xl font-bold text-blue-950">
          Ready to Review your Students Results from <span className="text-green-600">WillsMind?</span>
        </p>
        <p className="text-md text-gray-700">
          Login with your Name and the Quiz Special Code
        </p>
      </div>

      <form onSubmit={validation} className="bg-white shadow-lg rounded-2xl p-8 w-80 sm:w-96 space-y-5 border border-blue-100">
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="font-semibold mb-1 text-blue-900">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Enter Your Full Name"
            onChange={(e) => setName(e.target.value)}
            className="border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="regNo" className="font-semibold mb-1 text-blue-900">Quiz Code</label>
          <input
            id="regNo"
            type="text"
            value={QuizNo}
            placeholder="Quiz Code..."
            onChange={(e) => setQuizNo(e.target.value)}
            className="border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <div className="text-red-600 font-medium text-sm">{error}</div>}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-bold py-2 rounded-xl hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default LecturerLogin;
