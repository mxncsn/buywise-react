import React, { useState } from "react";

const faqData = [
  {
    question: "What is BuyWise AI?",
    answer: `BuyWise AI is an intelligent shopping assistant designed to simplify the online buying experience. It automatically 
compares prices, evaluates sellers, and identifies the best deals across multiple platforms. By using advanced AI 
algorithms, it ensures that users get reliable recommendations tailored to their preferences and budget. This helps 
shoppers save time and make informed purchasing decisions with confidence.`
  },
  {
    question: "Is BuyWise AI free to use?",
    answer: `Yes, the prototype version of BuyWise AI is currently free for all users, allowing anyone to explore its main 
features without cost. The team aims to keep essential tools accessible while continuing to improve the system. 
However, upcoming versions may introduce optional premium plans that offer advanced analytics, faster processing, 
or exclusive shopping insights for those who want enhanced functionality.`
  },
  {
    question: "How does BuyWise AI compare products?",
    answer: `BuyWise AI compares products through a powerful algorithm that evaluates key factors such as price, seller reputation, 
and product reliability. It collects data from different online stores and analyzes it to determine which option offers 
the best value. The AI also learns from user preferences and shopping history to deliver more accurate recommendations 
over time. This ensures that every comparison is personalized and based on trustworthy insights.`
  }
];

const Contacts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      {/* Existing Contact Intro Section */}
      <section className="container contact-intro">
        <h1>Get in Touch</h1>
        <p>Have questions, feedback, or collaboration ideas? I’d love to hear from you!</p>

        <section className="contact-cards">
          <article className="contact-card">
            <h3>Developer & Project Owner</h3>
            <p><strong>Name:</strong> Amin Casan</p>
            <p><strong>Email:</strong> <a href="mailto:amin.casan@g.msuiit.edu.ph">amin.casan@g.msuiit.edu.ph</a></p>
            <p><strong>Phone:</strong> +63 930 465 1112</p>
          </article>

          <article className="contact-card">
            <h3>Location</h3>
            <p>MSU-IIT, Iligan City, Philippines</p>
            <p>Available: Monday – Friday, 9:00 AM – 5:00 PM</p>
          </article>

          <article className="contact-card">
            <h3>Follow for Updates</h3>
            <p>Stay connected and get the latest updates about BuyWise AI’s development.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1BfGXqmDUn/" className="social-link">🌐 Facebook</a>
              <a href="https://www.instagram.com/mxncsn/" className="social-link">💼 Instagram</a>
              <a href="https://x.com/key_sannn?t=oBJSqj0PW5Xn3EBzBPCAEQ&s=09" className="social-link">🐦 Twitter</a>
              <a href="https://github.com/mxncsn" className="social-link">📧 GitHub</a>
            </div>
          </article>
        </section>
      </section>

      {/* New FAQ Section */}
      <section className="faq container">
        <h1>FAQ</h1>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </h3>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Contacts;

