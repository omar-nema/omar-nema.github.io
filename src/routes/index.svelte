<script>
  import "../app.css";
  // import Header from "../components/Header.svelte";
  import Carousel from '../components/Carousel.svelte';
  import Card from "../components/Card.svelte";
  import Filters from "../components/Filters.svelte";
  import { projectData, projectsFiltered } from "../stores/projectData";
  import { fade, slide } from "svelte/transition";
  import { transitionTime } from "../stores/state";
  import { onMount } from "svelte";

  let imgCap = "1050px";
  let textContainer;

  function updateImgCap() {
    if (textContainer) {
      const style = window.getComputedStyle(textContainer);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);
      const contentWidth = textContainer.offsetWidth - paddingLeft - paddingRight;
      imgCap = contentWidth + "px";
    }
  }

  onMount(() => {
    updateImgCap();

    // Update on window resize
    window.addEventListener('resize', updateImgCap);

    return () => {
      window.removeEventListener('resize', updateImgCap);
    };
  });

</script>

<svelte:head>
  <title>omar nema</title>
</svelte:head>

<header>
  <div class="header-container">

  
    <div class="update-container">
      <span class="name">omar nema</span> 
      <!-- <span class="update">• Updated Oct 2025</span> -->
    </div>

  </div>

</header>
<div class="content-outer" in:fade={{ delay: 300, duration: 500 }} out:fade={{ duration: 200 }}>
  <div class="intro">
    <h2>Hi, I'm Omar!</h2>
    <p>
      I build Search & Graphing products at <strong>Datadog</strong>. I also teach at <strong>CUNY Graduate Center</strong>. Before: I studied design at <strong>Parsons</strong>, and built healthcare products at <strong>Arcadia</strong>. I live in Queens,
      New York.
    </p>
  </div>

  <div class="text-container" bind:this={textContainer}>
    <div class="content-block">
      <div class="text-block">
        <h1>Automating Investigation at Datadog</h1>
        <p>
          At Datadog, I conceived Watchdog Explains, an AI feature used by all 30k+ Datadog customers. Explains automatically identifies which specific dimension is causing any metric anomaly. It's now
          core infrastructure powering our broader AI strategy, including Bits AI.
        </p>
        <p>
          Watchdog Explains detects anomalies in metrics, then uses our proprietary high-performance
          covariance algorithm to test every tag combination in real-time, isolating the exact root
          cause in seconds rather than requiring manual investigation across dozens of dimensions.
        </p>
        <p></p>
        <p>
          I established Datadog's first Applied AI team within Graphing to build this. I owned it
          end-to-end: early sketches, algorithm iteration, and incremental improvements through dozens
          of evals and A/B tests. Beyond direct customer impact, it now serves as the anomaly
          detection engine for Bits AI, our ML/LLM-powered SRE agent.
        </p>
        <p>
          I'm now expanding this foundation by developing ML-based correlation algorithms that detect
          system-wide patterns across multiple metrics. As a recognized leader in automated
          investigation at Datadog, I'm shaping the vision for how AI fundamentally
          transforms software monitoring.
        </p>
      </div>
      <div >
        <Carousel imgs={['/assets/dog/mp4demo.mp4',  '/assets/dog/expconceptres.png']} imgCap={imgCap} addTopMargin={true} />
      </div>
    </div>
    <div class="content-block">
      <div class="text-block">
        <h1>Product Leadership at Datadog</h1>
        <p>
          As a Staff Product Manager of Investigation and Search at Datadog, I focus on helping customers answer questions faster.
        </p>
        <p>
          My initial scope was Data Visualization and Querying, where I created more powerful and expressive data analysis tools. I rebuilt the Datadog graph editor to center investigation workflows, shipped a low-code visualization interface that lets customers build any chart on their own, and introduced advanced querying with joins and transformations so customers can contextualize their data. The result: customers are able to answer questions not just about their software systems, but about their business. This keeps them in Datadog instead of subscribing to other tools.
        </p>
        <p>
          After scaling the Data Visualization team, I saw an opportunity to tackle the next bottleneck: customers still spend too much time hunting for answers. I created a new scope and teams around Automated Investigation and Search, where I'm now building features that surface insights even faster.
        </p>
      </div>
    
        <div >
          <Carousel imgs={['/assets/dog/dashannotate.png', '/assets/dog/wilddouble.png', '/assets/dog/omnimap.png']} imgCap={imgCap} addTopMargin={true} />
        </div>
      
    </div>
    <div class="content-block">
      <div class="text-block">
        <h1>Teaching students to use code as a creative medium</h1>
        <p>
          I teach Software Design Lab at CUNY Graduate Center, where grad students learn to code by building interactive projects from scratch. I'm fascinated by code for creative expression, and love seeing what students create. See my <a href="https://cuny-software-design.notion.site/Creative-Computing-Spring-2025-1642f3b3e67d8021baead71fb6f6ed60?source=copy_link" target="_blank">course website</a> if you’re curious.
        </p>
      </div>
    </div>

    <div class="content-block">
      <div class="text-block">
        <h1>At Parsons, I got to explore interactive art</h1>
        <p>
          After years of designing and building interactive apps on the side, I went to grad school for Data Visualization to scratch my creative itch. 
        </p>
        <p>
          My thesis at Parsons, How We Gaze, was a gallery of gazes: it distorts art to reflect how the viewer looks at it. How We Gaze was selected as a winner for the <a href="https://pudding.cool/process/pudding-cup-2021/" target="_blank">Pudding Cup</a>, an independent data visualization award. Snippets of this project and others below.
        </p>
      </div>
      <Carousel imgs={['/assets/gaze/gaze2.png', '/assets/housing/housing3.png', '/assets/soundAndSpace/ss2.png', '/assets/tellMe/tell3.png']} imgCap={imgCap} addTopMargin={true} />
    
      
    </div>
    <div class="content-block">
      <div class="text-block">
        <h1>I launched two healthcare products at Arcadia from the ground up</h1>
        <p>
          I launched two health tech products at Arcadia from 0 to $XM: <a href="https://arcadia.io/care-manager"  target="_blank">Care Management</a> to guide nurses in coaching patients through health progress, and a <a href="https://arcadia.io/referrals" target="_blank">Referral Management</a> tool to help physicians to find the best, low-cost providers to meet their patients' needs (see <a href="https://www.healthcarefinancenews.com/news/steward-health-care-network-workflow-automation-yields-161-increase-care-coordination">press</a>).
        </p>
        <p>
          At Arcadia, I learned a lot, made mistakes, and developed my product practice. I also got to be a nerd and build some fun visuals with healthcare data, below.
        </p>
      </div>
      <div
        class="content"
        in:fade={{ delay: 300, duration: 500 }}
        out:fade={{ duration: 300 }}
      >
        <div >
          <Carousel imgs={['/assets/arcadia/cm.png', '/assets/arcadia/hospitalvar.png', '/assets/arcadia/referral.png']} imgCap="550px" addTopMargin={true} />
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  header{
    height: 40px;
    background-color: black;
    width: 100%;
    position:fixed;
    z-index: 10;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    justify-content: start;
    color: black;
  
    font-weight: 400;
    font-size: 16px;
    border-bottom: 1px solid black;
  }
  .header-container {
    display: flex;
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 120px;
    justify-content: end;
    background-color: #aed2ff;
  }
  .name {
    font-weight: 600;
  }

  .content-outer {
    font-size: 20px;
    line-height: 1.5;
    margin-top:0;
    z-index: 100;
  }
  .text-container {
    width: 100%;
    max-width: min(1050px, 90vw);
    margin-top: 50px;
  }
  .content-block {
    margin-bottom: 150px;
  }
  .text-block {
    margin: auto;
    max-width: 825px;
    margin-bottom: 50px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 24px;
  }
  strong {
    font-weight: 600;
  }

  .intro {
    border: 2px solid black;
    max-width: 1000px;
    padding: 30px 50px;
    margin-top: 250px;
    margin-bottom: 150px;
    background: linear-gradient(90deg, #ffffff 0%, #f6f6f6 100%);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  img {
    max-width: 100%;
    border: 2px solid black;
    padding: 3px;
  }
  a {
    color: #3b3636;
    text-decoration: dotted underline;
    transition: color 0.3s ease;
  }
  a:hover{
    color: #a60d0d;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 26px;
    }
    .content-outer {
      font-size: 17px;
      padding: 0;
      
    }
    .text-container {
      max-width: 100%;
    }
 
    .intro {
      padding:12px 22px;
      border-radius: 15px;
      margin-bottom: 50px;
      border: 2px dashed black;
      margin: 0 20px;
      margin-top: 170px;
      margin-bottom: 90px;
   
    }
    .text-block {
      margin-bottom: 40px;
      padding: 0 22px;
    }
    header {
      height: 10px;
    }
 
    .header-container {
      display: none;
    }
    img {
      padding: 0;
      border-radius: 8px;
      border:2px solid black;
      max-width: 98vw;
      margin:auto;
      display: flex;
    }

  }
    
</style>
