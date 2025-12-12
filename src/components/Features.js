import React from "react";

const Features = () => {
  return (
    <section className="features container" id="features">
      <header>
        <h2>Why BuyWise AI matters?</h2>
      </header>
      <article className="feature">
        <h3>Automated Price Sorting</h3>
        <p>Find cheapest-to-most-expensive results instantly, aggregated across shops.</p>
      </article>
      <article className="feature">
        <h3>Trusted Seller Highlight</h3>
        <p>AI evaluates seller ratings & reliability and highlights the most trusted option.</p>
      </article>
      <article className="feature">
        <h3>Reasoned Recommendations</h3>
        <p>Short explanations accompany suggestions to build user confidence.</p>
      </article>
    </section>
  );
};

export default Features;
