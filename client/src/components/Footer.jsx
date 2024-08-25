import React from "react";
import '../styles/styles.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <a href="https://www.linkedin.com/in/haritz-bechet-ibarra-171547239/" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.png" alt="LinkedIn" />
        </a>
        <p><b>© 2024 - Haritz Bechet - Philosophy WebApp</b></p>
        <p><a href="https://philosophyapi.pythonanywhere.com/about/" target="_blank" rel="noopener noreferrer">
          <i>-- Powered by Philosophy API</i>
        </a></p>
      </div>
    </footer>

  );
}