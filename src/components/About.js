import React, { useState } from "react";

const About = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <section className="container project-intro">
      <h1>BuyWise AI - AI Application Development</h1>

      {/* Problem-Solution Toggle */}
      <section className="problem-solution-toggle">
        <div className="toggle-container">
          <span className={`toggle-label ${!showSolution ? "active" : ""}`}>Problem</span>
          <label className="switch">
            <input type="checkbox" onChange={() => setShowSolution(!showSolution)} />
            <span className="slider"></span>
          </label>
          <span className={`toggle-label ${showSolution ? "active" : ""}`}>Solution</span>
        </div>
        <p className="fade-text">
          {showSolution
            ? `BuyWise AI automates the process of comparing prices and analyzing seller reliability through AI. It saves users the hassle of manually browsing multiple websites and identifies the best deals based on price, ratings, and credibility.`
            : `Online shoppers face time-consuming price checks, inconsistent seller reliability information, and decision fatigue when comparing products across multiple stores.`}
        </p>
      </section>

      <section className="project-details">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>Automatic product aggregation and sorting (cheapest → most expensive).</li>
          <li>AI-based seller trust ranking using ratings and reliability signals.</li>
          <li>Explanation notes for each recommendation to improve transparency.</li>
          <li>Direct links to product pages for quick checkout flow.</li>
          <li>User account for personalization and saved searches.</li>
          <li>Dark mode and accessible UI for comfortable browsing.</li>
          <li>Star rating & user feedback system to continuously improve results.</li>
        </ul>
      </section>

      <section className="tech-plan">
        <h2>Planned Implementation</h2>
        <article>
          <h3>Prototype</h3>
          <p>Initial prototype built in Thunkable (no-code) to validate user flow and AI outputs.</p>
        </article>
        <article>
          <h3>Final App</h3>
          <p>Full-stack implementation with frontend UI, backend API, database for ratings and users, and AI modules for seller scoring.</p>
        </article>
      </section>
    </section>
  );
};

export default About;
