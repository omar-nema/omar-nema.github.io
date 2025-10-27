import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2021 \u2022 Web App \u2022 Independent";
let link = "http://omarnema.com/parsons-info-aesthetics/final-housing/";
const Nyc_housing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "NYC Housing Explorer", $selectedProject);
  let imgs = [
    "/assets/housing/housing1.png",
    "/assets/housing/housing2.png",
    "/assets/housing/housing3.png"
  ];
  let desc = [
    "'NYC Housing Explorer' uses American Census Microdata to visualize living arrangements in New York City. The visual is exploratory, offering several views that enable the viewer to explore housing crowdedness, as well as housing structure across various communities in the city. ",
    "The project was built in Javascript, with d3.js for visualization, and SQL for data exploration."
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info, link }, {}, {})}`;
});
export { Nyc_housing as default };
