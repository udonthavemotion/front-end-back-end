import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_O8lj2GIV.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_qyN-ui8B.mjs';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`
We write about building startups and thoughts going on our mind.
` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Our Blog` })}` })} ${maybeRenderHead()}<main class="mt-16"> <ul class="grid gap-16 max-w-4xl mx-auto"> ${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<li> <a${addAttribute(`/blog/${blogPostEntry.slug}`, "href")}> <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center"> ${renderComponent($$result3, "Picture", $$Picture, { "src": blogPostEntry.data.image.src, "alt": blogPostEntry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 800px", "width": 800, "height": 600, "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md object-cover object-center bg-white" })} <div> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${blogPostEntry.data.category} </span> <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 "> ${blogPostEntry.data.title} </h2> <div class="flex gap-2 mt-3"> <span class="text-gray-400"> ${blogPostEntry.data.author} </span> <span class="text-gray-400">• </span> <time class="text-gray-400"${addAttribute(blogPostEntry.data.publishDate.toISOString(), "datetime")}> ${blogPostEntry.data.publishDate.toDateString()} </time> </div> </div> </div> </a> </li>`)} </ul> </main> ` })} ` })}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/blog.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
