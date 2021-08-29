import React, { useState, useEffect } from "react";
import "./Menu.css";
import { gsap } from "gsap";
import { scrollToFunc } from "../../utils/Utils";

function Menu() {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    if (toggle) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
    setToggle(!toggle);
  };
  useEffect(() => {
    gsap.from(".hamburger", {
      opacity: 0,
      y: -20,
      x: 50,
      duration: 1.8,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="menu">
      <div className="hamburger" onClick={menuToggle}>
        <div className={toggle ? "line1-o black" : "line white"}></div>
        <div className={toggle ? "line2-o black" : "line white"}></div>
      </div>

      <div className={toggle ? "visible" : "not"}>
        <ul className="sidebar-navlinks">
          <li
            onClick={() => {
              menuToggle();
              scrollToFunc("#home");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              menuToggle();
              scrollToFunc("#sk");
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              menuToggle();
              scrollToFunc("#tools");
            }}
          >
            Tools
          </li>
          <li
            onClick={() => {
              menuToggle();
              scrollToFunc("#proj");
            }}
          >
            Work
          </li>
          <li
            onClick={() => {
              menuToggle();
              scrollToFunc("#contact");
            }}
          >
            Contact{" "}
          </li>
        </ul>
        <div className="menu-divider"></div>

        <div className="socials">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kaushal-sheth-631748194/"
          >
            {" "}
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/kaushal.f.sheth"
          >
            {" "}
            Facebook
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kaushals1"
          >
            {" "}
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kaushal.sheth.01/"
          >
            {" "}
            Instagram
          </a>
        </div>
      </div>
      <div
        className="bg"
        style={{
          visibility: toggle ? "visible" : "hidden",
          opacity: toggle ? 1 : 0,
          zIndex: toggle ? 3 : 1,
        }}
        onClick={toggle ? menuToggle : null}
      ></div>
    </div>
  );
}

export default Menu;
