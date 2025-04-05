import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white/40 backdrop-blur-[20px] rounded-full px-4 py-3 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:h-[60px]">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <img
          src="https://previews.123rf.com/images/marco1987/marco19871803/marco1987180300153/96606910-library-logo-with-building-and-books.jpg"
          alt="Library Logo"
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full"
        />

        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <ul
        className={`flex-col sm:flex-row sm:flex items-center gap-6 text-white font-medium ${
          isOpen ? "flex mt-4" : "hidden"
        } sm:mt-0 sm:flex`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          <li className="hover:text-gray-200 cursor-pointer">About Us</li>
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>
          <li className="hover:text-gray-200 cursor-pointer">Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
