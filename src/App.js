import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Turnkey from "./subcomponents/Turnkey";
import Parts from "./subcomponents/Parts";
import Ready2Chip from "./subcomponents/Ready2Chip";
import Partnership from "./subcomponents/Partnership";
import Home from "./pages/Home";
import Footer from "../src/pages/Footer";
import logo from "../src/assets/logo.jpg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Company Logo" className="logo-image" />
              Selenean
            </Link>
          </h1>
          <ul className="nav-links">
            <li><Link to="/about">About Us</Link></li>

            {/* Dropdown for Solutions */}
            <li className="dropdown">
              <span className="dropbtn">Solutions ▾</span>
              <ul className="dropdown-content">
                <li><Link to="/solutions/turnkey">Turnkey Design</Link></li>
                <li><Link to="/solutions/parts">Parts</Link></li>
                <li><Link to="/solutions/ready2chip">Ready2Chip</Link></li>
                <li><Link to="/solutions/partnership">Partnership</Link></li>
              </ul>
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Solutions Routes */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/turnkey" element={<Turnkey />} />
            <Route path="/solutions/parts" element={<Parts />} />
            <Route path="/solutions/ready2chip" element={<Ready2Chip />} />
            <Route path="/solutions/partnership" element={<Partnership />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
