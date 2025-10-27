import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2018 \u2022 Mobile App \u2022 Independent";
const Blackbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "Blackbox", $selectedProject);
  let imgs = [
    "/assets/blackbox/blackbox1.jpg",
    "/assets/blackbox/blackbox2.jpg",
    "/assets/blackbox/blackbox3.jpg",
    "/assets/blackbox/blackbox4.jpg"
  ];
  let desc = [
    "A stranger comes up to you, and shares an honest, personal moment from their day. They walk away. Their exchange is an isolated fragment that you are left to process.",
    "Or: you have a lingering thought. You are not sure of the full context, or exactly how to articulate it. Alone, you start to delve into it, and explain it loud. A stranger is listening, silently, and nodding. After you stop speaking, the stranger is gone - carrying a small piece of your consciousness.",
    "Blackbox is a mobile app that was conceived with these imagined interactions in mind. The project facilitates a new communication pattern: one that deviates from the curated, narrative-based conversation that we typically engage with. In Blackbox, a user records themselves speaking. Their recording is shared with a single stranger, and can be played just once. Directly afterward, they receive a recording from a different stranger.",
    "Blackbox was built in React Native connected to an AWS RDS database."
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info }, {}, {})}`;
});
export { Blackbox as default };
