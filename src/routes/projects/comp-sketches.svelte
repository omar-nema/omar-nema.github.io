<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'Computational Sketches';
  let imgs = [
    '/assets/compSketches/ff-1.png',
    '/assets/compSketches/ff-2.png',
    '/assets/compSketches/pixels-2-2.png',
    '/assets/compSketches/pixels-2-3.png',
    '/assets/compSketches/shape-1.png',
    '/assets/compSketches/shape-3.png',
    '/assets/compSketches/3d-prev-1.png',
    '/assets/compSketches/3d-prev-3.png',
  ];

  let info = '2020 • Generative Art • Independent';
  let desc = [
    'Two-hour sketches that I made with code. These sketches were made (with p5.js) as part of the Computational Form course I took at Parsons School of Design in Fall 2020. ',
  ];
  let link = null;
</script>

<ProjectPage {imgs} {desc} {info} />
