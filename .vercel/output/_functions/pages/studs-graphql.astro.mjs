import { a as createComponent, f as renderComponent, g as renderScript, d as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$Icon } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
import { a as getStuds, c as formatPrice, b as getImageUrl } from '../chunks/graphql_DMiYXh2W.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$StudsGraphql = createComponent(async ($$result, $$props, $$slots) => {
  let studs = [];
  let error = null;
  let meta = null;
  try {
    const response = await getStuds({
      sort: ["createdAt:desc"],
      pageSize: 50
    });
    studs = response.data;
    meta = response.meta;
    console.log("GraphQL studs fetch successful:", studs.length, "studs found");
  } catch (err) {
    console.error("Error fetching studs with GraphQL:", err);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Champion Studs (GraphQL)", "data-astro-cid-kyexz7ic": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kyexz7ic": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-kyexz7ic": true }, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`
Browse our elite English Bulldog studs available for breeding - Where Legends Are Made
` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Champion Studs (GraphQL)` })}` })}  ${maybeRenderHead()}<div class="mb-8 bg-blue-50 p-4 rounded-lg" data-astro-cid-kyexz7ic> <h3 class="font-bold text-blue-800 mb-2" data-astro-cid-kyexz7ic>GraphQL Debug Info:</h3> <p class="text-sm text-blue-700" data-astro-cid-kyexz7ic>
Loaded ${studs.length} studs using GraphQL API
${meta && meta.pagination && renderTemplate`<span data-astro-cid-kyexz7ic> • Total: ${meta.pagination.total} • Page: ${meta.pagination.page}</span>`} </p> ${error && renderTemplate`<p class="text-red-600 mt-2" data-astro-cid-kyexz7ic>Error: ${error}</p>`} </div> <main class="mt-16" data-astro-cid-kyexz7ic> <!-- Filter Controls --> <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-kyexz7ic> <button id="filter-all" class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 font-medium" aria-label="Show all studs" data-astro-cid-kyexz7ic>
All Studs
</button> <button id="filter-available" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 font-medium" aria-label="Show available studs only" data-astro-cid-kyexz7ic>
Available Only
</button> <button id="filter-busy" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 font-medium" aria-label="Show busy studs only" data-astro-cid-kyexz7ic>
Busy
</button> </div> <!-- Studs Grid --> <div id="studs-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" data-astro-cid-kyexz7ic> ${studs.map((stud) => renderTemplate`<article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 stud-card"${addAttribute(stud.availability, "data-status")} data-astro-cid-kyexz7ic> <div class="relative photo-hover" data-astro-cid-kyexz7ic> <img${addAttribute(stud.images && stud.images.length > 0 ? getImageUrl(stud.images[0], "medium") : "https://placehold.co/400x300?text=No+Image", "src")}${addAttribute(stud.images && stud.images.length > 0 ? stud.images[0].alternativeText || `${stud.name} stud` : `${stud.name} stud`, "alt")} loading="lazy" class="w-full h-64 object-cover" data-astro-cid-kyexz7ic> <!-- Hover overlay text --> <div class="overlay-text" data-astro-cid-kyexz7ic> <h3 class="text-xl font-bold" data-astro-cid-kyexz7ic>${stud.name}</h3> <p class="text-lg" data-astro-cid-kyexz7ic>${stud.fee ? formatPrice(stud.fee) : "Contact for Price"}</p> </div> <!-- Status Badge --> <div class="absolute top-3 right-3" data-astro-cid-kyexz7ic> <span${addAttribute(`text-white text-xs font-bold px-3 py-1 rounded-full ${stud.availability === "Available" ? "bg-green-500" : stud.availability === "Busy" ? "bg-yellow-500" : "bg-red-500"}`, "class")} data-astro-cid-kyexz7ic> ${stud.availability} </span> </div> <!-- Type Badge --> <div class="absolute top-3 left-3" data-astro-cid-kyexz7ic> <span class="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1" data-astro-cid-kyexz7ic> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3 h-3", "name": "bx:bxs-crown", "data-astro-cid-kyexz7ic": true })}
Stud
</span> </div> </div> <div class="p-6" data-astro-cid-kyexz7ic> <div class="flex items-center justify-between mb-3" data-astro-cid-kyexz7ic> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-kyexz7ic>${stud.name}</h3> <div class="flex items-center gap-2 text-gray-600" data-astro-cid-kyexz7ic> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4 text-blue-600", "name": "bx:bxs-calendar", "data-astro-cid-kyexz7ic": true })} <span class="text-sm" data-astro-cid-kyexz7ic>${stud.age || "Age not specified"}</span> </div> </div> <p class="text-gray-600 text-sm mb-3" data-astro-cid-kyexz7ic>${stud.description || "No description available"}</p> <!-- Bloodlines --> ${stud.bloodlines && renderTemplate`<div class="mb-3" data-astro-cid-kyexz7ic> <h4 class="text-xs font-semibold text-gray-700 mb-1" data-astro-cid-kyexz7ic>BLOODLINES:</h4> <div class="flex flex-wrap gap-1" data-astro-cid-kyexz7ic> ${stud.bloodlines.split(",").map((bloodline) => renderTemplate`<span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full" data-astro-cid-kyexz7ic> ${bloodline.trim()} </span>`)} </div> </div>`} <!-- Specialties --> ${stud.specialties && renderTemplate`<div class="mb-4" data-astro-cid-kyexz7ic> <h4 class="text-xs font-semibold text-gray-700 mb-1" data-astro-cid-kyexz7ic>SPECIALTIES:</h4> <div class="flex flex-wrap gap-1" data-astro-cid-kyexz7ic> ${stud.specialties.split(",").map((specialty) => renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full" data-astro-cid-kyexz7ic> ${specialty.trim()} </span>`)} </div> </div>`} <div class="flex items-center justify-between" data-astro-cid-kyexz7ic> <div data-astro-cid-kyexz7ic> <span class="text-xs text-gray-500" data-astro-cid-kyexz7ic>Stud Fee:</span> <span class="text-blue-600 font-bold text-lg block" data-astro-cid-kyexz7ic> ${stud.fee ? formatPrice(stud.fee) : "Contact for Price"} </span> </div> <a${addAttribute(`/contact?stud=${encodeURIComponent(stud.name)}`, "href")} class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm inline-flex items-center gap-2"${addAttribute(`Contact for breeding with ${stud.name}`, "aria-label")} data-astro-cid-kyexz7ic> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "bx:bxs-phone", "data-astro-cid-kyexz7ic": true })}
Contact for Breeding
</a> </div> </div> </article>`)} </div> <!-- No Results Message --> ${studs.length === 0 && !error && renderTemplate`<div class="text-center py-12" data-astro-cid-kyexz7ic> <h3 class="text-xl font-semibold text-gray-600 mb-4" data-astro-cid-kyexz7ic>No studs found</h3> <p class="text-gray-500" data-astro-cid-kyexz7ic>Please check your API token configuration and try again.</p> </div>`} <!-- Additional Information --> <div class="mt-16 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto" data-astro-cid-kyexz7ic> <div class="text-center mb-8" data-astro-cid-kyexz7ic> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-kyexz7ic>Breeding Information</h3> <p class="text-gray-600" data-astro-cid-kyexz7ic>
All our studs are part of our strategic breeding program focused on rare genetics, 
            exotic colors, and champion bloodlines. Based in Wellington, Florida with UK connections.
