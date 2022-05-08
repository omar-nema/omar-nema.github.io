<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'NYC Housing Explorer';
  let imgs = [
    '/assets/housing/housing1.png',
    '/assets/housing/housing2.png',
    '/assets/housing/housing3.png',
  ];
  let info = '2021 • Web App • Independent';
  let desc = [
    "'NYC Housing Explorer' uses American Census Microdata to visualize living arrangements in New York City. The visual is exploratory, offering several views that enable the viewer to explore housing crowdedness, as well as housing structure across various communities in the city. ",
    'The project was built in Javascript, with d3.js for visualization, and SQL for data exploration.',
  ];
  let link = 'http://omarnema.com/parsons-info-aesthetics/final-housing/';
</script>

<ProjectPage {imgs} {desc} {info} {link} />
