import gsap from "gsap";
import { viewport } from "$lib/stores/viewport";

let width = 0,
  height = 0;

let resizeFactor = 3;

viewport.subscribe((value) => {
  ({ width, height } = value);

  if (width >= 3020 && resizeFactor !== 8) {
    resizeFactor = 8;
  } else if (width >= 2520 && resizeFactor !== 6) {
    resizeFactor = 6;
  } else if (width >= 1920 && resizeFactor !== 4) {
    resizeFactor = 4;
  } else if (width >= 1020 && resizeFactor !== 2) {
    resizeFactor = 2;
  }
});

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
    maskSize: string = `${width * resizeFactor}px ${height * resizeFactor}px`,
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