</p> </div> <div class="grid md:grid-cols-3 gap-6" data-astro-cid-kyexz7ic> <div class="text-center" data-astro-cid-kyexz7ic> <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3" data-astro-cid-kyexz7ic> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "bx:dna", "data-astro-cid-kyexz7ic": true })} </div> <h4 class="font-semibold text-gray-900 mb-2" data-astro-cid-kyexz7ic>Exotic Genetics</h4> <p class="text-sm text-gray-600" data-astro-cid-kyexz7ic>Rare color combinations and QuadZilla carriers</p> </div> <div class="text-center" data-astro-cid-kyexz7ic> <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3" data-astro-cid-kyexz7ic> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "bx:world", "data-astro-cid-kyexz7ic": true })} </div> <h4 class="font-semibold text-gray-900 mb-2" data-astro-cid-kyexz7ic>International Bloodlines</h4> <p class="text-sm text-gray-600" data-astro-cid-kyexz7ic>Strategic imports between US and UK operations</p> </div> <div class="text-center" data-astro-cid-kyexz7ic> <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3" data-astro-cid-kyexz7ic> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "bx:bxs-crown", "data-astro-cid-kyexz7ic": true })} </div> <h4 class="font-semibold text-gray-900 mb-2" data-astro-cid-kyexz7ic>Where Legends Are Made</h4> <p class="text-sm text-gray-600" data-astro-cid-kyexz7ic>Passion-driven breeding for generational impact</p> </div> </div> </div> </main> ` })} ` })} ${renderScript($$result, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/studs-graphql.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/studs-graphql.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/studs-graphql.astro";
const $$url = "/studs-graphql";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StudsGraphql,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
