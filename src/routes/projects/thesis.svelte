<script>
  import '../../app.css';
  import Header from '../../components/Header.svelte';
  import Carousel from '../../components/Carousel.svelte';
  import InfoSection from '../../components/InfoSection.svelte';
  import { selectedProject } from '../../stores/state';
  $selectedProject = 'Neuroengineering Thesis';
  let imgs = [
    '../assets/thesis/thesis-finiteelement.png',
    '../assets/thesis/thesis-process.png',
    '../assets/thesis/thesis-voltage-distribution.png',
    '../assets/thesis/img-integrated.png',
  ];
  let info = '2015 • Computational Model • David Borton Lab, Brown University';
  let desc = [
    'For my undergraduate thesis in biomedical engineering, I worked under the supervision of Dr. David Borton, and guidance of Radu Darier (phD) to create a computational model for Epidural Electric Stimulation (EES) in primates. This thesis paved the groundwork for my development as a technologist. Stepping out of my engineering education, I was able to work across disciplines, and merge software tools to create a computational model. ',
    "In EES experiments, electrical currents are propagated through a test subject's (usually a primate) spinal cord with the aim of understanding which stimulation parameters are therapeutic. Research to date has largely been driven by a trial-and-error process, which can be inefficient, and inhumane to test animals.",
    'With the aim of reducing reliance on live experimentation, I worked on a computational model for Epidural Electric Simulation. I integrated a physical model of the spinal cord that I created with an electrical model to stimulate an experiment.',
  ];
</script>

<Header />
<div class="container">
  <Carousel {imgs} imgCap={'800px'} />
  <InfoSection description={desc} {info} />
</div>
