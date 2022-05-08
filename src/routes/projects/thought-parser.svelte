<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'Thought Parser';
  let imgs = ['/assets/thoughtParser/tp1.png', '/assets/thoughtParser/tp2.png'];
  let info = '2018 • Data Visualization • Independent';
  let desc = [
    'Download your most revealing, personal moments. Share them with a machine. Now: remove yourself from the picture. Outside of your body, your narrative now stands as text. The machine explains your story. ',
    "'Thought Parser' is intended to reveal stories that lie hidden and interwoven between individual journal entries. The project holds two years of journal content, consumed and visualized by an algorithm.",
    "Due to the personal nature of this project, I've opted to include screenshots, rather than a direct weblink. Additionally, I've whited out most of my journal text. The visual was built in d3.js. Text processing was done via Compromise.js, and node.js.  ",
  ];
</script>

<ProjectPage {imgs} {desc} {info} />
