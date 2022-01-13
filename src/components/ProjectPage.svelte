<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Carousel from '../components/Carousel.svelte';
  import InfoSection from '../components/InfoSection.svelte';
  export let imgs = [];
  export let info;
  export let desc = [];
  export let link = null;
  import { fade } from 'svelte/transition';
</script>

<Header />
<div
  class="container"
  in:fade={{ delay: 300, duration: 500 }}
  out:fade={{ duration: 300 }}
>
  <Carousel {imgs} />
  <InfoSection description={desc} {info} {link} />
</div>

<style>
  :global(body) {
    padding-left: calc(100vw - 100%);
  }
</style>
