import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2021 \u2022 Web App \u2022 Independent";
const Floating_thoughts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "Floating Thoughts", $selectedProject);
  let imgs = [
    "/assets/floatingThoughts/ft1.png",
    "/assets/floatingThoughts/ft2.png",
    "/assets/floatingThoughts/ft3.png",
    "/assets/floatingThoughts/ft4.png"
  ];
  let desc = [
    "Floating Thoughts is an exploration in non-linear communication. ",
    "The visual invites the viewer to construct and deconstruct a narrative of the self. From thought pattern to thought fragment. 'Floating Thoughts' visualizes a set of journal snippets. The fragments can be viewed in isolation or in the context of self-categorized thought patterns. The viewer is thus able to contrast the narratives they draw from individual fragments with the patterns that I, the storyteller, have outlined.",
    "Floating Thoughts was built in d3.js. At the moment, I've opted to take down the project link as I'm making some improvements."
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info }, {}, {})}`;
});
export { Floating_thoughts as default };
