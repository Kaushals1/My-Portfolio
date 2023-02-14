import "./App.css";
import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  useEffect(() => {
    gsap.to("body", {
      css: { visibility: "visible" },
      duration: 0,
    });
    gsap.registerPlugin(ScrollTrigger);
  },[]);

  return (
    <div className="App">
      <Menu />
      <Hero />
      <Skills />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
