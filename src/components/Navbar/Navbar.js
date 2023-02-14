import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <div className="logo-text">
          kaushal<span style={{ color: "#3c86c6" }}>sheth</span>.
        </div>
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>
            <a href="#">My Skills</a>
          </li>
          <li>
            <a href="#">My Tools</a>
          </li>
          <li>
            <a href="#">My Work</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
