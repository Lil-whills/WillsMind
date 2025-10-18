import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-10 text-center min-h-screen bg-gradient-to-t from-white to-blue-100 pb-10 px-4 md:px-8 animate-fadeIn">

        {/* Header & Logo */}
        <div className="flex flex-col items-center space-y-5 animate-slideDown">
          <img
            src={logo}
            alt="WillsMind Logo"
            className="w-24 sm:w-28 h-24 sm:h-28 rounded-full shadow-lg border-2 border-blue-950 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
            Welcome to <span className="text-green-600">WillsMind!</span>
          </h1>
          <p className="text-blue-950 font-medium text-base sm:text-lg px-2 sm:px-0">
            Ready to test your mind with{" "}
            <span className="text-green-500 font-semibold">Sir William’s</span> Quiz Challenge?
          </p>
          <p className="text-blue-950 text-sm sm:text-base">
            Click <span className="text-green-500 font-semibold">Student</span> to take the quiz or{" "}
            <span className="text-green-500 font-semibold">Lecturer</span> to review quiz results.
          </p>
        </div>

        {/* Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
          <Link to="/student-login">
            <button className="bg-blue-950 px-6 sm:px-8 py-3 rounded-3xl text-white font-semibold hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110 cursor-pointer">
              Student Login
            </button>
          </Link>
          <Link to="/lecturer-login">
            <button className="bg-blue-950 px-6 sm:px-8 py-3 rounded-3xl text-white font-semibold hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110 cursor-pointer">
              Lecturer Login
            </button>
          </Link>
        </div>

        {/* Score Guide */}
        <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-md max-w-md w-full mt-4 border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-950 mb-3">Score Ratings</h2>
          <ul className="text-left space-y-1 font-semibold text-sm sm:text-base">
            <li className="text-green-600">🌟 80% - 100% → Excellence</li>
            <li className="text-sky-600">💪 70% - 79% → Great</li>
            <li className="text-amber-500">⚡ 60% - 69% → Good</li>
            <li className="text-yellow-500">🙂 50% - 59% → Nice Try</li>
            <li className="text-orange-500">⚠️ 40% - 49% → Not Bad</li>
            <li className="text-rose-600">❌ 0% - 39% → Fail</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
