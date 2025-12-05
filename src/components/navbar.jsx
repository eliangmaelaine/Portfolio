import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-extrabold tracking-wide text-purple-900 cursor-pointer hover:scale-105 transition-transform">
          <>
            <Link to="/">Elaine.El</Link>
          </>
        </div>
        <ul className="hidden md:flex items-center space-x-10 text-purple-900 font-medium">
          <li>
            <Link
              to="/"
              className="relative group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="relative group"
            >
              Project
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-800 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
