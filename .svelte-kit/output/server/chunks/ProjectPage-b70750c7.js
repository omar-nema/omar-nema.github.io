import { c as create_ssr_component, b as subscribe, e as escape, f as each, d as add_attribute, v as validate_component } from "./index-0fc46fdf.js";
import { t as transitionTime, s as selectedProject } from "./state-7fb579f2.js";
import { H as Header } from "./Header-f8701354.js";
import { C as Carousel } from "./Carousel-15090b9c.js";
var InfoSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".info-section.svelte-8obdfs{width:100%;max-width:96%;overflow:hidden;margin:auto;max-width:800px}.info-sec.svelte-8obdfs{color:gray}h1.svelte-8obdfs{margin-bottom:10px;text-decoration:underline}.btn-launch.svelte-8obdfs{width:100%;padding:18px 0;border:1px solid black;text-align:center;font-weight:600;background:#feffad8c;cursor:pointer;transition:all 0.15s linear;display:block;margin-top:35px;text-decoration:none;color:black}.btn-launch.svelte-8obdfs:hover{opacity:0.85}",
  map: null
};
const InfoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_transitionTime;
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_transitionTime = subscribe(transitionTime, (value) => value);
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  let { description = "" } = $$props;
  let { info = "" } = $$props;
  let { link } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  $$unsubscribe_transitionTime();
  $$unsubscribe_selectedProject();
  return `<section class="${"info-section svelte-8obdfs"}"><h1 class="${"svelte-8obdfs"}">${escape($selectedProject)}</h1>
  <div class="${"info-sec svelte-8obdfs"}"><p>${escape(info)}</p></div>
  <div class="${"info-body"}">${each(description, (para) => `<p>${escape(para)}
      </p>`)}</div>
  ${link ? `<a class="${"btn-launch svelte-8obdfs"}" target="${"_blank"}"${add_attribute("href", link, 0)}>Open Project</a>` : ``}
</section>`;
});
var ProjectPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{padding-left:calc(100vw - 100%)}",
  map: null
};
const ProjectPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgs = [] } = $$props;
  let { info } = $$props;
  let { desc = [] } = $$props;
  let { link = null } = $$props;
  if ($$props.imgs === void 0 && $$bindings.imgs && imgs !== void 0)
    $$bindings.imgs(imgs);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"content"}"><div class="${"container"}">${validate_component(Carousel, "Carousel").$$render($$result, { imgs }, {}, {})}
    ${validate_component(InfoSection, "InfoSection").$$render($$result, { description: desc, info, link }, {}, {})}</div>
</div>`;
});
export { ProjectPage as P };
