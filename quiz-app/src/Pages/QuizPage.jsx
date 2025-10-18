import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { questions } from "../Data/questions";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);
  const [quizActive, setQuizActive] = useState(true);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProgress = localStorage.getItem("quizProgress");
    const storedTime = localStorage.getItem("remainingTime");
    const studentData = localStorage.getItem("studentData");

    if (studentData) {
      const student = JSON.parse(studentData);
      setName(student.name);
      setRegNo(student.regNo || student.indexNumber || "N/A");
    }

    if (storedProgress) {
      const progress = JSON.parse(storedProgress);
      setCurrentQuestion(progress.currentQuestion || 0);
      setScore(progress.score || 0);
    }

    if (storedTime) {
      const savedTime = parseInt(storedTime, 10);
      setTimeLeft(savedTime > 0 ? savedTime : 60);
    }
  }, []);

  useEffect(() => {
    if (quizActive) {
      localStorage.setItem(
        "quizProgress",
        JSON.stringify({ currentQuestion, score })
      );
    }
  }, [currentQuestion, score, quizActive]);

  useEffect(() => {
    if (!quizActive) return;

    if (timeLeft <= 0) {
      alert("⏰ Time is up! Submitting your quiz...");
      handleSubmit();
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        localStorage.setItem("remainingTime", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timeLeft, quizActive]);

  const handleAnswer = () => {
    const correct = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correct) {
      setScore((prev) => prev + 1);
      setMessage("✅ Correct!");
    } else {
      setMessage("❌ Oops, wrong answer.");
    }
  };

  const handleNext = () => {
    handleAnswer();
    setTimeout(() => {
      setMessage("");
      setSelectedAnswer("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }, 800);
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);

    const percentage = ((score / questions.length) * 100).toFixed(1);
    let remark = "";

    if (percentage >= 80) remark = "Excellent work 👏";
    else if (percentage >= 50) remark = "Good effort 👍";
    else remark = "Keep practicing 💪";

    const resultData = {
      name,
      regNo,
      score,
      total: questions.length,
      percentage,
      remark,
      date: new Date().toLocaleString(),
    };

    // 🧠 Store results as an array for all students
    const existingResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    existingResults.push(resultData);
    localStorage.setItem("quizResults", JSON.stringify(existingResults));

    // 🧠 Store latest for current student
    localStorage.setItem("quizResult", JSON.stringify(resultData));

    localStorage.removeItem("quizProgress");
    localStorage.removeItem("remainingTime");

    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center py-10 text-blue-950">
      <img
        src={logo}
        alt="WillsMind Logo"
        className="w-24 h-24 rounded-full mb-6 border border-blue-900 shadow-md"
      />

      <div className="flex justify-between items-center w-11/12 md:w-3/4 mb-6">
        <h1 className="text-xl font-bold">
          Welcome, <span className="text-green-600">{name}</span> 👋
        </h1>
        <div className="text-lg font-semibold text-red-600">
          Time Left: <span>{timeLeft}s</span>
        </div>
      </div>

      {quizActive && (
        <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-2xl shadow-lg border border-blue-100">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </p>

          {questions[currentQuestion].options.map((option) => (
            <label key={option} className="block mb-2">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}

          {message && (
            <div className="mt-4 text-lg font-semibold text-blue-800">
              {message}
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="mt-6 w-40 bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-all"
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
