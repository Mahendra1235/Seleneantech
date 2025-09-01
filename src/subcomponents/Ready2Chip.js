import React from "react";

export default function Ready2Chip() {
  return (
    <div className="solutions-container">
      <h2>Ready2Chip</h2>
      <p className="solutions-intro">
        Ready2Chip provides pre-built frameworks and validation platforms 
        that accelerate the design, integration, and verification of complex SoCs. 
        Our solutions are built to be scalable, flexible, and silicon-proven.
      </p>

      <h3>Offerings</h3>
      <ul className="solutions-list">
        <li>SoC Framework for rapid prototyping</li>
        <li>Reusable IP Framework for integration</li>
        <li>VIP (Verification IP) Framework</li>
        <li>IP Validation Platform with proven test environments</li>
      </ul>

      {/* <h3>Key Benefits</h3>
      <ul className="solutions-list benefits">
        <li>Reduced development effort with pre-verified components</li>
        <li>Shorter time-to-market through reusable frameworks</li>
        <li>Enhanced verification coverage with proven VIPs</li>
        <li>Lower risk with silicon-proven platforms</li>
      </ul> */}
    </div>
  );
}
