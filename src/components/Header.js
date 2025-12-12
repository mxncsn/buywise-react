import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ title }) => {

  useEffect(() => {
    const toggle = document.getElementById("themeToggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      toggle.checked = true;
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      toggle.checked = false;
    }

    // Handle toggle switch
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  }, []);

  return (
    <header>
      <div className="container header-inner">
        <nav aria-label="Main Navigation">
          <NavLink to="/" className="nav-logo">
            <img src="/Images/BuyWise-Logo.png" alt="BuyWise AI Logo" />
            <span className="logo-text">{title}</span>
          </NavLink>

          <ul className="nav-list">
            <li><NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
            <li><NavLink to="/contacts" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contacts</NavLink></li>
          </ul>

          <div className="theme-toggle">
            <label className="theme-switch">
              <input type="checkbox" id="themeToggle" aria-label="Toggle Theme" />
              <span className="theme-slider"></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

