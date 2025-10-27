import { c as create_ssr_component, v as validate_component } from "../../chunks/index-0fc46fdf.js";
import "../../chunks/state-7fb579f2.js";
import { C as Carousel } from "../../chunks/Carousel-15090b9c.js";
import "../../chunks/Filters.svelte_svelte_type_style_lang-9a2693b8.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-11j68f4{height:30px;background-color:black;width:100%;position:fixed;z-index:0}.content-outer.svelte-11j68f4{font-size:19px;line-height:1.5;margin-top:0;z-index:100}.text-container.svelte-11j68f4{max-width:825px;width:100%;margin-top:50px}.text-block.svelte-11j68f4{margin-bottom:150px}h1.svelte-11j68f4{font-size:28px;margin-bottom:30px}h2.svelte-11j68f4{font-size:24px}strong.svelte-11j68f4{font-weight:600}.intro.svelte-11j68f4{border:2px solid black;max-width:1000px;padding:30px 50px;margin-top:150px;margin-bottom:120px;background:linear-gradient(90deg, #ffffff 0%, #f4f4f4 100%);box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px}img.svelte-11j68f4{max-width:100%;border:2px solid black;padding:3px}a.svelte-11j68f4{color:#3b3636;text-decoration:dotted underline;transition:color 0.3s ease}a.svelte-11j68f4:hover{color:#a60d0d}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>omar nema</title>`, ""}`, ""}

