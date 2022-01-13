import { readable, writable } from 'svelte/store';

let projects = [
  {
    title: 'Neuroengineering Thesis',
    description:
      'Undergrad thesis, simulating spinal cord simulation in primates',
    tags: ['product'],
    years: [2015],
    url: '/projects/thesis',
    protected: 0,
  },
  {
    title: 'Floating Thoughts',
    description: 'Nonlinear writing collage',
    tags: ['art'],
    years: [2018],
    url: '/projects/floating-thoughts',
    protected: 0,
  },
  {
    title: 'Thought Parser',
    description: 'My journal, consumed and visualized by an algorithm',
    tags: ['datavis', 'art'],
    years: [2019],
    url: '/projects/thought-parser',
    protected: 0,
  },
  {
    title: 'Blackbox',
    description: 'Anonymous recording exchange app',
    tags: ['product'],
    years: [2019],
    url: '/projects/blackbox',
    protected: 0,
  },
  {
    title: 'Computational Sketches',
    description: 'A series of two-hour sketches made with code',
    tags: ['art'],
    years: [2020],
    url: '/projects/comp-sketches',
    protected: 0,
  },
  {
    title: 'NYC Housing Explorer',
    description:
      'Visualizing New York City housing through generative floor plans',
    tags: ['datavis'],
    years: [2020],
    url: '/projects/nyc-housing',
    protected: 0,
  },
  {
    title: 'Sound and Space',
    description: 'Visualization of sound properties in 3D space',
    tags: ['datavis'],
    years: [2019],
    url: '/projects/sound-space',
    protected: 0,
  },
  {
    title: 'Tell Me',
    description:
      'A meditation on routine and structure, conveyed through the interface',
    tags: ['datavis', 'art'],
    years: [2021],
    url: '/projects/tell-me',
    protected: 0,
  },
  {
    title: 'How We Gaze',
    description:
      'Crowd-sourced meta-gallery showing how individuals look at artwork',
    tags: ['art'],
    years: [2021],
    url: '/projects/gaze',
    protected: 0,
  },
];

let projectsSorted = projects.sort((a, b) => {
  return Math.max(...b.years) - Math.max(...a.years);
});

export let projectData = writable(projectsSorted);

export let projectsFiltered = writable(projectsSorted);
