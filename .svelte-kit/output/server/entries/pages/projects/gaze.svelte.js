import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2021 \u2022 Web App \u2022 Independent";
let link = "https://omarnema.com/parsons-studio-1/qual/gaze-study-svelte/public/";
const Gaze = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "How We Gaze", $selectedProject);
  let imgs = [
    "/assets/gaze/gaze2.png",
    "/assets/gaze/gaze1reaction.png",
    "/assets/gaze/mainDemo.mp4"
  ];
  let desc = [
    "How We Gaze is a meta-gallery that shows how individuals gaze at pieces of artwork. The gazes hosted in the gallery are crowd-sourced - individuals are invited to view pieces of artwork, and see their gaze visualized in realtime.",
    "How We Gaze was selected as a winner for the Pudding Cup 2021, an independent data visualization award.",
    "This project was built using the Svelte.js as a framework, d3.js for visualization, webgazer.js for eye-tracking, and Firebase for data storage. Observable was used for data exploration."
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info, link }, {}, {})}`;
});
export { Gaze as default };
