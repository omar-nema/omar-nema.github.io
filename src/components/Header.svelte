<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import { selectedProject, transitionTime } from '../stores/state';
</script>

<header>
  <div class="header-padding left" />
  <div class="inner-header">
    <div class="name-holder">
      <div class="header-name">
        <a sveltekit:prefetch href={base}>omar nema</a>
      </div>
    </div>
    <div
      class="header-nav"
      class:split={$page.url.pathname.includes('project')}
    >
      {#if !$page.url.pathname.includes('project')}
        <div
          class="nav-item work"
          class:selected={!$page.url.pathname.includes('about')}
          in:fade={{ duration: $transitionTime }}
        >
          <a sveltekit:prefetch href={base + '/'}>work</a>
        </div>
        <div
          class="nav-item about"
          class:selected={$page.url.pathname.includes('about')}
          in:fade={{ duration: 500 }}
        >
          <a sveltekit:prefetch href={base + '/about'}>about</a>
        </div>
      {:else}
        <div class="nav-left" in:fade={{ duration: $transitionTime }}>
          <div>work</div>
          <div>/</div>
          <div class="selected project-title">{$selectedProject}</div>
        </div>
        <div class="nav-right" in:fade={{ duration: $transitionTime }}>
          <a class="btn-back" href={base + '/'}>{'< back'}</a>
        </div>
      {/if}
    </div>
  </div>

  <div class="header-padding right" />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    height: 45px;
    width: 100%;
    border-bottom: 1px solid black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .inner-header {
    height: 100%;
    width: 100%;
    max-width: var(--dim-width-max);
    display: flex;
  }
  .header-padding {
    background: blue;
    width: calc(50vw - var(--dim-width-max) / 2);
    height: 100%;
  }
  .header-padding.left {
    background: var(--header-accent);
  }
  .header-padding.right {
    background: var(--header-primary);
  }

  .name-holder {
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: var(--header-accent);
    width: 260px;
    font-weight: 700;
    color: black;
  }
  .header-nav {
    width: calc(100% - 200px);
    background-color: var(--header-primary);
    color: white;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: 500;
    border-left: 1px dashed black;
    display: flex;
  }
  .header-nav.split {
    justify-content: space-between;
  }
  .nav-item {
    padding: 4px 10px;
    margin-right: 8px;
    cursor: pointer;
    transition: color 0.15s linear;
    letter-spacing: 0.3px;
  }
  .nav-item a {
    text-decoration: none;
    color: white;
  }
  .header-name a {
    text-decoration: none;
    color: black;
  }
  .nav-item.selected a {
    text-decoration: underline;
    color: #ffffad;
  }
  .selected {
    color: #ffffad;
  }
  .project-title {
    text-transform: lowercase;
  }
  .nav-item:hover a {
    color: #ffffad;
  }
  .nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: lightgray;
  }
  .nav-left div {
    margin: 0 5px;
  }

  .btn-back {
    color: lightgray;
    text-decoration: none;
    cursor: pointer;
  }
  .btn-back:hover {
    color: #ffffad;
  }

  @media only screen and (max-width: 700px) {
    .header-nav.split {
      padding: 0;
      justify-content: center;
    }
    .nav-left {
      display: none;
    }
    .name-holder,
    .header-nav {
      flex-basis: 50%;
    }
  }
</style>
