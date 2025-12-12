import React from "react";

const Hero = ({ heading, leadText }) => {
  return (
    <section className="hero">
      <div className="hero-logo">
        <img src="/Images/3D-Logo.png" alt="BuyWise AI Logo" />
      </div>
      <div className="container hero-content">
        <h1 id="main-heading">{heading}</h1>
        <p className="lead">{leadText}</p>
        <div className="cta-row">
          <a className="cta btn-primary" href="/about">See Details</a>
          <a className="cta btn-secondary" href="/contacts">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
