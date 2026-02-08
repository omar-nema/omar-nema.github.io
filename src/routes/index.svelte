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
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GVRRR6SLNG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', 'G-GVRRR6SLNG');
  </script>
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
      I build Search & Graphing products at <strong>Datadog</strong>. I also teach at <strong>CUNY Graduate Center</strong>. Before: I studied design at <strong>Parsons</strong>, built healthcare products at <strong>Arcadia</strong>, and studied engineering at <strong>Brown</strong>. I live in Queens, New York.
    </p>
  </div>

  <div class="text-container" bind:this={textContainer}>
    <div class="content-block">
      <div class="text-block">
        <h1>Automating Investigation at Datadog</h1>
        <p>
          As a Staff Product Manager of Investigation and Search at Datadog, I work on enabling users to find answers in complex systems.
        </p>
        <p>
          My initial focus was Data Visualization and Querying, where I first focused on creating more powerful and expressive data analysis tools. In parallel, I studied how customers move through an investigation. As my understanding in this space matured in my first year at Datadog, I developed a vision for how to automate investigation.
        </p>  
        <p>
          In year two, I conceived and shipped Datadog’s first widely used AI feature, Watchdog Explains. In near-realtime, this feature automatically detects anomalies on dashboards, and picks apart the exact dimension contributing to the anomaly. The feature was a good start for automating investigation: it's efficient enough to run for free, and shows few false positives.
        </p>
        <p> 
          My focus now is moving beyond triage to automating root cause analysis. I’m working through challenges like: how do we proactively scan for issues without incurring too much cost at Datadog’s scale? How do we take advantage of an LLM’s creativity while ensuring it returns quick and accurate results? And how do we bring in the user's expertise without making them do too much work?
        </p>
        <p>
          My team has expanded to include Search, in order to build context layers and semantic search models to ground an LLM in its investigation. We are working on building a multi-layered investigation system that takes multiple, gradually more comprehensive passes at detecting an issue. The user is still central to the investigation, akin to a text-based adventure game.
        </p>

      </div>
      <div >
        <Carousel imgs={['/assets/dog/autosketch.png','/assets/dog/explains.png', '/assets/dog/dashannotate.png', '/assets/dog/locode2.png']} imgCap={imgCap} addTopMargin={true} />
      </div>
    </div>
    <!-- <div class="content-block">
      <div class="text-block">
        <h1>Product Leadership at Datadog</h1>
        <p>
          As a Staff Product Manager of Investigation and Search at Datadog, I focus on helping customers answer questions faster.
        </p>
        <p>
          My initial scope was Data Visualization and Querying, where I created more powerful and expressive data analysis tools. I rebuilt the Datadog graph editor to center investigation workflows, shipped a low-code visualization interface that lets customers build any chart on their own, and introduced advanced querying with joins and transformations so customers can contextualize their data. The result: customers are able to answer questions not just about their software systems, but about their business. This keeps customers in Datadog instead of subscribing to other tools.
        </p>
        <p>
          After scaling the Data Visualization team, I saw the next opportunity: customers had the tools to analyze their data, but finding the answer still required too much manual work. To address this, I created the Automated Investigation team and joined Search as its first PM. I'm now focused on building tools to proactively investigate issues for customers.
        </p>
      </div>
    
        <div >
          <Carousel imgs={['/assets/dog/dashannotate.png', '/assets/dog/wilddouble.png', '/assets/dog/omnimap.png']} imgCap={imgCap} addTopMargin={true} />
        </div>
      
    </div> -->
    <div class="content-block">
      <div class="text-block">
        <h1>Teaching students to use code as a creative medium</h1>
        <p>
          I teach <a href="https://cuny-software-design.notion.site/Creative-Computing-Spring-2025-1642f3b3e67d8021baead71fb6f6ed60?source=copy_link" target="_blank">Creative Computing</a> at CUNY Graduate Center, where grad students learn code as a creative medium. Students build generative art and expressive websites. interfaces designed to linger and explore.
        </p>
      </div>
    </div>

    <div class="content-block">
      <div class="text-block">
        <h1>At Parsons, I got to explore interactive art</h1>
        <p>
          After years of straddling design, data, and product at Arcadia, I wanted to push this practice further than I could on my own. I went to Parsons Design School to study computational design and data visualization.
        </p>
        <p>
          My thesis at Parsons, How We Gaze, was a gallery of gazes: it distorts art to reflect how the viewer looks at it in realtime. How We Gaze was selected as a winner for the <a href="https://pudding.cool/process/pudding-cup-2021/" target="_blank">Pudding Cup</a>, an independent data visualization award. Snippets of this project and others below.
        </p>
      </div>
      <Carousel imgs={['/assets/gaze/gaze2.png', '/assets/housing/housing3.png', '/assets/soundAndSpace/ss2.png' ,'/assets/compSketches/ff-2.png']} imgCap={imgCap} addTopMargin={true} />
    
      
    </div>
    <div class="content-block">
      <div class="text-block">
        <h1>I launched two healthcare products at Arcadia from the ground up</h1>
        <p>
          I started my career at Arcadia, a healthcare tech startup. I got my hands dirty, teaching myself to design, code, model data, and pitch new product ideas.
        </p>

        <p>
          At Arcadia, I launched two enterprise workflow products from 0 to $XM: <a href="https://arcadia.io/care-manager"  target="_blank">Care Manager</a> and <a href="https://arcadia.io/referrals" target="_blank">Referrals</a> (<a href="https://www.healthcarefinancenews.com/news/steward-health-care-network-workflow-automation-yields-161-increase-care-coordination">press</a>). I found both products by getting curious about how practitioners actually work. I sat with nurse care managers and saw how they struggled to reach out to patients, so I built a product centered first around automating early outreach. For Referrals, I watched admins carry entire decision trees from their own knowledge into order to make referral choices. I turned that tacit knowledge into a tool.
        </p>
        
        <p>Both tools went on to become core to Arcadia’s product suite.</p>
       
       
        

        
    
      </div>
      <div
        class="content"
        in:fade={{ delay: 300, duration: 500 }}
        out:fade={{ duration: 300 }}
      >
        <div >
          <Carousel imgs={['/assets/arcadia/cm-caption.png', '/assets/arcadia/referral-net-caption.png']} imgCap="500px" addTopMargin={true} />
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
    max-width: 800px;
    margin-bottom: 25px;
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
    max-width: min(950px, 90vw);
    padding: 30px 50px;
    margin-top: 250px;
    margin-bottom: 150px;
    background: linear-gradient(90deg, #ffffff 0%, #f4f4f4 100%);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 22px;
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
    .content-block {
      margin-bottom: 100px;
    }
 
    .intro {
      padding:10px 22px;
      margin-bottom: 50px;
      border: 1px solid #ab7c7c;
      margin: 0 20px;
      margin-top: 170px;
      margin-bottom: 90px;
      font-size: 18px;
   
    }
    .text-block {
      margin-bottom: 0px;
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
