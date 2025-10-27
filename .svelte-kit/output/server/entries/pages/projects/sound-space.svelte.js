import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-0fc46fdf.js";
import { P as ProjectPage } from "../../../chunks/ProjectPage-b70750c7.js";
import "../../../chunks/state-7fb579f2.js";
import "../../../chunks/Header-f8701354.js";
import "../../../chunks/paths-6758d194.js";
import "../../../chunks/Carousel-15090b9c.js";
let info = "2020 \u2022 Web App \u2022 Independent";
let link = "http://omarnema.com/parsons-info-aesthetics/assignment-3-sound/index.html";
const Sound_space = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgs = [
    "/assets/soundAndSpace/ss0.png",
    "/assets/soundAndSpace/ss1.png",
    "/assets/soundAndSpace/ss2.png"
  ];
  let desc = [
    "'Sound and Space' is a data visualization showing how sound (particularly, the song 'Skin' by Grimes) occupies sonic and visual space. ",
    "In this visual, sound is broken down into waveforms, and visualized as a set of pulsating particles. As the song progresses, these particles continually transform to reflect the track's sonic properties. The viewer can manipulate different aspects of the track and visualize changes in particle shape and movement. ",
    "The project was built in Javascript, and uses WebGL and p5.js to for 3D visualization."
  ];
  return `${validate_component(ProjectPage, "ProjectPage").$$render($$result, { imgs, desc, info, link }, {}, {})}`;
});
export { Sound_space as default };
