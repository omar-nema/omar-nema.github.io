<script>
  import { transitionTime } from '../stores/state';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  export let imgs;
  let currSlide = 0;
  let maxH;
  export let imgCap = '1200px';

  function initSlideSize() {
    if (document.querySelector('img')) {
      maxH = document.querySelector('img').getBoundingClientRect().height;
    }
  }

  let sampleImage;
  $: {
    sampleImage;
    if (sampleImage) {
      maxH = sampleImage.getBoundingClientRect().height;
    }
  }

  onMount(() => {
    window.addEventListener('resize', () => {
      initSlideSize();
    });
  });
</script>

<section in:fade={{ duration: $transitionTime }}>
  <div class="slider">
    <div class="slides" style="height: {maxH}px">
      {#each imgs as img, slideIndex}
        <div
          class="slide"
          class:curr={slideIndex == currSlide}
          class:before={slideIndex < currSlide}
          class:after={slideIndex > currSlide}
          on:click={() => {
            if (currSlide < imgs.length - 1) {
              currSlide++;
            } else {
              currSlide = 0;
            }
          }}
        >
          <img
            on:load={() => {
              initSlideSize();
            }}
            style="max-width: min(90vw, {imgCap})"
            src={img}
            bind:this={sampleImage}
          />
        </div>
      {/each}
    </div>
    <div class="dots">
      {#each imgs as img, index}
        <div
          class="dot"
          class:active={currSlide == index}
          data-index={index}
          on:click={() => {
            currSlide = index;
          }}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .slider {
    margin: auto;
    height: auto;
    width: 100%;
  }

  .slides {
    padding: 10px;
    height: 100%;
    position: relative;
    overflow: hidden;
    max-height: calc(100vh - 120px);
  }
  .slide {
    transition: transform ease-in-out 0.65s, opacity ease-in-out 0.8s;
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 100%;
    opacity: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .slide.curr {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  .slide.before {
    transform: translate(-100vw, -50%);
    opacity: 0;
  }
  .slide.after {
    transform: translate(100vw, -50%);
    opacity: 0;
  }
  img {
    max-height: calc(100vh - 120px);
    border: 1px solid #aea3a3;
    padding: 5px;
  }

  .dots {
    display: flex;
    margin-top: 16px;
    justify-content: center;
  }
  .dot {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    transition: background 0.3s ease-in-out;
    margin: 0 10px;
    border: 2px solid #a59898;
    background: white;

    cursor: pointer;
  }
  .dot:hover {
    background: black;
  }
  .dot.active {
    background: black;
    border-color: black;
  }
</style>
