import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Shooting Range</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/koleksi" className="navbar-link">Koleksi</Link>
        </li>
        <li>
          <Link to="/Akun" className="navbar-link">Akun</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;