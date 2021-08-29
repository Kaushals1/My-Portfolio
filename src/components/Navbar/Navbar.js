import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        {/* <div className="logo-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0C7.63033 0 4.88889 2.59716 4.88889 5.78947C4.88889 8.98179 7.63033 11.5789 11 11.5789C14.3697 11.5789 17.1111 8.98179 17.1111 5.78947C17.1111 2.59716 14.3697 0 11 0ZM11 9.26316C8.97844 9.26316 7.33333 7.70463 7.33333 5.78947C7.33333 3.87432 8.97844 2.31579 11 2.31579C13.0216 2.31579 14.6667 3.87432 14.6667 5.78947C14.6667 7.70463 13.0216 9.26316 11 9.26316ZM22 22V20.8421C22 16.3738 18.161 12.7368 13.4444 12.7368H8.55556C3.83778 12.7368 0 16.3738 0 20.8421V22H2.44444V20.8421C2.44444 17.6498 5.18589 15.0526 8.55556 15.0526H13.4444C16.8141 15.0526 19.5556 17.6498 19.5556 20.8421V22H22Z"
              fill="#3C86C6"
            />
          </svg>
        </div> */}
        <div className="logo-text">kaushal<span style={{color:'#3c86c6'}}>sheth</span>.</div>
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
