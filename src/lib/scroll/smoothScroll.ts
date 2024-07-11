import Lenis from "lenis";
import gsap from "gsap";

export function createSmoothScroll() {
  const lenis = new Lenis();

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
}
