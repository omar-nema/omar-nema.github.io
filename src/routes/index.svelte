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

</script>

<svelte:head>
  <title>omar nema</title>
</svelte:head>

<header></header>
<div class="content-outer" in:fade={{ delay: 300, duration: 500 }} out:fade={{ duration: 200 }}>
  <div class="intro">
    <h2>Hi, I'm Omar!</h2>
    <p>
      I build Search & Graphing products at <strong>Datadog</strong>. I also teach at <strong>CUNY Graduate Center</strong>. Before that: I studied design at <strong>Parsons</strong>, and built healthcare products at <strong>Arcadia</strong>. I live in Queens,
      New York.
    </p>
  </div>

  <div class="text-container">
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
      <div >
        <Carousel imgs={['/assets/dog/expdemo2.gif', '/assets/dog/expconceptres.png']} imgCap="825px" />
      </div>
    </div>
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
        <div >
          <Carousel imgs={['/assets/dog/dashannotate.png', '/assets/dog/wilddouble.png', '/assets/dog/omnimap.png']} imgCap="825px" />
        </div>
      
    </div>
    <div class="text-block">
      <h1>Teaching students to use code as a creative medium</h1>
      <p>
        I teach Software Design Lab at CUNY Graduate Center, where grad students learn to code by building interactive projects from scratch. I'm fascinated by code for creative expression, and love seeing what students create. See my <a href="https://cuny-software-design.notion.site/Creative-Computing-Spring-2025-1642f3b3e67d8021baead71fb6f6ed60?source=copy_link" target="_blank">course website</a> if you’re curious.
      </p>
    </div>

    <div class="text-block">
      <h1>At Parsons, I got to explore interactive art</h1>
      <p>
        After years of designing and building interactive apps on the side, I went to grad school for Data Visualization to scratch my creative itch. 
      </p>
      <p>
        My thesis at Parsons, How We Gaze, was a gallery of gazes: it distorts art to reflect how the viewer looks at it. How We Gaze was selected as a winner for the <a href="https://pudding.cool/process/pudding-cup-2021/" target="_blank">Pudding Cup</a>, an independent data visualization award.
      </p>
      <img src="/assets/gaze/gaze2.png" alt="Gaze 2" />
    </div>
    <div class="text-block">
      <h1>I launched two healthcare products at Arcadia from the ground up</h1>
      <p>
        I launched two healthcare products at Arcadia, a healthcare tech startup,  from 0 to $XM: a <a href="https://arcadia.io/care-manager"  target="_blank">Care Management product</a> to guide nurses in coaching patients through health progress, and a <a href="https://arcadia.io/referrals" target="_blank">Referral Management</a> tool to help physicians to find the best, low-cost providers to meet their patients' needs (see <a href="https://www.healthcarefinancenews.com/news/steward-health-care-network-workflow-automation-yields-161-increase-care-coordination">press</a>).
      </p>
      <p>
        At Arcadia, I learned a lot, made mistakes, and developed my product practice. I also had the chance to be a nerd and build some fun visuals with healthcare data, below.
      </p>
      <div
        class="content"
        in:fade={{ delay: 300, duration: 500 }}
        out:fade={{ duration: 300 }}
      >
        <div >
          <Carousel imgs={['/assets/arcadia/cm.png', '/assets/arcadia/hospitalvar.png', '/assets/arcadia/referral.png']} imgCap="600px" />
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  header{
    height: 20px;
    background-color: black;
    width: 100%;
    position:fixed;
    z-index: 0;
    border-bottom:5px solid #aed2ff;
  }

  .content-outer {
    font-size: 19px;
    line-height: 1.5;
    margin-top:0;
    z-index: 100;
  }
  .text-container {
    max-width: 825px;
    width: 100%;
    margin-top: 50px;
  }
  .text-block {
    margin-bottom: 150px;
  }

  h1 {
    font-size: 28px;
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
    margin-top: 120px;
    margin-bottom: 120px;
    background: linear-gradient(90deg, #ffffff 0%, #f4f4f4 100%);
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
  .slider {
    margin-top: 30px;
  }
</style>
