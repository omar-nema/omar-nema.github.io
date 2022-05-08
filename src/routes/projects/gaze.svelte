<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'How We Gaze';
  let imgs = [
    '/assets/gaze/gaze2.png',
    '/assets/gaze/gaze1reaction.png',
    '/assets/gaze/mainDemo.mp4',
  ];
  let info = '2021 • Web App • Independent';
  let desc = [
    'How We Gaze is a meta-gallery that shows how individuals gaze at pieces of artwork. The gazes hosted in the gallery are crowd-sourced - individuals are invited to view pieces of artwork, and see their gaze visualized in realtime.',
    'How We Gaze was selected as a winner for the Pudding Cup 2021, an independent data visualization award.',
    'This project was built using the Svelte.js as a framework, d3.js for visualization, webgazer.js for eye-tracking, and Firebase for data storage. Observable was used for data exploration.',
  ];
  let link =
    'https://omarnema.com/parsons-studio-1/qual/gaze-study-svelte/public/';
</script>

<ProjectPage {imgs} {desc} {info} {link} />
