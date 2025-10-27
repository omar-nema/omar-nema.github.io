import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index-0fc46fdf.js";
import { s as selectedProject } from "../../chunks/state-7fb579f2.js";
import { H as Header } from "../../chunks/Header-f8701354.js";
import { b as base } from "../../chunks/paths-6758d194.js";
import { p as projectData, a as projectsFiltered } from "../../chunks/Filters.svelte_svelte_type_style_lang-9a2693b8.js";
const css$2 = {
  code: ".card.svelte-1nuu7r1.svelte-1nuu7r1{text-decoration:none;margin-bottom:30px;margin-right:30px;border:1px dashed black;padding:20px;background:white;position:relative;width:calc(33% - 30px);height:auto;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\n      transform 0.1s ease-in-out, border-style 0.15s ease-in-out;cursor:pointer;font-size:16px;min-width:250px}.card.svelte-1nuu7r1.svelte-1nuu7r1:hover{border-color:black;transform:scale(1.03);border-style:solid}.card-title.svelte-1nuu7r1.svelte-1nuu7r1{font-weight:700;color:black;justify-content:space-between;align-items:center;text-decoration:underline;text-decoration-thickness:0.5px}.card-body.svelte-1nuu7r1.svelte-1nuu7r1{height:100px;padding-top:15px;color:black;font-weight:400}.list-row.svelte-1nuu7r1.svelte-1nuu7r1{display:flex}.card-footer.svelte-1nuu7r1.svelte-1nuu7r1{display:flex}.chip.svelte-1nuu7r1.svelte-1nuu7r1{font-size:14px;margin-right:10px;border-radius:15px;text-overflow:ellipsis;white-space:nowrap;padding:2px 10px;font-weight:400;color:white;border:1.3px solid transparent;font-weight:600;background:none}.chip.date.svelte-1nuu7r1.svelte-1nuu7r1{background:#3f3e3e}.chip.datavis.svelte-1nuu7r1.svelte-1nuu7r1{color:var(--color-tag-datavis);border-color:var(--color-tag-datavis);background:var(--color-tag-datavis-bg)}.chip.art.svelte-1nuu7r1.svelte-1nuu7r1{color:var(--color-tag-art);border-color:var(--color-tag-art);background:var(--color-tag-art-bg)}.chip.product.svelte-1nuu7r1.svelte-1nuu7r1{color:var(--color-tag-product);border-color:var(--color-tag-product);background:var(--color-tag-product-bg)}@media only screen and (min-width: 600px) and (max-width: 800px){.card.svelte-1nuu7r1.svelte-1nuu7r1{width:45%;margin-right:4%}}@media only screen and (max-width: 600px){.card-footer.svelte-1nuu7r1 .chip.svelte-1nuu7r1{font-size:12px;padding:4px 10px;max-width:inherit}.card.svelte-1nuu7r1.svelte-1nuu7r1{width:95%;margin:auto;margin-bottom:30px}.card.svelte-1nuu7r1.svelte-1nuu7r1:hover{transform:none}.card-body.svelte-1nuu7r1.svelte-1nuu7r1{height:100px}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedProject;
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => value);
  let { data } = $$props;
  let maxDate = Math.max(...data.years);
  let displayDate = maxDate;
  if (data.years.length > 1) {
    minDate = Math.min(...data.years);
    displayDate = minDate + " - " + maxDate;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  $$unsubscribe_selectedProject();
  return `<a class="${"card svelte-1nuu7r1"}" sveltekit:prefetch${add_attribute("href", base + data.url, 0)}><div class="${"list-row card-title svelte-1nuu7r1"}"><span>${escape(data.title)}</span></div>
  <div class="${"list-row card-body svelte-1nuu7r1"}">${escape(data.description)}</div>
  <div class="${"list-row card-footer svelte-1nuu7r1"}">${each(data.tags, (tag) => `<div class="${[
    "chip svelte-1nuu7r1",
    (tag == "datavis" ? "datavis" : "") + " " + (tag == "art" ? "art" : "") + " " + (tag == "product" ? "product" : "")
  ].join(" ").trim()}">${escape(tag)}
      </div>`)}
    <div class="${"chip date svelte-1nuu7r1"}">${escape(displayDate)}</div></div>
</a>`;
});
const css$1 = {
  code: ".filter-holder.svelte-1gihyr6.svelte-1gihyr6{width:100%;height:70px;padding-top:10px}.project-filter.svelte-1gihyr6.svelte-1gihyr6{display:flex;justify-content:flex-start;padding:10px 0}.filter-option.svelte-1gihyr6.svelte-1gihyr6{margin-right:20px;padding:5px 0px;color:gray;height:30px;font-weight:500;border-bottom:1px solid transparent;cursor:pointer;transition:all 0.3s linear}.circle.svelte-1gihyr6.svelte-1gihyr6{width:10px;height:10px;border:2px solid black;display:inline-block;border-radius:100%;margin-right:5px;background:white;transition:background 0.3s linear}.filter-option.all.svelte-1gihyr6.svelte-1gihyr6{color:var(--color-tag-all)}.filter-option.all.svelte-1gihyr6 .circle.svelte-1gihyr6{border-color:var(--color-tag-all)}.filter-option.selected.all.svelte-1gihyr6 .circle.svelte-1gihyr6,.filter-option.all.svelte-1gihyr6:hover .circle.svelte-1gihyr6{background:var(--color-tag-all)}.filter-option.all.selected.svelte-1gihyr6.svelte-1gihyr6{border-bottom-color:var(--color-tag-all)}.filter-option.datavis.svelte-1gihyr6.svelte-1gihyr6{color:var(--color-tag-datavis)}.filter-option.datavis.svelte-1gihyr6 .circle.svelte-1gihyr6{border-color:var(--color-tag-datavis)}.filter-option.selected.datavis.svelte-1gihyr6 .circle.svelte-1gihyr6,.filter-option.datavis.svelte-1gihyr6:hover .circle.svelte-1gihyr6{background:var(--color-tag-datavis)}.filter-option.selected.datavis.svelte-1gihyr6.svelte-1gihyr6{border-bottom-color:var(--color-tag-datavis)}.filter-option.art.svelte-1gihyr6.svelte-1gihyr6{color:var(--color-tag-art)}.filter-option.art.svelte-1gihyr6 .circle.svelte-1gihyr6{border-color:var(--color-tag-art)}.filter-option.selected.art.svelte-1gihyr6 .circle.svelte-1gihyr6,.filter-option.art.svelte-1gihyr6:hover .circle.svelte-1gihyr6{background:var(--color-tag-art)}.filter-option.selected.art.svelte-1gihyr6.svelte-1gihyr6{border-bottom-color:var(--color-tag-art)}.filter-option.product.svelte-1gihyr6.svelte-1gihyr6{color:var(--color-tag-product)}.filter-option.product.svelte-1gihyr6 .circle.svelte-1gihyr6{border-color:var(--color-tag-product)}.filter-option.selected.product.svelte-1gihyr6 .circle.svelte-1gihyr6,.filter-option.product.svelte-1gihyr6:hover .circle.svelte-1gihyr6{background:var(--color-tag-product)}.filter-option.selected.product.svelte-1gihyr6.svelte-1gihyr6{border-bottom-color:var(--color-tag-product)}@media only screen and (max-width: 600px){.filter-holder.svelte-1gihyr6.svelte-1gihyr6{display:flex;justify-content:center}.project-filter.svelte-1gihyr6.svelte-1gihyr6{justify-content:space-between;width:90%}.filter-option.svelte-1gihyr6.svelte-1gihyr6{height:auto;margin-right:0;border-bottom:none}.filter-holder.svelte-1gihyr6.svelte-1gihyr6{height:55px;padding:0}}",
  map: null
};
const Filters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectData, $$unsubscribe_projectData;
  let $$unsubscribe_projectsFiltered;
  $$unsubscribe_projectData = subscribe(projectData, (value) => $projectData = value);
  $$unsubscribe_projectsFiltered = subscribe(projectsFiltered, (value) => value);
  let tagsFlat = $projectData.map((d) => d.tags).flat(1);
  let tagsUnique = [...new Set(tagsFlat)];
  tagsUnique.unshift("all");
  let currentFilter = "all";
  $$result.css.add(css$1);
  $$unsubscribe_projectData();
  $$unsubscribe_projectsFiltered();
  return `<div class="${"filter-holder svelte-1gihyr6"}"><div class="${"project-filter type svelte-1gihyr6"}">${each(tagsUnique, (tag) => `<div class="${[
    "filter-option " + escape(tag) + " svelte-1gihyr6",
    tag == currentFilter ? "selected" : ""
  ].join(" ").trim()}"${add_attribute("data-type", tag, 0)}><span class="${"circle svelte-1gihyr6"}"></span>
        ${escape(tag)}
      </div>`)}</div>
</div>`;
});
var work_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project-outer.svelte-1pzvcoi{width:100%;padding-top:5px;overflow-y:auto;-webkit-overflow-scrolling:touch;height:auto;max-height:calc(\n        100vh - var(--dim-header-height) - var(--dim-filter-height) - 65px\n      );padding-bottom:40px}.project-list-holder.svelte-1pzvcoi{display:flex;flex-wrap:wrap;margin:auto}@media only screen and (max-width: 600px){.project-list-holder.svelte-1pzvcoi{flex-direction:column;flex-wrap:inherit;align-items:center;justify-content:center}}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectsFiltered, $$unsubscribe_projectsFiltered;
  $$unsubscribe_projectsFiltered = subscribe(projectsFiltered, (value) => $projectsFiltered = value);
  $$result.css.add(css);
  $$unsubscribe_projectsFiltered();
  return `${$$result.head += `${$$result.title = `<title>omar nema</title>`, ""}`, ""}
  ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <div class="${"content-outer"}"><div class="${"content-inner"}">${validate_component(Filters, "Filters").$$render($$result, {}, {}, {})}</div>
  
    <div class="${"project-outer svelte-1pzvcoi"}"><div class="${"project-list-holder content-inner svelte-1pzvcoi"}">${each($projectsFiltered, (project) => `${validate_component(Card, "Card").$$render($$result, { data: project }, {}, {})}`)}</div></div>
  </div>`;
});
export { Work as default };
