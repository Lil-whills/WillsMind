// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-950 px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold text-white">WillsMind</h1>

      <div className="space-x-4 text-white">
        <Link to="/" className="hover:text-blue-400 focus:underline">Home</Link>
        <Link to="/student-login" className="hover:text-blue-400 focus:underline">Student</Link>
        <Link to="/lecturer-login" className="hover:text-blue-400 focus:underline">Lecturer</Link>
      </div>
    </nav>
  );
}

export default Navbar;
