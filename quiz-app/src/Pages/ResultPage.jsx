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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center py-10 text-blue-950">
      <img
        src={logo}
        alt="WillsMind Logo"
        className="w-24 h-24 rounded-full mb-6 border border-blue-900 shadow-md"
      />
      <h1 className="text-2xl font-bold mb-4">Quiz Results 🧠</h1>

      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
        <p className="text-lg font-semibold mb-2">
          Name: <span className="text-blue-700">{name}</span>
        </p>
        <p className="text-lg font-semibold mb-2">
          Index Number: <span className="text-blue-700">{regNo || "N/A"}</span>
        </p>

        <div className="text-3xl font-bold text-green-700 mt-4 mb-2">
          {percentage}%
        </div>
        <p className="text-lg mb-2 font-semibold text-blue-800">
          Score: {score}/{total}
        </p>
        <p className="text-lg mb-4">{remark}</p>

        <p className="text-sm text-gray-500 mb-4">Submitted on: {date}</p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
