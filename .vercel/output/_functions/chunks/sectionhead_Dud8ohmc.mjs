import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://maxlinexhorror-pxisu6g03-logan-folses-projects.vercel.app");
const $$Sectionhead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="text-lg mt-4 text-slate-600"> ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)} </p> </div>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/sectionhead.astro", void 0);

export { $$Sectionhead as $ };
