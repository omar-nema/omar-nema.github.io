<script>
  import ProjectPage from '../../components/ProjectPage.svelte';
  let imgs = [
    '/assets/soundAndSpace/ss0.png',
    '/assets/soundAndSpace/ss1.png',
    '/assets/soundAndSpace/ss2.png',
  ];
  let info = '2020 • Web App • Independent';
  let desc = [
    "'Sound and Space' is a data visualization showing how sound (particularly, the song 'Skin' by Grimes) occupies sonic and visual space. ",
    "In this visual, sound is broken down into waveforms, and visualized as a set of pulsating particles. As the song progresses, these particles continually transform to reflect the track's sonic properties. The viewer can manipulate different aspects of the track and visualize changes in particle shape and movement. ",
    'The project was built in Javascript, and uses WebGL and p5.js to for 3D visualization.',
  ];
  let link =
    'http://omarnema.com/parsons-info-aesthetics/assignment-3-sound/index.html';
</script>

<ProjectPage {imgs} {desc} {info} {link} />
