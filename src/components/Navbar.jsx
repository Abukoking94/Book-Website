import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const navItemClass =
    "hover:text-[rgba(114,105,201,0.85)] cursor-pointer transition-colors duration-200";

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
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={navItemClass}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/favorites"
          onClick={() => setIsOpen(false)}
          className={navItemClass}
        >
          <li>Favorites</li>
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={navItemClass}
        >
          <li>Contact</li>
        </NavLink>

        {!isAuthenticated ? (
          <>
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className={navItemClass}
            >
              <li>Login</li>
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className={navItemClass}
            >
              <li>Sign Up</li>
            </NavLink>
          </>
        ) : (
          <li onClick={handleLogout} className={navItemClass}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
