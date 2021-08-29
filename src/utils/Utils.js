import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const scrollToFunc = (target) => {
gsap.registerPlugin(ScrollToPlugin);
  gsap.to(window, {
    duration: 0,

    scrollTo: target,
    ease: "power4.inOut"
  });
};
