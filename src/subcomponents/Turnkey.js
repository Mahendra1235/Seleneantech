import React from "react";

export default function Turnkey() {
  return (
    <div className="solutions-container">
      <h2>Turnkey Design</h2>
      <p className="solutions-intro">
        Our turnkey design services provide end-to-end solutions for ASIC and SoC 
        development — from RTL design all the way to final GDSII tape-out. 
        We ensure faster time-to-market while maintaining performance, power, 
        and area efficiency.
      </p>

      <h3>Capabilities</h3>
      <ul className="solutions-list">
        <li>RTL to GDS2 complete flow</li>
        <li>Netlist to GDS2 implementation</li>
        <li>DFT (Design for Test) to GDS2 integration</li>
        <li>Low-power design methodologies</li>
        <li>Advanced timing closure techniques</li>
      </ul>

      {/* <h3>Key Benefits</h3>
      <ul className="solutions-list benefits">
        <li>Accelerated design cycles with proven flows</li>
        <li>Reduced risk through silicon-proven methodologies</li>
        <li>Seamless integration with IPs and 3rd-party components</li>
        <li>Optimized PPA (Performance, Power, Area)</li>
      </ul> */}
    </div>
  );
}
