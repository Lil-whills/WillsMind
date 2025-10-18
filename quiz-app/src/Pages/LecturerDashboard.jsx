import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const LecturerDashboard = () => {
  const [lecturer, setLecturer] = useState(null);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLecturer = localStorage.getItem("lecturerData");
    if (!storedLecturer) {
      navigate("/lecturer-login");
      return;
    }
    setLecturer(JSON.parse(storedLecturer));

    const storedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    setResults(storedResults);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("lecturerData");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center py-8 text-blue-950 overflow-hidden animate-fadeIn">
      
      {/* Header */}
      <div className="flex justify-between items-center w-11/12 md:w-4/5 mb-8 animate-slideUp">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="WillsMind Logo"
            className="w-16 h-16 rounded-full shadow-md border border-blue-900 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-blue-950">
              Lecturer Dashboard
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Welcome,{" "}
              <span className="font-semibold text-blue-700">
                {lecturer?.name}
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Results Section */}
      <div className="w-11/12 md:w-4/5 lg:w-3/4 animate-slideUp">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-md border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 animate-fadeInSlow
"
              >
                <h2 className="text-lg font-bold text-blue-800 mb-2">
                  {student.name}
                </h2>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Index No:</span>{" "}
                  {student.regNo || "N/A"}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Score:</span>{" "}
                  {student.score}/{student.total}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Percentage:</span>{" "}
                  {student.percentage}%
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Remark:</span>{" "}
                  {student.remark}
                </p>
                <p className="text-xs text-gray-500">
                  Submitted on: {student.date}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-10 text-lg animate-fadeIn">
            No student results found yet 🕓
          </p>
        )}
      </div>
    </div>
  );
};

export default LecturerDashboard;
