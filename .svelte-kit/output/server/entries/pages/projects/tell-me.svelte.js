import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2021 \u2022 Web App \u2022 Independent";
let link = "http://omarnema.com/parsons-coding-self/final/index.html";
const Tell_me = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "Tell Me", $selectedProject);
  let imgs = [
    "/assets/tellMe/tell.png",
    "/assets/tellMe/tell2.png",
    "/assets/tellMe/tell3.png",
    "/assets/tellMe/tell4.png"
  ];
  let desc = [
    "Tell Me uses personal data and interactive web graphics to convey how I felt during a period of extended isolation. The project draws on audio recordings I have from over the years, personal writing, and digital drawings. "
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info, link }, {}, {})}`;
});
export { Tell_me as default };
