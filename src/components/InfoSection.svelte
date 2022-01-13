<script>
  import { transitionTime } from '../stores/state';
  import { fade } from 'svelte/transition';
  import { selectedProject } from '../stores/state';
  export let description = '';
  export let info = '';
  export let link;
</script>

<section class="info-section" in:fade={{ duration: $transitionTime }}>
  <h1>{$selectedProject}</h1>
  <div class="info-sec">
    <p>{info}</p>
  </div>
  <div class="info-body">
    {#each description as para}
      <p>
        {para}
      </p>
    {/each}
  </div>
  {#if link}
    <a class="btn-launch" target="_blank" href={link}>Open Project</a>
  {/if}
</section>

<style>
  .info-section {
    width: 100%;
    max-width: 96%;
    overflow: hidden;
    margin: auto;
    max-width: 800px;
  }
  .info-sec {
    color: gray;
  }

  h1 {
    margin-bottom: 10px;
    text-decoration: underline;
  }

  .btn-launch {
    width: 100%;
    padding: 18px 0;
    border: 1px solid black;
    text-align: center;
    font-weight: 600;
    background: #feffad8c;
    cursor: pointer;
    transition: all 0.15s linear;
    display: block;
    margin-top: 35px;
    text-decoration: none;
    color: black;
  }

  .btn-launch:hover {
    opacity: 0.85;
  }
</style>
