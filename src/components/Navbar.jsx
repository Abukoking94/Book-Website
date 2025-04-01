import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-bar-container">
      <img
        src="https://previews.123rf.com/images/marco1987/marco19871803/marco1987180300153/96606910-library-logo-with-building-and-books.jpg"
        alt=""
        className="logo-1"
      />
      <ul className="navList">
        <Link to="/">
          <li className="list-items">Home</li>
        </Link>
        <Link to="/about">
          <li className="list-items">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="list-items">Contact</li>
        </Link>
        <Link to="/login">
          <li className="list-items">Login</li>
        </Link>
      </ul>
    </div>
    
  );
}

export default Navbar;
