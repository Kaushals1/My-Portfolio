import React, { useEffect } from "react";
import "./Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ss from "../../img/hand3.png";

function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".contact_header", {
      opacity: 0,
      y: -40,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact_header",
        start: "10px 50%",
      },
    });
    gsap.from(".contact_greeting, .left-ans", {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact_greeting",
        start: "-100px 50%",
      },
    });

    gsap.from(".hand", {
      y: 400,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact_header",
        start: "10px 50%",
      },
    });
  });
  return (
    <div className="contact" id="contact">
      <div className="contact_left">
        <div className="contact_header">
          <div className="contact_header_inner">MY CONTACT</div>
        </div>
        <div className="contact_greeting">
          Let's
          <span> Connect</span>.
        </div>
        <div className="left-ans">
          <div className="phone">
            Phone
            <div className="svg_detail">+91 8850201102</div>
          </div>
          <div className="email">
            Email
            <div className="svg_detail">kaushalsheth50@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <img className="hand" src={ss} alt="" />
      </div>
    </div>
  );
}

export default Contact;
