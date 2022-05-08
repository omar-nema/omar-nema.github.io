<script>
  import ProjectPage from '../../components/ProjectPage.svelte';

  import { selectedProject } from '../../stores/state';
  $selectedProject = 'Blackbox';
  let imgs = [
    '/assets/blackbox/blackbox1.jpg',
    '/assets/blackbox/blackbox2.jpg',
    '/assets/blackbox/blackbox3.jpg',
    '/assets/blackbox/blackbox4.jpg',
  ];
  let info = '2018 • Mobile App • Independent';
  let desc = [
    'A stranger comes up to you, and shares an honest, personal moment from their day. They walk away. Their exchange is an isolated fragment that you are left to process.',
    'Or: you have a lingering thought. You are not sure of the full context, or exactly how to articulate it. Alone, you start to delve into it, and explain it loud. A stranger is listening, silently, and nodding. After you stop speaking, the stranger is gone - carrying a small piece of your consciousness.',
    'Blackbox is a mobile app that was conceived with these imagined interactions in mind. The project facilitates a new communication pattern: one that deviates from the curated, narrative-based conversation that we typically engage with. In Blackbox, a user records themselves speaking. Their recording is shared with a single stranger, and can be played just once. Directly afterward, they receive a recording from a different stranger.',
    'Blackbox was built in React Native connected to an AWS RDS database.',
  ];
</script>

<ProjectPage {imgs} {desc} {info} />
