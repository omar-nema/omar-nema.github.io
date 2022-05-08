<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'Floating Thoughts';
  let imgs = [
    '/assets/floatingThoughts/ft1.png',
    '/assets/floatingThoughts/ft2.png',
    '/assets/floatingThoughts/ft3.png',
    '/assets/floatingThoughts/ft4.png',
  ];
  let info = '2021 • Web App • Independent';
  let desc = [
    'Floating Thoughts is an exploration in non-linear communication. ',
    "The visual invites the viewer to construct and deconstruct a narrative of the self. From thought pattern to thought fragment. 'Floating Thoughts' visualizes a set of journal snippets. The fragments can be viewed in isolation or in the context of self-categorized thought patterns. The viewer is thus able to contrast the narratives they draw from individual fragments with the patterns that I, the storyteller, have outlined.",
    "Floating Thoughts was built in d3.js. At the moment, I've opted to take down the project link as I'm making some improvements.",
  ];
</script>

<ProjectPage {imgs} {desc} {info} />
