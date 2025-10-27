import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2020 \u2022 Generative Art \u2022 Independent";
const Comp_sketches = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "Computational Sketches", $selectedProject);
  let imgs = [
    "/assets/compSketches/ff-1.png",
    "/assets/compSketches/ff-2.png",
    "/assets/compSketches/pixels-2-2.png",
    "/assets/compSketches/pixels-2-3.png",
    "/assets/compSketches/shape-1.png",
    "/assets/compSketches/shape-3.png",
    "/assets/compSketches/3d-prev-1.png",
    "/assets/compSketches/3d-prev-3.png"
  ];
  let desc = [
    "Two-hour sketches that I made with code. These sketches were made (with p5.js) as part of the Computational Form course I took at Parsons School of Design in Fall 2020. "
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info }, {}, {})}`;
});
export { Comp_sketches as default };
