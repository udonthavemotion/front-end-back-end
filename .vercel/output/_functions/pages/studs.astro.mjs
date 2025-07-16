import { a as createComponent, f as renderComponent, g as renderScript, d as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$Icon } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
import { c as getStuds, f as formatPrice, b as getImageUrl } from '../chunks/strapi_DWb3GrfW.mjs';
export { renderers } from '../renderers.mjs';

const $$Studs = createComponent(async ($$result, $$props, $$slots) => {
  let studs = [];
  let error = null;
  try {
    const response = await getStuds({
      populate: "images",
      sort: "createdAt:desc",
      pageSize: 50
    });
    studs = response.data;
  } catch (err) {
    console.error("Error fetching studs:", err);
    error = "Failed to load studs. Please try again later.";
    studs = [
      {
        id: 1,
        name: "Joker",
        age: "4 years",
        availability: "Available",
        fee: 4500,
        description: "Key stud in our lineup. Movie villain themed bloodline with proven genetics.",
        bloodlines: "Maxline Foundation",
        specialties: "Champion Bloodlines, Proven Producer",
        images: [],
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
        publishedAt: "2023-01-01T00:00:00.000Z"
      },
      {
        id: 2,
        name: "Hannibal",
        age: "5 years",
        availability: "Available",
        fee: 5e3,
        description: "Foundational male for our breeding program. Strong producer with excellent structure.",
        bloodlines: "Maxline Foundation",
        specialties: "Foundational Genetics, Structure",
        images: [],
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
        publishedAt: "2023-01-01T00:00:00.000Z"
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Champion Studs" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`
Browse our elite English Bulldog studs available for breeding - Where Legends Are Made
` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Champion Studs` })}` })} ${maybeRenderHead()}<main class="mt-16"> <!-- Error Message --> ${error && renderTemplate`<div class="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4"> <p class="text-yellow-800"> <strong>Note:</strong> ${error} Showing sample data for demonstration.
</p> </div>`} <!-- Filter Controls --> <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-center"> <button id="filter-all" class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 font-medium" aria-label="Show all studs">
All Studs
</button> <button id="filter-available" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 font-medium" aria-label="Show available studs only">
Available Only
</button> <button id="filter-busy" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 font-medium" aria-label="Show busy studs only">
Busy
</button> </div> <!-- Studs Grid --> <div id="studs-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"> ${studs.map((stud) => renderTemplate`<article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 stud-card"${addAttribute(stud.availability, "data-status")}> <div class="relative photo-hover"> <img${addAttribute(stud.images && stud.images.length > 0 ? getImageUrl(stud.images[0], "medium") : "https://placehold.co/400x300?text=No+Image", "src")}${addAttribute(stud.images && stud.images.length > 0 && stud.images[0].alternativeText ? stud.images[0].alternativeText : `${stud.name} stud`, "alt")} loading="lazy" class="w-full h-64 object-cover"> <div class="overlay-text"> <h3 class="text-xl font-bold">${stud.name}</h3> <p class="text-lg">${formatPrice(stud.fee)}</p> </div> <div class="absolute top-3 right-3"> <span${addAttribute(`text-white text-xs font-bold px-3 py-1 rounded-full ${stud.availability === "Available" ? "bg-green-500" : stud.availability === "Busy" ? "bg-yellow-500" : "bg-red-500"}`, "class")}> ${stud.availability} </span> </div> <div class="absolute top-3 left-3"> <span class="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3 h-3", "name": "bx:bxs-crown" })}
Stud
</span> </div> </div> <div class="p-6"> <div class="flex items-center justify-between mb-3"> <h3 class="text-xl font-bold text-gray-900">${stud.name}</h3> <div class="flex items-center gap-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4 text-blue-600", "name": "bx:bxs-calendar" })} <span class="text-sm">${stud.age}</span> </div> </div> <p class="text-gray-600 text-sm mb-3">${stud.description}</p> <div class="mb-3"> <h4 class="text-xs font-semibold text-gray-700 mb-1">BLOODLINES:</h4> <div class="flex flex-wrap gap-1"> ${stud.bloodlines && stud.bloodlines.split(",").map((bloodline) => renderTemplate`<span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"> ${bloodline.trim()} </span>`)} </div> </div> <div class="mb-4"> <h4 class="text-xs font-semibold text-gray-700 mb-1">SPECIALTIES:</h4> <div class="flex flex-wrap gap-1"> ${stud.specialties && stud.specialties.split(",").map((specialty) => renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"> ${specialty.trim()} </span>`)} </div> </div> <div class="flex items-center justify-between"> <div> <span class="text-xs text-gray-500">Stud Fee:</span> <span class="text-blue-600 font-bold text-lg block">${formatPrice(stud.fee)}</span> </div> <a${addAttribute(`/contact?stud=${encodeURIComponent(stud.name)}`, "href")} class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm inline-flex items-center gap-2"${addAttribute(`Contact for breeding with ${stud.name}`, "aria-label")}> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "bx:bxs-phone" })}
Contact for Breeding
</a> </div> </div> </article>`)} </div> <!-- Additional Information --> <div class="mt-16 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto"> <div class="text-center mb-8"> <h3 class="text-2xl font-bold text-gray-900 mb-4">Breeding Information</h3> <p class="text-gray-600">
All our studs are part of our strategic breeding program focused on rare genetics, 
            exotic colors, and champion bloodlines. Based in Wellington, Florida with UK connections.
</p> </div> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "bx:dna" })} </div> <h4 class="font-semibold text-gray-900 mb-2">Exotic Genetics</h4> <p class="text-sm text-gray-600">Rare color combinations and QuadZilla carriers</p> </div> <div class="text-center"> <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "bx:world" })} </div> <h4 class="font-semibold text-gray-900 mb-2">International Bloodlines</h4> <p class="text-sm text-gray-600">Strategic imports between US and UK operations</p> </div> <div class="text-center"> <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "bx:bxs-crown" })} </div> <h4 class="font-semibold text-gray-900 mb-2">Where Legends Are Made</h4> <p class="text-sm text-gray-600">Passion-driven breeding for generational impact</p> </div> </div> </div> </main> ` })} ` })} ${renderScript($$result, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/studs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/studs.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/studs.astro";
const $$url = "/studs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Studs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
