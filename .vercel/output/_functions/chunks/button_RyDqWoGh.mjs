import { a as createComponent, c as createAstro, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_Ne5A_v-A.mjs';
import 'clsx';

const $$Astro = createAstro("https://maxlinexhorror-pxisu6g03-logan-folses-projects.vercel.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-brand-blue hover:bg-brand-blue text-brand-blue hover:text-white",
    primary: "bg-brand-orange text-white hover:bg-brand-orange-hover border-2 border-transparent shadow-medium",
    secondary: "bg-brand-blue text-white hover:bg-brand-blue-hover border-2 border-transparent shadow-medium",
    inverted: "bg-white text-brand-navy hover:bg-neutral-100 border-2 border-transparent shadow-medium"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded-lg text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 hover:scale-105 hover:shadow-strong",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </button>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/ui/button.astro", void 0);

export { $$Button as $ };