<header class="${"svelte-11j68f4"}"></header>
<div class="${"content-outer svelte-11j68f4"}"><div class="${"intro svelte-11j68f4"}"><h2 class="${"svelte-11j68f4"}">Hi, I&#39;m Omar!</h2>
    <p>I build Search &amp; Graphing products at <strong class="${"svelte-11j68f4"}">Datadog</strong>. I also teach at <strong class="${"svelte-11j68f4"}">CUNY Graduate Center</strong>. Before that: I studied design at <strong class="${"svelte-11j68f4"}">Parsons</strong>, and built healthcare products at <strong class="${"svelte-11j68f4"}">Arcadia</strong>. I live in Queens,
      New York.
    </p></div>

  <div class="${"text-container svelte-11j68f4"}"><div class="${"text-block svelte-11j68f4"}"><h1 class="${"svelte-11j68f4"}">Automating Investigation at Datadog</h1>
      <p>At Datadog, I conceived Watchdog Explains, an AI feature used by all 30k+ Datadog customers. Explains automatically identifies which specific dimension is causing any metric anomaly. It&#39;s now
        core infrastructure powering our broader AI strategy, including Bits AI.
      </p>
      <p>Watchdog Explains detects anomalies in metrics, then uses our proprietary high-performance
        covariance algorithm to test every tag combination in real-time, isolating the exact root
        cause in seconds rather than requiring manual investigation across dozens of dimensions.
      </p>
      <p></p>
      <p>I established Datadog&#39;s first Applied AI team within Graphing to build this. I owned it
        end-to-end: early sketches, algorithm iteration, and incremental improvements through dozens
        of evals and A/B tests. Beyond direct customer impact, it now serves as the anomaly
        detection engine for Bits AI, our ML/LLM-powered SRE agent.
      </p>
      <p>I&#39;m now expanding this foundation by developing ML-based correlation algorithms that detect
        system-wide patterns across multiple metrics. As a recognized leader in automated
        investigation at Datadog, I&#39;m shaping the vision for how AI fundamentally
        transforms software monitoring.
      </p>
      <div>${validate_component(Carousel, "Carousel").$$render($$result, {
    imgs: ["/assets/dog/expdemo2.gif", "/assets/dog/expconceptres.png"],
    imgCap: "825px"
  }, {}, {})}</div></div>
    <div class="${"text-block svelte-11j68f4"}"><h1 class="${"svelte-11j68f4"}">Product Leadership at Datadog</h1>
 
        <p>As a Staff Product Manager of Investigation and Search at Datadog, I focus on helping customers answer questions faster.
        </p>
        <p>My initial scope was Data Visualization and Querying, where I created more powerful and expressive data analysis tools. I rebuilt the Datadog graph editor to center investigation workflows, shipped a low-code visualization interface that lets customers build any chart on their own, and introduced advanced querying with joins and transformations so customers can contextualize their data. The result: customers are able to answer questions not just about their software systems, but about their business. This keeps them in Datadog instead of subscribing to other tools.
        </p>
        <p>After scaling the Data Visualization team, I saw an opportunity to tackle the next bottleneck: customers still spend too much time hunting for answers. I created a new scope and teams around Automated Investigation and Search, where I&#39;m now building features that surface insights even faster.
        </p>
        <div>${validate_component(Carousel, "Carousel").$$render($$result, {
    imgs: [
      "/assets/dog/dashannotate.png",
      "/assets/dog/wilddouble.png",
      "/assets/dog/omnimap.png"
    ],
    imgCap: "825px"
  }, {}, {})}</div></div>
    <div class="${"text-block svelte-11j68f4"}"><h1 class="${"svelte-11j68f4"}">Teaching students to use code as a creative medium</h1>
      <p>I teach Software Design Lab at CUNY Graduate Center, where grad students learn to code by building interactive projects from scratch. I&#39;m fascinated by code for creative expression, and love seeing what students create. See my <a href="${"https://cuny-software-design.notion.site/Creative-Computing-Spring-2025-1642f3b3e67d8021baead71fb6f6ed60?source=copy_link"}" target="${"_blank"}" class="${"svelte-11j68f4"}">course website</a> if you\u2019re curious.
      </p></div>

    <div class="${"text-block svelte-11j68f4"}"><h1 class="${"svelte-11j68f4"}">At Parsons, I got to explore interactive art</h1>
      <p>After years of designing and building interactive apps on the side, I went to grad school for Data Visualization to scratch my creative itch. 
      </p>
      <p>My thesis at Parsons, How We Gaze, was a gallery of gazes: it distorts art to reflect how the viewer looks at it. How We Gaze was selected as a winner for the <a href="${"https://pudding.cool/process/pudding-cup-2021/"}" target="${"_blank"}" class="${"svelte-11j68f4"}">Pudding Cup</a>, an independent data visualization award.
      </p>
      <img src="${"/assets/gaze/gaze2.png"}" alt="${"Gaze 2"}" class="${"svelte-11j68f4"}"></div>
    <div class="${"text-block svelte-11j68f4"}"><h1 class="${"svelte-11j68f4"}">I launched two healthcare products at Arcadia from the ground up</h1>
      <p>I launched two healthcare products at Arcadia, a healthcare tech startup,  from 0 to $XM: a <a href="${"https://arcadia.io/care-manager"}" target="${"_blank"}" class="${"svelte-11j68f4"}">Care Management product</a> to guide nurses in coaching patients through health progress, and a <a href="${"https://arcadia.io/referrals"}" target="${"_blank"}" class="${"svelte-11j68f4"}">Referral Management</a> tool to help physicians to find the best, low-cost providers to meet their patients&#39; needs (see <a href="${"https://www.healthcarefinancenews.com/news/steward-health-care-network-workflow-automation-yields-161-increase-care-coordination"}" class="${"svelte-11j68f4"}">press</a>).
      </p>
      <p>At Arcadia, I learned a lot, made mistakes, and developed my product practice. I also had the chance to be a nerd and build some fun visuals with healthcare data, below.
      </p>
      <div class="${"content"}"><div>${validate_component(Carousel, "Carousel").$$render($$result, {
    imgs: [
      "/assets/arcadia/cm.png",
      "/assets/arcadia/hospitalvar.png",
      "/assets/arcadia/referral.png"
    ],
    imgCap: "600px"
  }, {}, {})}</div></div></div></div>
</div>`;
});
export { Routes as default };
