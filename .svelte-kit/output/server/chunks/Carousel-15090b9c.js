import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each } from "./index-0fc46fdf.js";
import { t as transitionTime } from "./state-7fb579f2.js";
var Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slider.svelte-rh2lsc.svelte-rh2lsc{margin:auto;height:auto;width:100%;padding-bottom:30px}.slides.svelte-rh2lsc.svelte-rh2lsc{padding:10px;height:100%;position:relative;overflow:hidden;max-height:calc(100vh - 170px)}.slide.svelte-rh2lsc.svelte-rh2lsc{transition:transform ease-in-out 0.65s, opacity ease-in-out 0.8s;position:absolute;top:50%;left:50%;max-height:100%;opacity:0;transform:translate(-50%, -50%);cursor:pointer}.slide.curr.svelte-rh2lsc.svelte-rh2lsc{transform:translate(-50%, -50%);opacity:1}.slide.before.svelte-rh2lsc.svelte-rh2lsc{transform:translate(-100vw, -50%);opacity:0}.slide.after.svelte-rh2lsc.svelte-rh2lsc{transform:translate(100vw, -50%);opacity:0}img.svelte-rh2lsc.svelte-rh2lsc,video.svelte-rh2lsc.svelte-rh2lsc{max-height:calc(100vh - 170px);border:2px solid #aea3a3;border-color:black;padding:3px}.dots.svelte-rh2lsc.svelte-rh2lsc{display:flex;margin-top:16px;justify-content:center}.dot.svelte-rh2lsc.svelte-rh2lsc{width:15px;height:15px;border-radius:100%;transition:background 0.3s ease-in-out;margin:0 10px;border:2px solid #a59898;background:white;cursor:pointer}.dot.svelte-rh2lsc.svelte-rh2lsc:hover{background:black}.dot.active.svelte-rh2lsc.svelte-rh2lsc{background:black;border-color:black}.nav-btn.svelte-rh2lsc.svelte-rh2lsc{position:absolute;top:50%;background:#f7f9fd;border-radius:100%;display:flex;box-shadow:0x 1px 1px 2px rgba(0, 0, 0, 0.1);border:1px solid #d8d1d1;box-shadow:0.5px 1px 2px 0px rgb(0 0 0 / 10%);z-index:10;cursor:pointer;transition:border-color 0.1s linear;transform:translateY(-50%)}.nav-btn.left.svelte-rh2lsc.svelte-rh2lsc{left:20px}.nav-btn.right.svelte-rh2lsc.svelte-rh2lsc{right:20px}.nav-btn.svelte-rh2lsc.svelte-rh2lsc:hover{border-color:#c2b8b8}.nav-btn.svelte-rh2lsc .material-icons-round.svelte-rh2lsc{font-size:28px;color:black}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_transitionTime;
  $$unsubscribe_transitionTime = subscribe(transitionTime, (value) => value);
  let { imgs } = $$props;
  let currSlide = 0;
  let maxH;
  let { imgCap = "1200px" } = $$props;
  let carouselContainer;
  let imgsWithTypes = [];
  imgs.forEach((d) => {
    let type;
    if (d.includes("mp4") || d.includes("avi")) {
      type = "video";
    } else {
      type = "image";
    }
    imgsWithTypes.push({ path: d, type });
  });
  let sampleImage;
  if ($$props.imgs === void 0 && $$bindings.imgs && imgs !== void 0)
    $$bindings.imgs(imgs);
  if ($$props.imgCap === void 0 && $$bindings.imgCap && imgCap !== void 0)
    $$bindings.imgCap(imgCap);
  $$result.css.add(css);
  $$unsubscribe_transitionTime();
  return `<section${add_attribute("this", carouselContainer, 0)}><div class="${"slider svelte-rh2lsc"}"><div class="${"slides svelte-rh2lsc"}" style="${"height: " + escape(maxH) + "px"}"><div class="${"nav-btn left svelte-rh2lsc"}"><span class="${"material-icons-round svelte-rh2lsc"}">arrow_left </span></div>
      <div class="${"nav-btn right svelte-rh2lsc"}"><span class="${"material-icons-round svelte-rh2lsc"}">arrow_right </span></div>
      ${each(imgsWithTypes, (img, slideIndex) => `<div class="${[
    "slide svelte-rh2lsc",
    (slideIndex == currSlide ? "curr" : "") + " " + (slideIndex < currSlide ? "before" : "") + " " + (slideIndex > currSlide ? "after" : "")
  ].join(" ").trim()}">${img.type == "image" ? `<img style="${"max-width: min(90vw, " + escape(imgCap) + "); max-height: " + escape(maxH) + "px"}"${add_attribute("src", img.path, 0)} class="${"svelte-rh2lsc"}"${add_attribute("this", sampleImage, 0)}>` : `<video controls style="${"max-width: min(90vw, " + escape(imgCap) + "); max-height: " + escape(maxH) + "px"}" class="${"svelte-rh2lsc"}"><source${add_attribute("src", img.path, 0)} type="${"video/mp4"}"></video>`}
        </div>`)}</div>
    <div class="${"dots svelte-rh2lsc"}">${each(imgs, (img, index) => `<div class="${["dot svelte-rh2lsc", currSlide == index ? "active" : ""].join(" ").trim()}"${add_attribute("data-index", index, 0)}></div>`)}</div></div>
</section>`;
});
export { Carousel as C };
