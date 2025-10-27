import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each } from "./index-0fc46fdf.js";
import { t as transitionTime } from "./state-7fb579f2.js";
var Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slider.svelte-rmhe52.svelte-rmhe52{margin:auto;height:auto;width:100%;padding-bottom:30px}.slider.with-top-margin.svelte-rmhe52.svelte-rmhe52{margin-top:30px}.slides.svelte-rmhe52.svelte-rmhe52{padding:10px;height:100%;position:relative;overflow:hidden;max-height:calc(100vh - 170px)}.slide.svelte-rmhe52.svelte-rmhe52{transition:transform ease-in-out 0.65s, opacity ease-in-out 0.8s;position:absolute;top:50%;left:50%;max-height:100%;opacity:0;transform:translate(-50%, -50%);cursor:pointer}.slide.curr.svelte-rmhe52.svelte-rmhe52{transform:translate(-50%, -50%);opacity:1}.slide.before.svelte-rmhe52.svelte-rmhe52{transform:translate(-100vw, -50%);opacity:0}.slide.after.svelte-rmhe52.svelte-rmhe52{transform:translate(100vw, -50%);opacity:0}img.svelte-rmhe52.svelte-rmhe52,video.svelte-rmhe52.svelte-rmhe52{max-height:calc(100vh - 170px);border:2px solid #aea3a3;border-color:black;padding:3px}.dots.svelte-rmhe52.svelte-rmhe52{display:flex;margin-top:16px;justify-content:center}.dot.svelte-rmhe52.svelte-rmhe52{width:15px;height:15px;border-radius:100%;transition:background 0.3s ease-in-out;margin:0 10px;border:2px solid #a59898;background:white;cursor:pointer}.dot.svelte-rmhe52.svelte-rmhe52:hover{background:black}.dot.active.svelte-rmhe52.svelte-rmhe52{background:black;border-color:black}.nav-btn.svelte-rmhe52.svelte-rmhe52{position:absolute;top:50%;background:#f7f9fd;border-radius:100%;display:flex;box-shadow:0x 1px 1px 2px rgba(0, 0, 0, 0.1);border:1px solid #d8d1d1;box-shadow:0.5px 1px 2px 0px rgb(0 0 0 / 10%);z-index:10;cursor:pointer;transition:border-color 0.1s linear;transform:translateY(-50%)}.nav-btn.left.svelte-rmhe52.svelte-rmhe52{left:20px}.nav-btn.right.svelte-rmhe52.svelte-rmhe52{right:20px}.nav-btn.svelte-rmhe52.svelte-rmhe52:hover{border-color:#c2b8b8}.nav-btn.svelte-rmhe52 .material-icons-round.svelte-rmhe52{font-size:28px;color:black}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_transitionTime;
  $$unsubscribe_transitionTime = subscribe(transitionTime, (value) => value);
  let { imgs } = $$props;
  let currSlide = 0;
  let maxH;
  let { imgCap = "1200px" } = $$props;
  let { addTopMargin = false } = $$props;
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
  if ($$props.addTopMargin === void 0 && $$bindings.addTopMargin && addTopMargin !== void 0)
    $$bindings.addTopMargin(addTopMargin);
  $$result.css.add(css);
  $$unsubscribe_transitionTime();
  return `<section${add_attribute("this", carouselContainer, 0)}><div class="${["slider svelte-rmhe52", addTopMargin ? "with-top-margin" : ""].join(" ").trim()}"><div class="${"slides svelte-rmhe52"}" style="${"height: " + escape(maxH) + "px"}"><div class="${"nav-btn left svelte-rmhe52"}"><span class="${"material-icons-round svelte-rmhe52"}">arrow_left </span></div>
      <div class="${"nav-btn right svelte-rmhe52"}"><span class="${"material-icons-round svelte-rmhe52"}">arrow_right </span></div>
      ${each(imgsWithTypes, (img, slideIndex) => `<div class="${[
    "slide svelte-rmhe52",
    (slideIndex == currSlide ? "curr" : "") + " " + (slideIndex < currSlide ? "before" : "") + " " + (slideIndex > currSlide ? "after" : "")
  ].join(" ").trim()}">${img.type == "image" ? `<img style="${"max-width: min(90vw, " + escape(imgCap) + "); max-height: " + escape(maxH) + "px"}"${add_attribute("src", img.path, 0)} class="${"svelte-rmhe52"}"${add_attribute("this", sampleImage, 0)}>` : `<video controls style="${"max-width: min(90vw, " + escape(imgCap) + "); max-height: " + escape(maxH) + "px"}" class="${"svelte-rmhe52"}"><source${add_attribute("src", img.path, 0)} type="${"video/mp4"}"></video>`}
        </div>`)}</div>
    <div class="${"dots svelte-rmhe52"}">${each(imgs, (img, index) => `<div class="${["dot svelte-rmhe52", currSlide == index ? "active" : ""].join(" ").trim()}"${add_attribute("data-index", index, 0)}></div>`)}</div></div>
</section>`;
});
export { Carousel as C };
