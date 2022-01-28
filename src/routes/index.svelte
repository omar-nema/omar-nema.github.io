<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Card from '../components/Card.svelte';
  import Filters from '../components/Filters.svelte';
  import { projectData, projectsFiltered } from '../stores/projectData';
  import { fade, slide } from 'svelte/transition';
  import { transitionTime } from '../stores/state';
  import { onMount } from 'svelte';
</script>

<svelte:head>
  <title>omar nema</title>
</svelte:head>
<Header />
<div
  class="content-outer"
  in:fade={{ delay: 300, duration: 500 }}
  out:fade={{ duration: 200 }}
>
  <div class="content-inner">
    <Filters />
  </div>

  <div class="project-outer">
    <div class="project-list-holder content-inner">
      {#each $projectsFiltered as project}
        <Card data={project} />
      {/each}
    </div>
  </div>
</div>

<style>
  .project-outer {
    width: 100%;
    padding-top: 5px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: auto;
    max-height: calc(
      100vh - var(--dim-header-height) - var(--dim-filter-height) - 65px
    );
    padding-bottom: 40px;
  }
  .project-list-holder {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }

  @media only screen and (max-width: 600px) {
    .project-list-holder {
      flex-direction: column;
      flex-wrap: inherit;
      align-items: center;
      justify-content: center;
    }
  }
</style>
