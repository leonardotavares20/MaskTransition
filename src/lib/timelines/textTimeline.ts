import gsap from "gsap";
import SplitType from "split-type";

export function createTimelineText() {
  const title = new SplitType("#hero-section__text", { types: "words" });

  const chars = title.words;

  return gsap
    .timeline()
    .to(chars, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2",
    })
    .to(
      "#hero-section__text",
      {
        opacity: 1,
      },
      0
    )
    .to("#header__title", {
      duration: 1,
      text: "Scroll :)",
      ease: "none",
    });
}
