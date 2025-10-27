import { c as create_ssr_component, b as subscribe, g as set_store_value, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import { s as selectedProject } from "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2018 \u2022 Data Visualization \u2022 Independent";
const Thought_parser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  set_store_value(selectedProject, $selectedProject = "Thought Parser", $selectedProject);
  let imgs = ["/assets/thoughtParser/tp1.png", "/assets/thoughtParser/tp2.png"];
  let desc = [
    "Download your most revealing, personal moments. Share them with a machine. Now: remove yourself from the picture. Outside of your body, your narrative now stands as text. The machine explains your story. ",
    "'Thought Parser' is intended to reveal stories that lie hidden and interwoven between individual journal entries. The project holds two years of journal content, consumed and visualized by an algorithm.",
    "Due to the personal nature of this project, I've opted to include screenshots, rather than a direct weblink. Additionally, I've whited out most of my journal text. The visual was built in d3.js. Text processing was done via Compromise.js, and node.js.  "
  ];
  $$unsubscribe_selectedProject();
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info }, {}, {})}`;
});
export { Thought_parser as default };
