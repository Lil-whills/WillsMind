import React from 'react'
import footerLogo from '../assets/willsmind logo.webp'
import linkdln from '../assets/linkdln.webp'
import github from '../assets/git.jpeg'
import facebook from '../assets/facebook.webp'

const Footer = () => {
  return (
    <footer className="bg-blue-950 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center text-white px-8 py-4 max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={footerLogo} alt="WillsMind logo" className="w-8 h-8" />
          <span className="font-bold text-lg">WillsMind</span>
        </div>

        {/* Copyright */}
        <div className="text-sm font-medium mt-2 sm:mt-0">
          © 2025 <span className="font-semibold">WillsMind</span>. All rights reserved.
        </div>

        {/* Social icons */}
        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/ameyaw-williams-kyere-76b60a34b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkdln}
              alt="LinkedIn"
              className="w-7 h-7 rounded-full hover:scale-110 transition duration-200 cursor-pointer"
            />
          </a>

          <a
            href="https://github.com/Lil-whills"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-7 h-7 rounded-full hover:scale-110 transition duration-200 cursor-pointer"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ameyaw-williams-kyere-76b60a34b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-7 h-7 rounded-full hover:scale-110 transition duration-200 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
