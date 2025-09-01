import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>

      <p>
        <strong>Selenean</strong> is a semiconductor solutions company focused on enabling rapid and efficient
        chip development for modern electronic systems. With deep expertise in ASIC and SoC design, we empower
        startups and enterprises alike to bring their silicon ideas to life — faster, smarter, and at scale.
      </p>

      <div className="vision-mission-grid">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be a leading force in the semiconductor ecosystem, delivering innovation in IP, SoC frameworks, and
            design enablement platforms that accelerate the world’s most ambitious chip development programs.
          </p>
        </div>

        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To simplify and streamline the semiconductor design process by providing end-to-end turnkey solutions,
            modular IP frameworks, and engineering services that reduce complexity, cost, and time-to-market.
          </p>
        </div>
      </div>

      <h3>Teams</h3>
      <p>
        <strong>Srikanth B</strong>, Director of Selenean, brings years of experience in semiconductor R&D,
        design architecture, and strategic technology partnerships. Under his leadership, the company is committed
        to delivering high-impact solutions in the ever-evolving chip design landscape.
      </p>
    </div>
  );
}
