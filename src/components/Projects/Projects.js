import React, { useEffect } from "react";
import "./Projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Group1287 from "../../img/iph2.png";
import Twitter from "../../img/ipad3.png";

export default function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".work", {
      opacity: 0,
      y: -40,
      duration: 1,
      scrollTrigger: {
        trigger: ".work",
        start: "10px 50%",
      },
    });
    gsap.from(".work2", {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".work2",
        start: "10px 50%",
      },
    });

    gsap.from(".tt-anim", {
      opacity: 0,
      x: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".tt-anim",
        start: "-260px 50%",
      },
    });

    gsap.from(".twitter-img", {
      opacity: 0,
      x: -40,
      duration: 1,
      scrollTrigger: {
        trigger: ".tt-anim",
        start: "-260px 50%",
      },
    });

    gsap.from(".one, .two", {
      opacity: 0,
      x: -40,
      duration: 1,
      scrollTrigger: {
        trigger: ".one,.two",
        start: "-100px 50%",
      },
    });

    gsap.from(".endeavour-img", {
      opacity: 0,
      x: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".one",
        start: "-100px 50%",
      },
    });
  });
  return (
    <div className="personal-projects" id="proj">
      <div className="personal-projects-header">
        <div className="work">
          <div className="work_inner">MY WORK</div>
        </div>
        <div className="work2">
          My Personal<span> Projects</span>.
        </div>
      </div>
      <div className="project_parent">
        <div className="personal-projects-twitter">
          <img className="twitter-img" src={Twitter} alt="" />
          <div className="twitter-text tt-anim">
            <div className="twitter-text-head">Twitter Clone</div>
            <div className="project-content-exp">
              This Web Application is a clone of Twitter built using the React
              Library.
              <br />
              <br />
              <span className="keys">Technologies Used -</span> MERN Stack,
              Heroku
              <br />
              <span className="keys">Functionalities -</span> User can register,
              login and post tweets.
              <br />
              <span className="keys">Authentication / Authorisation - </span>JWT
              <br />
              <span className="keys">Database - </span>MongoDB
              <br />
              <br />
              <span className="link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                  href="https://my-twittter-clone.herokuapp.com/"
                >
                  Visit This Clone.
                </a>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <a
                  className="git"
                  href="https://github.com/Kaushals1/My-Twitter-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo.
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="personal-projects-endeavour">
          <div className="twitter-text one">
            <div className="twitter-text-head">Endeavour</div>
            <div className="project-content-exp">
              Endeavour is a collaboration / team management mobile app intended
              to make keeping tabs on ongoing projects a hassle free experience.
              <br />
              <br />
              <span className="keys">Technologies Used -</span> Flutter, Dart,
              Firebase
              <br />
              <span className="keys">Functionalities -</span> User can create
              new projects, subtasks and add / remove team members.
              <br />
              <span className="keys">Authentication / Authorisation - </span>
              Firebase
              <br />
              <span className="keys">Database - </span>Firestore
              <br />
              <br />
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="git"
                  href="https://github.com/Kaushals1/Endeavour-flutter"
                >
                  GitHub Repo.
                </a>
              </span>
            </div>
          </div>
          <img className="endeavour-img" src={Group1287} alt="" />
          <div className="twitter-text two">
            <div className="twitter-text-head">Endeavour</div>
            <div className="project-content-exp">
              Endeavour is a collaboration / team management mobile app intended
              to make keeping tabs on ongoing projects a hassle free experience.
              <br />
              <br />
              <span className="keys">Technologies Used -</span> Flutter, Dart,
              Firebase
              <br />
              <span className="keys">Functionalities -</span> User can create
              new projects, subtasks and add / remove team members.
              <br />
              <span className="keys">Authentication / Authorisation - </span>
              Firebase
              <br />
              <span className="keys">Database - </span>Firestore
              <br />
              <br />
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="git"
                  href="https://github.com/Kaushals1/Endeavour-flutter"
                >
                  GitHub Repo.
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
