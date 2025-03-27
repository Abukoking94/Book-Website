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
        <li className="list-items">
          <Link to="/"> Home</Link>
        </li>
        <li className="list-items">
          <Link to="/about"> About Us</Link>
        </li>
        <li className="list-items">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-items">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;