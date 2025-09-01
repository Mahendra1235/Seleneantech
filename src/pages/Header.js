import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Company Logo" className="logo-image" />
          Selenean
        </Link>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>

        <li className="dropdown">
          <span className="dropbtn">Solutions ▾</span>
          <ul className="dropdown-content">
            <li><Link to="/solutions/turnkey" onClick={closeMenu}>Turnkey Design</Link></li>
            <li><Link to="/solutions/parts" onClick={closeMenu}>Parts</Link></li>
            <li><Link to="/solutions/ready2chip" onClick={closeMenu}>Ready2Chip</Link></li>
            <li><Link to="/solutions/partnership" onClick={closeMenu}>Partnership</Link></li>
          </ul>
        </li>

        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
