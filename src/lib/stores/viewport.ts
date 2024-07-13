import { readable } from "svelte/store";

export const viewport = readable(
  {
    width: typeof window !== "undefined" ? window.innerWidth : 1920 * 2,
    height: typeof window !== "undefined" ? window.innerHeight : 800 * 2,
  },
  (set) => {
    if (typeof window !== "undefined") {
      function updateViewProps() {
        set({ width: window.innerWidth, height: window.innerHeight });
      }

      window.addEventListener("resize", updateViewProps);

      updateViewProps();

      return () => {
        window.removeEventListener("resize", updateViewProps);
      };
    }
  }
);
