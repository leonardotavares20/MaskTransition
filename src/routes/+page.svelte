<script lang="ts">
  import "../index.css";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import SplitType from "split-type";
  import TextPlugin from "gsap/dist/TextPlugin";

  let timeline;

  onMount(async () => {
    gsap.registerPlugin(TextPlugin);

    const title = new SplitType("#text", { types: "words" });

    const chars = title.words;

    timeline = gsap.timeline();

    timeline.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2",
      }
    );
    timeline.to("#title-header", {
      duration: 1,
      text: "Scroll :)",
      preserveSpaces: true,
      ease: "none",
    });
  });
</script>

<svelte:head>
  <title>Mask Image Transition</title>
</svelte:head>

<header class="header"><span id="title-header">Leonardo</span></header>

<div class="first-section">
  <h1 id="text"><span class="text-gsap">GSAP</span> and CSS Mask</h1>
</div>
<section class="section-masks">
  <div class="mask">
    <!-- <img src="/images/2.jpg" alt="" /> -->
    <video width="320" height="240" autoplay muted loop>
      <source src="/video.mp4" type="video/mp4" />
      <track
        src="fgsubtitles_en.vtt"
        kind="captions"
        srclang="en"
        label="English"
      />
      <track
        src="fgsubtitles_no.vtt"
        kind="subtitles"
        srclang="no"
        label="Norwegian"
      />
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="mask">
    <img src="/images/8.jpg" alt="" />
  </div>
  <div class="mask">
    <img src="/images/2.jpg" alt="" />
  </div>
</section>
