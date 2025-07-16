import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_DN_5AVfw.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[calc(100vh-16rem)] flex items-center justify-center"> <div class="mt-16 text-center"> <div class="flex flex-col items-center justify-center space-y-6"> <!-- TODO: Replace this placeholder with your actual image path (e.g., from public/ or Strapi media URL). This is the spot to edit for custom images later. --> <img src="https://placehold.co/400x300?text=Sad+Bulldog" alt="Sad bulldog indicating page not found" loading="lazy" class="w-80 h-60 object-cover rounded-lg shadow-medium"> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-brand-navy">404</h1> <p class="text-lg mt-4 text-secondary max-w-md">
Oops! This page went for a walk and got lost. Let's get you back home.
</p> <a href="/" aria-label="Return to home page" class="bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-brand-orange-hover transition-all duration-200 font-semibold shadow-medium hover:shadow-strong hover:scale-105">
Go Back Home
</a> </div> </div> </div> ` })} ` })}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/404.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
