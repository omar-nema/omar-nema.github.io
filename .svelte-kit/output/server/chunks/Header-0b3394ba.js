import { h as getContext, c as create_ssr_component, d as subscribe, a as add_attribute, e as escape } from "./index-2508cab0.js";
import { b as base } from "./paths-6758d194.js";
import { s as selectedProject } from "./state-9669c413.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1kqg1tk.svelte-1kqg1tk{display:flex;align-items:center;height:45px;width:100%;border-bottom:1px solid black;position:fixed;top:0;left:0;z-index:5;font-size:18px}.inner-header.svelte-1kqg1tk.svelte-1kqg1tk{height:100%;width:100%;max-width:var(--dim-width-max);display:flex}.header-padding.svelte-1kqg1tk.svelte-1kqg1tk{background:blue;width:calc(50vw - var(--dim-width-max) / 2);height:100%}.header-padding.left.svelte-1kqg1tk.svelte-1kqg1tk{background:var(--header-accent)}.header-padding.right.svelte-1kqg1tk.svelte-1kqg1tk{background:var(--header-primary)}.name-holder.svelte-1kqg1tk.svelte-1kqg1tk{height:100%;display:flex;align-items:center;align-content:center;justify-content:center;background:var(--header-accent);width:200px;font-weight:700;color:black}.header-nav.svelte-1kqg1tk.svelte-1kqg1tk{width:calc(100% - 200px);background-color:var(--header-primary);color:white;display:flex;align-items:center;padding-left:20px;font-weight:500;border-left:1px dashed black;display:flex}.header-nav.split.svelte-1kqg1tk.svelte-1kqg1tk{justify-content:space-between}.header-name.svelte-1kqg1tk a.svelte-1kqg1tk{text-decoration:none;color:black}.selected.svelte-1kqg1tk.svelte-1kqg1tk{color:#ffffad}.project-title.svelte-1kqg1tk.svelte-1kqg1tk{text-transform:lowercase}.nav-left.svelte-1kqg1tk.svelte-1kqg1tk{display:flex;flex-direction:row;align-items:center;color:lightgray}.nav-left.svelte-1kqg1tk div.svelte-1kqg1tk{margin:0 5px}.btn-back.svelte-1kqg1tk.svelte-1kqg1tk{color:lightgray;text-decoration:none;cursor:pointer}.btn-back.svelte-1kqg1tk.svelte-1kqg1tk:hover{color:#ffffad}@media only screen and (max-width: 700px){.header-nav.split.svelte-1kqg1tk.svelte-1kqg1tk{padding:0;justify-content:center}.nav-left.svelte-1kqg1tk.svelte-1kqg1tk{display:none}.name-holder.svelte-1kqg1tk.svelte-1kqg1tk,.header-nav.svelte-1kqg1tk.svelte-1kqg1tk{flex-basis:50%}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let $$unsubscribe_page;
  let $selectedProject, $$unsubscribe_selectedProject;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_selectedProject = subscribe(selectedProject, (value) => $selectedProject = value);
  $$result.css.add(css);
  pathname = "";
  $$unsubscribe_page();
  $$unsubscribe_selectedProject();
  return `<header class="${"svelte-1kqg1tk"}"><div class="${"header-padding left svelte-1kqg1tk"}"></div>
  <div class="${"inner-header svelte-1kqg1tk"}"><div class="${"name-holder svelte-1kqg1tk"}"><div class="${"header-name svelte-1kqg1tk"}"><a sveltekit:prefetch${add_attribute("href", base + "/", 0)} class="${"svelte-1kqg1tk"}">omar nema</a></div></div>
    <div class="${["header-nav svelte-1kqg1tk", pathname.includes("project") ? "split" : ""].join(" ").trim()}">${!pathname.includes("project") ? `<div>work</div>` : `<div class="${"nav-left svelte-1kqg1tk"}"><div class="${"svelte-1kqg1tk"}">work</div>
          <div class="${"svelte-1kqg1tk"}">/</div>
          <div class="${"selected project-title svelte-1kqg1tk"}">${escape($selectedProject)}</div></div>
        <div class="${"nav-right"}"><a class="${"btn-back svelte-1kqg1tk"}"${add_attribute("href", base + "/work", 0)}>${escape("< back")}</a></div>`}</div></div>

  <div class="${"header-padding right svelte-1kqg1tk"}"></div>
</header>`;
});
export { Header as H };
