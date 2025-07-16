import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, f as renderComponent, F as Fragment } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { c as $$Link, $ as $$Layout, a as $$Container } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://maxlinexhorror-pxisu6g03-logan-folses-projects.vercel.app");
const $$Tick = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor"></path> </svg>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/ui/icons/tick.astro", void 0);

const $$Astro$1 = createAstro("https://maxlinexhorror-pxisu6g03-logan-folses-projects.vercel.app");
const $$Pricing$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const { plan } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"> <div class="text-center"> <h4 class="text-lg font-medium text-gray-400">${plan.name}</h4><p class="mt-3 text-4xl font-bold text-black md:text-4xl"> ${plan.price && typeof plan.price === "object" ? plan.price.monthly : plan.price} </p> <!-- {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } --> </div><ul class="grid mt-8 text-left gap-y-4"> ${plan.features.map((item) => renderTemplate`<li class="flex items-start gap-3 text-gray-800"> ${renderComponent($$result, "Tick", $$Tick, { "class": "w-6 h-6" })} <span>${item}</span> </li>`)} </ul><div class="flex mt-8"> ${renderComponent($$result, "Link", $$Link, { "href": plan.button.link || "#", "block": true, "style": plan.popular ? "primary" : "outline" }, { "default": ($$result2) => renderTemplate`${plan.button.text || "Get Started"}` })} </div> </div> </div>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/pricing.astro", void 0);

const $$Astro = createAstro("https://maxlinexhorror-pxisu6g03-logan-folses-projects.vercel.app");
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const pricing = [
    {
      name: "Personal",
      price: "Free",
      popular: false,
      features: [
        "Lifetime free",
        "Up to 3 users",
        "Unlimited Pages",
        "Astro Sub domain",
        "Basic Integrations",
        "Community Support"
      ],
      button: {
        text: "Get Started",
        link: "/"
      }
    },
    {
      name: "Startup",
      price: {
        monthly: "$19",
        annual: "$16",
        discount: "10%",
        original: "$24"
      },
      popular: true,
      features: [
        "All Free Features",
        "Up to 20 users",
        "20 Custom domains",
        "Unlimited Collaborators",
        "Advanced Integrations",
        "Priority Support"
      ],
      button: {
        text: "Get Started",
        link: "#"
      }
    },
    {
      name: "Enterprise",
      price: "Custom",
      popular: false,
      features: [
        "All Pro Features",
        "Unlimited Custom domains",
        "99.99% Uptime SLA",
        "SAML & SSO Integration",
        "Dedicated Account Manager",
        "24/7 Phone Support"
      ],
      button: {
        text: "Contact us",
        link: "/contact"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
Simple & Predictable pricing. No Surprises.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Pricing` })}` })} ${maybeRenderHead()}<div class="grid md:grid-cols-3 gap-10 mx-auto max-w-(--breakpoint-lg) mt-12"> ${pricing.map((item) => renderTemplate`${renderComponent($$result3, "PricingCard", $$Pricing$1, { "plan": item })}`)} </div> ` })} ` })}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/pricing.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
