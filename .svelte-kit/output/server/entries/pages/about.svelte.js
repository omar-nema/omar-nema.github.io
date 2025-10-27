import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../chunks/index-0fc46fdf.js";
import "../../chunks/state-7fb579f2.js";
import { H as Header } from "../../chunks/Header-f8701354.js";
import { b as base } from "../../chunks/paths-6758d194.js";
import "../../chunks/Filters.svelte_svelte_type_style_lang-9a2693b8.js";
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-page.svelte-w0ochl.svelte-w0ochl{margin:auto;max-width:750px;margin-bottom:30px;margin-top:80px;line-height:1.4rem;background:white;padding:50px;border:1px dashed black}.about-header.svelte-w0ochl.svelte-w0ochl{font-weight:700;font-size:18px;margin-bottom:40px}.about-header.svelte-w0ochl span.svelte-w0ochl{border-bottom:2px solid black;padding-bottom:5px}.download-btn.svelte-w0ochl.svelte-w0ochl{width:auto;display:inline-block;color:#416bfd;border:1px solid #416bfd;background:white;padding:5px 10px;margin-top:15px;font-weight:700;cursor:pointer;transition:background-color 0.15s linear;text-decoration:none}.download-btn.svelte-w0ochl.svelte-w0ochl:hover{background:#f3f3f9}@media only screen and (max-width: 600px){.about-page.svelte-w0ochl.svelte-w0ochl{margin-bottom:0;background:none;width:100%;border:none;padding:0px 25px;margin-top:60px}}body{padding-left:calc(100vw - 100%)}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"content"}"><div class="${"about-page svelte-w0ochl"}"><div class="${"about-header svelte-w0ochl"}"><span class="${"svelte-w0ochl"}">about omar</span></div>
    <div class="${"about-body"}"><p></p>
      <p>I am a: technologist, strategist, and educator.</p>
      <p>Since graduating with a biomedical engineering degree in 2015, I have
        been drawn to creative, socially-minded applications of technology. In
        2016, I moved from a data engineering position to product management in
        pursuit of a more craft-based, human-centered role. From 2016-2021, I
        managed and designed all care-focused applications at Arcadia.io as a
        Senior Product Manager.
      </p>
      <p>Outside of work, I have developed a deep fascination for the interplay
        between data, technology, and the human experience. After creating some
        of my own visualization projects, I decided to to push my craft further
        by enrolling in the Data Visualization program at Parsons School of
        Design.
      </p>
      <p>I am currently finishing up my degree (set to graduate in May 2022),
        doing freelance work, and teaching creative coding course at Parsons.
        <span style="${"color: gray"}">Note: this website only contains my independent creative tech work.
          Professional product management and freelance work are *not* shown
          here.</span></p></div>
    <div class="${"about-footer"}"><a class="${"download-btn svelte-w0ochl"}"${add_attribute("href", base + "/assets/about/omar-nema-resume.pdf", 0)} download>download cv
      </a></div></div>
</div>`;
});
export { About as default };
