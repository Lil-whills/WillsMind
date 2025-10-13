import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { questions } from "../Data/questions";

const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // ✅ Step 1
  const [score, setScore] = useState(0); // optional: track score

  // ✅ Load student name from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("studentData");
    if (storedData) {
      const student = JSON.parse(storedData);
      setName(student.name);
    }
  }, []);

  // ✅ Get the current question
  const currentQuestion = questions[currentIndex];

  // ✅ Function to check the answer and move to the next question
  const handleNext = () => {
    if (!selectedAnswer) {
      setMessage("⚠️ Please select an answer first!");
      return;
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setMessage("✅ Correct!");
      setScore(score + 1);
    } else {
      setMessage("❌ Oops, you’re wrong.");
    }

    // Wait a bit before showing the next question
    setTimeout(() => {
      setMessage("");
      setSelectedAnswer("");
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert(`🎉 Quiz completed! You scored ${score + 1} / ${questions.length}`);
        // Later we’ll redirect to result page instead of alert
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center py-10 text-blue-950">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={logo}
          alt="WillsMind Logo"
          className="w-28 h-28 rounded-full shadow-md border-2 border-blue-950"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center w-11/12 md:w-3/4 mb-6">
        <h1 className="text-xl font-bold">
          Welcome, <span className="text-green-600">{name}</span> 👋
        </h1>
        <div className="text-lg font-semibold text-red-600">
          Time Left: <span>60s</span>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-2xl shadow-lg border border-blue-100">
        <h2 className="text-lg md:text-xl font-bold mb-4">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <p className="text-gray-800 mb-6">{currentQuestion.question}</p>

        {/* Options */}
        {currentQuestion.options.map((option) => (
          <label key={option} className="block mb-2 cursor-pointer">
            <input
              type="radio"
              name={`question-${currentIndex}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="mr-2 accent-blue-600"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Feedback Message */}
      {message && (
        <div className="mt-4 text-lg font-semibold text-center">{message}</div>
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="mt-6 w-11/12 md:w-3/4 lg:w-1/2 bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-all"
      >
        {currentIndex === questions.length - 1 ? "Submit Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default QuizPage;
