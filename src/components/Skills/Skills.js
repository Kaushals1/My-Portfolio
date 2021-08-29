import React, { useEffect } from "react";
import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".skills-outer-div-color", {
      opacity: 0,
      y: -40,
      duration: 1,
      scrollTrigger: {
        trigger: ".skills-outer-div-color",
        start: "10px 50%",
      },
    });

    gsap.from(".skills-tag-line,.skills-sub-header-text", {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".header-div-outer",
        start: "10px 50%",
      },
    });

    gsap.from(".bottom-card", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: {
        each: 0.3,
      },
      scrollTrigger: {
        trigger: ".skills-sub-header-text",
        start: "10px 50%",
      },
    });
  }, []);

  return (
    <div className="skills" id="sk">
      <div className="top">
        <div className="top-left">
          <div className="header-div-outer skills-outer-div-color">
            <div className="header-div-inner skills-inner-div-color">
              MY EXPERTISE
            </div>
          </div>
          <div className="skills-tag-line">
            What Can I Do For <span>My Clients</span>?
          </div>
          <div className="skills-sub-header-text">
            From Designing through Development, I have got you all covered!
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-card uiux ">
          <div className="uiux-logo common ">
            <svg
              width="45"
              height="33"
              viewBox="0 0 45 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0903 2.32541L5.46015 8.95997C3.01548 10.2441 3.01548 12.3262 5.46015 13.6103L18.0904 20.2449C20.535 21.5291 24.4986 21.5291 26.9433 20.2449L39.5735 13.6103C42.0181 12.3262 42.0181 10.2441 39.5735 8.95997L26.9433 2.32541C24.4986 1.04124 20.535 1.04124 18.0903 2.32541Z"
                stroke="#3C86C6"
                strokeWidth="3"
              />
              <rect
                width="18.7544"
                height="3"
                rx="1.5"
                transform="matrix(0.87636 0.481656 -0.562995 0.82646 2.20703 19.1392)"
                fill="#3C86C6"
              />
              <rect
                width="22.5212"
                height="3"
                rx="1.5"
                transform="matrix(0.879894 -0.47517 0.556236 0.831024 22.5713 30.2202)"
                fill="#3C86C6"
              />
            </svg>
          </div>
          <div className="card-title">
            UI | UX <span className="uiux-title">Design</span>
          </div>
          <div className="card-desc">
            Physical or digital, a good design gives the product an edge that
            makes people want to use it. The goal is to help the brand connect
            to its users on a more personal level.
          </div>
        </div>
        <div className="bottom-card responsive ">
          <div className="res-logo common ">
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="12.0698"
                width="22.5251"
                height="21.43"
                rx="3.5"
                stroke="#C9330C"
                strokeWidth="3"
              />
              <rect
                x="13.9746"
                y="1.5"
                width="22.5251"
                height="21.43"
                rx="3.5"
                stroke="#C9330C"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="card-title">
            Responsive <span className="res-title">Design</span>
          </div>
          <div className="card-desc">
            People consume media on the go today on a variety of devices. This
            makes it imperative for the designs to be responsive for all screen
            sizes ,thus ensuring rich user experience.
          </div>
        </div>
        <div className="bottom-card app ">
          <div className="dev-logo common">
            <svg
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="4.807"
                height="25.8184"
                rx="2.4035"
                transform="matrix(0.494903 -0.868262 0.840385 0.543127 0.0310059 4.4668)"
                fill="#771CEB"
              />
              <rect
                width="4.8007"
                height="25.854"
                rx="2.40035"
                transform="matrix(0.497806 0.867979 -0.837616 0.545123 21.938 12.7236)"
                fill="#771CEB"
              />
              <rect
                x="18"
                y="29.6479"
                width="3.64816"
                height="17.3711"
                rx="1.82408"
                transform="rotate(-90 18 29.6479)"
                fill="#AA79E8"
              />
            </svg>
          </div>
          <div className="card-title">
            App <span className="dev-title">Development</span>
          </div>
          <div className="card-desc">
            Yes, you read that correct! Not only do I design web and mobile
            applications that provide with a pleasant user experience, but I am
            also equipped to implement my designs into deploy ready products.
          </div>
        </div>
      </div>
    </div>
  );
}
