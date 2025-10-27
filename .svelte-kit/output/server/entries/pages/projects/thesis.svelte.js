import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2015 \u2022 Computational Model \u2022 David Borton Lab, Brown University";
const Thesis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "Neuroengineering Thesis", $selectedProject);
  let imgs = [
    "/assets/thesis/thesis-finiteelement.png",
    "/assets/thesis/thesis-process.png",
    "/assets/thesis/thesis-voltage-distribution.png",
    "/assets/thesis/img-integrated.png"
  ];
  let desc = [
    "For my undergraduate thesis in biomedical engineering, I worked under the supervision of Dr. David Borton, and guidance of Radu Darier (phD) to create a computational model for Epidural Electric Stimulation (EES) in primates. This thesis paved the groundwork for my development as a technologist. Stepping out of my engineering education, I was able to work across disciplines, and merge software tools to create a computational model. ",
    "In EES experiments, electrical currents are propagated through a test subject's (usually a primate) spinal cord with the aim of understanding which stimulation parameters are therapeutic. Research to date has largely been driven by a trial-and-error process, which can be inefficient, and inhumane to test animals.",
    "With the aim of reducing reliance on live experimentation, I worked on a computational model for Epidural Electric Simulation. I integrated a physical model of the spinal cord that I created with an electrical model to stimulate an experiment."
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info }, {}, {})}`;
});
export { Thesis as default };
