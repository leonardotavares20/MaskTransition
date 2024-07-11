import gsap from "gsap";

export class Mask {
  target: string;
  trigger: string;
  start: string;
  end: string;
  maskSize: string;
  duration: number;

  constructor(
    target: string,
    trigger: string,
    start: string,
    end: string,
    maskSize: string = "600vw 500vh",
    duration: number = 1
  ) {
    this.target = target;
    this.trigger = trigger;
    this.start = start;
    this.end = end;
    this.maskSize = maskSize;
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
      maskSize: this.maskSize,
      duration: this.duration,
    });
  }
}
