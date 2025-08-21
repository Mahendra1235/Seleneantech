import React from "react";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <div className="solutions-container">
      <h2>Our Solutions</h2>
      <p>Select one of the categories below:</p>
      <ul>
        <li><Link to="/solutions/turnkey">Turnkey Design</Link></li>
        <li><Link to="/solutions/parts">Parts</Link></li>
        <li><Link to="/solutions/ready2chip">Ready2Chip</Link></li>
        <li><Link to="/solutions/partnership">Partnership</Link></li>
      </ul>
    </div>
  );
}
