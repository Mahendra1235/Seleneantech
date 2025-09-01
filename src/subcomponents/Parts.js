import React from "react";

export default function Parts() {
  return (
    <div className="solutions-container">
      <h2>Parts</h2>
      <p className="solutions-intro">
        Our "Parts" solutions deliver modular design components that can be 
        seamlessly integrated into your SoC or ASIC project. Each part is 
        optimized for reusability, reliability, and performance, helping 
        accelerate design cycles while lowering risk.
      </p>

      <h3>Capabilities</h3>
      <ul className="solutions-list">
        <li>RTL to verified functional parts</li>
        <li>Netlist to silicon-proven parts</li>
        <li>DFT-enabled parts for improved test coverage</li>
        <li>Reusable IP integration</li>
      </ul>

      {/* <h3>Key Benefits</h3>
      <ul className="solutions-list benefits">
        <li>Faster SoC assembly with pre-verified parts</li>
        <li>Improved quality through standardization</li>
        <li>Reduced verification and debug effort</li>
        <li>Scalable for multiple projects and products</li>
      </ul> */}
    </div>
  );
}
