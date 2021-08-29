import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import ss from "../../img/ss.png";
import { scrollToFunc } from "../../utils/Utils";
function Hero() {
  useEffect(() => {
    gsap.from(".hero-left-header ,.hero-sub-header-text, .intro", {
      opacity: 0,
      x: -40,
      duration: 1,
    });

    gsap.from(".nav", {
      opacity: 0,
      y: -40,
      duration: 1,
    });

    gsap.from(".hero-right", {
      opacity: 0,
      y: 20,
      x: 50,
      duration: 1,
    });

    gsap.from(".animate", {
      duration: 1,
      opacity: 0,
      y: 20,
      x: -50,
    });
  }, []);

  return (
    <div className="main" id="home">
      <div className="nav">
        <div className="nav-logo">
          <div className="logo-text">
            kaushal<span style={{ color: "#3c86c6" }}>sheth</span>.
          </div>
        </div>
        <div className="nav-links">
          <ul className="nav-items">
            <li
              onClick={() => {
                scrollToFunc("#sk");
              }}
            >
              Skills
            </li>
            <li
              onClick={() => {
                scrollToFunc("#tools");
              }}
            >
              Tools
            </li>
            <li
              onClick={() => {
                scrollToFunc("#proj");
              }}
            >
              Work
            </li>
            <li
              onClick={() => {
                scrollToFunc("#contact");
              }}
            >
              Contact{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="hero">
        <div className="hero-left">
          <div className="intro">--- Introduction</div>
          <div className="hero-left-header">
            <h1>
              Hello, My <br />
              Name's <span>Kaushal</span>.
            </h1>
          </div>
          <div className="hero-sub-header-text">
            I Am A Web Developer & An Aspiring UI/UX Designer.
          </div>
          <div className="animate">
            <div
              className="hero-left-cta"
              onClick={() => {
                scrollToFunc("#contact");
              }}
            >
              <div className="cta-text">Let's Talk?</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-pic js-tilt">
            <img src={ss} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
