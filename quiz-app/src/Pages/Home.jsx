import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-10 text-center min-h-screen bg-gradient-to-t from-white to-blue-100 pb-10 ">
        
        {/* Header & Logo */}
        <div className="flex flex-col items-center space-y-5">
          <img 
            src={logo} 
            alt="WillsMind Logo" 
            className="w-28 h-28 rounded-full shadow-md border-2 border-blue-950 hover:scale-110 hover:transform duration-150 hover:cursor-pointer"
          />
          <h1 className="text-4xl font-extrabold text-blue-950">Welcome to WillsMind!</h1>
          <p className="text-blue-950 font-medium text-lg">
            Ready to test your mind with 
            <span className="text-green-500 font-semibold"> Sir William’s </span>
            Quiz Challenge?
          </p>
          <p className="text-blue-950">
            Click <span className="text-green-500 font-semibold">Student</span> to take the quiz or 
            <span className="text-green-500 font-semibold"> Lecturer</span> to review quiz results.
          </p>
        </div>

        {/* Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/student-login">
            <button className="bg-blue-950 px-6 py-3 rounded-3xl text-white font-semibold hover:bg-blue-900 transition duration-200 shadow-md hover:scale-110 hover:cursor-pointer">
            Student Login
          </button>
          </Link>
          <Link to="/lecturer-login">
            <button className="bg-blue-950 px-6 py-3 rounded-3xl text-white font-semibold hover:bg-blue-900 transition duration-200 shadow-md hover:scale-110 hover:cursor-pointer">
            Lecturer Login
          </button>
          </Link>
        </div>

        {/* Score Guide */}
        <div className="bg-sky-50 p-5 rounded-xl shadow-md max-w-md w-full mt-4">
          <h2 className="text-xl font-bold text-blue-950 mb-3">Score Ratings</h2>
          <ul className="text-left space-y-1 font-semibold">
            <li className="text-green-500">🌟 80% - 100% → Excellence</li>
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
