import React, { useState } from "react";
import loginLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";


const StudentLogin = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validation = (e) => {
    e.preventDefault(); 
    let message = "";

    if (!name.trim()) {
      message = "Please enter your full name.";
    } else if (name.trim().length < 3) {
      message = "Name must be at least 3 characters.";
    } else if (!regNo.trim()) {
      message = "Please enter your registration number.";
    } else if (!regNo.includes("PS/CSC/23/")) {
      message = `Registration number must include "PS/CSC/23/".`;
    }

    if (message) {
      setError(message);
    } else {
      const studentData = {name, regNo}
      localStorage.setItem("studentData", JSON.stringify(studentData))
      alert("Validation passed! 🎉, redirecting you to the Quiz Page");
      navigate("/quiz")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-white to-blue-100 text-blue-950">
      <div className="mb-6">
        <img src={loginLogo} alt="WillsMind Logo" className="w-28 h-28 rounded-full shadow-md" />
      </div>

      
      <div className="text-center space-y-2 mb-6">
        <p className="text-2xl font-bold text-blue-950">
          Ready to test your mind with <span className="text-green-600">WillsMind?</span>
        </p>
        <p className="text-md text-gray-700">
          Login with your registration number and email
        </p>
      </div>

      {/* Form */}
      <form onSubmit={validation} className="bg-white shadow-lg rounded-2xl p-8 w-80 sm:w-96 space-y-5 border border-blue-100">
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="font-semibold mb-1 text-blue-900">
            Full Name
          </label>
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
          <label htmlFor="regNo" className="font-semibold mb-1 text-blue-900">
            Registration Number
          </label>
          <input
            id="regNo"
            type="text"
            value={regNo}
            placeholder="PS/CSC/23/0..."
            onChange={(e) => setRegNo(e.target.value)}
            className="border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && (
          <div className="text-red-600 font-medium text-sm">{error}</div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-bold py-2 rounded-xl hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
