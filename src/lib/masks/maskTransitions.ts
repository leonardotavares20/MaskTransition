import gsap from "gsap";

export class Mask {
  target: string;
  trigger: string;
  start: string;
  end: string;
  duration: number;

  constructor(
    target: string,
    trigger: string,
    start: string,
    end: string,
    duration: number = 1
  ) {
    this.target = target;
    this.trigger = trigger;
    this.start = start;
    this.end = end;
    this.duration = duration;
  }

  maskStart() {
    gsap.to(this.target, {
      scrollTrigger: {
        trigger: this.trigger,
        start: this.start,
        end: this.end,
        scrub: true,
      },
      delay: 1,
      maskSize: "400% 400%",
      duration: this.duration,
    });
  }
}
