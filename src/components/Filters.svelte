<script>
  import { attr } from 'svelte/internal';

  import { projectData, projectsFiltered } from '../stores/projectData';

  let tagsFlat = $projectData.map((d) => d.tags).flat(1);
  let tagsUnique = [...new Set(tagsFlat)];
  tagsUnique.unshift('all');

  let currentFilter = 'all';

  function changeFilter() {
    currentFilter = this.getAttribute('data-type');
    if (currentFilter == 'all') {
      $projectsFiltered = $projectData;
    } else {
      $projectsFiltered = $projectData.filter((d) =>
        d.tags.includes(currentFilter)
      );
    }
  }
</script>

<div class="filter-holder">
  <div class="project-filter type">
    {#each tagsUnique as tag}
      <div
        class="filter-option {tag}"
        data-type={tag}
        class:selected={tag == currentFilter}
        on:click={changeFilter}
      >
        <span class="circle" />
        {tag}
      </div>
    {/each}
  </div>
</div>

<style>
  .filter-holder {
    width: 100%;
    height: 70px;
    padding-top: 10px;
  }

  .project-filter {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
  }

  .filter-option {
    margin-right: 20px;
    padding: 5px 0px;
    color: gray;
    height: 30px;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .circle {
    width: 10px;
    height: 10px;
    border: 2px solid black;
    display: inline-block;
    border-radius: 100%;
    margin-right: 5px;
    background: white;
    transition: background 0.3s linear;
  }

  .filter-option.all {
    color: var(--color-tag-all);
  }
  .filter-option.all .circle {
    border-color: var(--color-tag-all);
  }
  .filter-option.selected.all .circle,
  .filter-option.all:hover .circle {
    background: var(--color-tag-all);
  }
  .filter-option.all.selected {
    border-bottom-color: var(--color-tag-all);
  }

  .filter-option.datavis {
    color: var(--color-tag-datavis);
  }
  .filter-option.datavis .circle {
    border-color: var(--color-tag-datavis);
  }
  .filter-option.selected.datavis .circle,
  .filter-option.datavis:hover .circle {
    background: var(--color-tag-datavis);
  }
  .filter-option.selected.datavis {
    border-bottom-color: var(--color-tag-datavis);
  }

  .filter-option.art {
    color: var(--color-tag-art);
  }
  .filter-option.art .circle {
    border-color: var(--color-tag-art);
  }
  .filter-option.selected.art .circle,
  .filter-option.art:hover .circle {
    background: var(--color-tag-art);
  }
  .filter-option.selected.art {
    border-bottom-color: var(--color-tag-art);
  }

  .filter-option.product {
    color: var(--color-tag-product);
  }
  .filter-option.product .circle {
    border-color: var(--color-tag-product);
  }
  .filter-option.selected.product .circle,
  .filter-option.product:hover .circle {
    background: var(--color-tag-product);
  }
  .filter-option.selected.product {
    border-bottom-color: var(--color-tag-product);
  }

  @media only screen and (max-width: 600px) {
    .filter-holder {
      display: flex;
      justify-content: center;
    }
    .project-filter {
      justify-content: space-between;
      width: 90%;
    }
    .filter-option {
      height: auto;
      margin-right: 0;
      border-bottom: none;
    }
    .filter-holder {
      height: 55px;
      padding: 0;
    }
  }
</style>
