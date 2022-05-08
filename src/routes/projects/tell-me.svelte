<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'Tell Me';
  let imgs = [
    '/assets/tellMe/tell.png',
    '/assets/tellMe/tell2.png',
    '/assets/tellMe/tell3.png',
    '/assets/tellMe/tell4.png',
  ];
  let info = '2021 • Web App • Independent';
  let desc = [
    'Tell Me uses personal data and interactive web graphics to convey how I felt during a period of extended isolation. The project draws on audio recordings I have from over the years, personal writing, and digital drawings. ',
  ];
  let link = 'http://omarnema.com/parsons-coding-self/final/index.html';
</script>

<ProjectPage {imgs} {desc} {info} {link} />
