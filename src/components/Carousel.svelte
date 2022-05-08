<script>
  import { transitionTime } from '../stores/state';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  export let imgs;
  let currSlide = 0;
  let maxH;
  export let imgCap = '1200px';

  let imgsWithTypes = [];
  imgs.forEach((d) => {
    let type;
    if (d.includes('mp4') || d.includes('avi')) {
      type = 'video';
    } else {
      type = 'image';
    }
    imgsWithTypes.push({
      path: d,
      type: type,
    });
  });

  function initSlideSize() {
    if (document.querySelector('img')) {
      let ht = document.querySelector('img').getBoundingClientRect().height;
      if (ht > 70) {
        maxH = ht;
      }
    }
  }

  let sampleImage;
  $: {
    sampleImage;
    if (sampleImage) {
      let ht = sampleImage.getBoundingClientRect().height;
      if (ht > 70) {
        maxH = ht;
      }
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
      <div
        class="nav-btn left"
        on:click={() => {
          if (currSlide > 0) {
            currSlide--;
          } else {
            currSlide = imgs.length - 1;
          }
        }}
      >
        <span class="material-icons-round"> arrow_left </span>
      </div>
      <div
        class="nav-btn right"
        on:click={() => {
          if (currSlide < imgs.length - 1) {
            currSlide++;
          } else {
            currSlide = 0;
          }
        }}
      >
        <span class="material-icons-round"> arrow_right </span>
      </div>
      {#each imgsWithTypes as img, slideIndex}
        <div
          class="slide"
          class:curr={slideIndex == currSlide}
          class:before={slideIndex < currSlide}
          class:after={slideIndex > currSlide}
          on:click={(e) => {
            if (currSlide < imgs.length - 1) {
              currSlide++;
            } else {
              currSlide = 0;
            }
          }}
        >
          {#if img.type == 'image'}
            <img
              on:load={() => {
                initSlideSize();
              }}
              style="max-width: min(90vw, {imgCap}); max-height: {maxH}px"
              src={img.path}
              bind:this={sampleImage}
            />
          {:else}
            <video
              controls
              style="max-width: min(90vw, {imgCap}); max-height: {maxH}px"
              on:click={(e) => {
                e.stopPropagation();
              }}
            >
              <source src={img.path} type="video/mp4" />
            </video>
          {/if}
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
    padding-bottom: 30px;
  }

  .slides {
    padding: 10px;
    height: 100%;
    position: relative;
    overflow: hidden;
    max-height: calc(100vh - 170px);
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
  img,
  video {
    max-height: calc(100vh - 170px);
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
  .nav-btn {
    position: absolute;
    top: 50%;

    background: #f7f9fd;
    border-radius: 100%;
    display: flex;
    box-shadow: 0x 1px 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #d8d1d1;
    box-shadow: 0.5px 1px 2px 0px rgb(0 0 0 / 10%);
    z-index: 10;
    cursor: pointer;
    transition: border-color 0.1s linear;
    transform: translateY(-50%);
  }
  .nav-btn.left {
    left: 20px;
  }
  .nav-btn.right {
    right: 20px;
  }

  .nav-btn.hidden {
    pointer-events: none;
    visibility: hidden;
  }
  .nav-btn:hover {
    border-color: #c2b8b8;
  }
  .nav-btn .material-icons-round {
    font-size: 28px;
    color: black;
  }
</style>
