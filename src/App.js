import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Turnkey from "./subcomponents/Turnkey";
import Parts from "./subcomponents/Parts";
import Ready2Chip from "./subcomponents/Ready2Chip";
import Partnership from "./subcomponents/Partnership";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/turnkey" element={<Turnkey />} />
            <Route path="/solutions/parts" element={<Parts />} />
            <Route path="/solutions/ready2chip" element={<Ready2Chip />} />
            <Route path="/solutions/partnership" element={<Partnership />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
