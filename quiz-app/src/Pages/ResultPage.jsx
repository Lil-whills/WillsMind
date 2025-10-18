import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const ResultsPage = () => {
  const [resultData, setResultData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResult = localStorage.getItem("quizResult");
    if (storedResult) {
      const parsed = JSON.parse(storedResult);
      setResultData(parsed);
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!resultData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-900 text-lg">
        Loading results...
      </div>
    );
  }

  const { name, regNo, score, total, percentage, remark, date } = resultData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center py-10 text-blue-950 overflow-hidden">
      {/* Logo */}
      <img
        src={logo}
        alt="WillsMind Logo"
        className="w-24 h-24 rounded-full mb-6 border border-blue-900 shadow-md hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-950 animate-fadeIn">
        🧠 Quiz Results
      </h1>

      {/* Result Card */}
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 md:p-10 rounded-2xl shadow-xl border border-blue-100 text-center transform transition-all duration-500 hover:shadow-2xl animate-slideUp">
        {/* Student Info */}
        <div className="space-y-2 mb-4">
          <p className="text-lg md:text-xl font-semibold">
            Name: <span className="text-blue-700">{name}</span>
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Index Number: <span className="text-blue-700">{regNo || "N/A"}</span>
          </p>
        </div>

        {/* Score Section */}
        <div className="my-6">
          <div className="text-5xl font-extrabold text-green-600 mb-2 animate-bounce">
            {percentage}%
          </div>
          <p className="text-lg md:text-xl mb-2 font-semibold text-blue-800">
            Score: {score}/{total}
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-medium italic">
            {remark}
          </p>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-6">📅 Submitted on: {date}</p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
