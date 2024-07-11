<script lang="ts">
  import "../index.css";
  import gsap from "gsap";
  import TextPlugin from "gsap/dist/TextPlugin";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import { createTimelineText } from "$lib/timelines/textTimeline";
  import { createSmoothScroll } from "$lib/scroll/smoothScroll";
  import { masks } from "$lib/masks/masks";

  onMount(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    masks.forEach((mask) => {
      mask.maskStart();
    });

    createSmoothScroll();
    createTimelineText();
  });
</script>

<svelte:head>
  <title>Mask Image Transition</title>
</svelte:head>

<header class="header"><span id="header__title">Leonardo</span></header>
<div class="hero-section">
  <h1 id="hero-section__text">
    <span class="hero-section__svelte">Svelte</span>
    <span class="hero-section__gsap">GSAP</span> and CSS Mask
  </h1>
</div>
<section class="masks-section">
  <div
    id="mask-section__container-masks"
    class="masks-section__container-masks"
  >
    <div id="masks-section__mask-one" class="masks-section__mask">
      <img src="/images/1.jpg" alt="" />
    </div>
    <div id="masks-section__mask-two" class="masks-section__mask">
      <img src="/images/2.jpg" alt="" />
    </div>
    <div id="masks-section__mask-three" class="masks-section__mask">
      <img src="/images/3.jpg" alt="" />
    </div>
  </div>
</section>
<footer class="footer">End :)</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  .header {
    padding: 30px;
  }

  #header__title {
    font-size: 2rem;
    text-align: center;
  }

  .hero-section {
    height: calc(100vh - 30px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #hero-section__text {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    text-align: center;
    opacity: 0;
  }

  .hero-section__gsap {
    color: rgb(134, 255, 110);
  }

  .hero-section__svelte {
    color: rgb(255, 196, 87);
  }

  .masks-section {
    position: relative;
    height: 600vh;
  }

  .masks-section__container-masks {
    -webkit-position: sticky;
    position: sticky;
    height: 100vh;
    top: 0;
  }

  .masks-section__mask {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100vw;
    position: absolute;
    height: 100vh;
    transform: rotate(360deg);
    background-color: black;
    -webkit-mask-image: url(/masks/mask.svg);
    mask-image: url(/masks/mask.svg);
    -webkit-mask-size: 50%;
    mask-size: 0%;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  .footer {
    height: 100vh;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
  }
</style>
