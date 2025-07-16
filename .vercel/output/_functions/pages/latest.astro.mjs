import { a as createComponent, f as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
import { g as getPuppies, a as getStuds, f as formatDate, b as getImageUrl } from '../chunks/graphql_DMiYXh2W.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Latest = createComponent(async ($$result, $$props, $$slots) => {
  let latestPuppies = [];
  let latestStuds = [];
  let error = null;
  try {
    const [puppiesResult, studsResult] = await Promise.all([
      getPuppies(),
      getStuds()
    ]);
    latestPuppies = puppiesResult.data.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5);
    latestStuds = studsResult.data.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5);
    console.log("GraphQL latest fetch successful:", {
      puppies: latestPuppies.length,
      studs: latestStuds.length
    });
  } catch (err) {
    console.error("Error fetching latest data with GraphQL:", err);
    error = "Failed to load latest updates. Please try again later.";
    latestPuppies = [
      {
        documentId: "1",
        name: "Max",
        updatedAt: "2024-01-15T10:30:00.000Z",
        images: []
      },
      {
        documentId: "2",
        name: "Bella",
        updatedAt: "2024-01-14T15:45:00.000Z",
        images: []
      },
      {
        documentId: "3",
        name: "Scarlett",
        updatedAt: "2024-01-13T12:20:00.000Z",
        images: []
      }
    ];
    latestStuds = [
      {
        documentId: "1",
        name: "Joker",
        updatedAt: "2024-01-15T09:20:00.000Z",
        images: []
      },
      {
        documentId: "2",
        name: "Hannibal",
        updatedAt: "2024-01-14T14:10:00.000Z",
        images: []
      },
      {
        documentId: "3",
        name: "King",
        updatedAt: "2024-01-13T11:30:00.000Z",
        images: []
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Latest Updates", "data-astro-cid-qvotnihv": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-qvotnihv": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, { "data-astro-cid-qvotnihv": true }, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`
Recently updated puppies and studs in our breeding program
` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Latest Updates` })}` })}  ${error && renderTemplate`${maybeRenderHead()}<div class="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4" data-astro-cid-qvotnihv> <p class="text-yellow-800" data-astro-cid-qvotnihv> <strong data-astro-cid-qvotnihv>Note:</strong> ${error} Showing sample data for demonstration.
</p> </div>`}<div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8" data-astro-cid-qvotnihv> <!-- Latest Puppies --> <div class="bg-white rounded-2xl shadow-lg p-6" data-astro-cid-qvotnihv> <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" data-astro-cid-qvotnihv> <span class="text-blue-600" data-astro-cid-qvotnihv>🐕</span>
Latest Puppies
</h2> ${latestPuppies.length > 0 ? renderTemplate`<div class="space-y-4" data-astro-cid-qvotnihv> ${latestPuppies.map((puppy) => renderTemplate`<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" data-astro-cid-qvotnihv> <div class="flex-shrink-0" data-astro-cid-qvotnihv> <img${addAttribute(puppy.images && puppy.images.length > 0 ? getImageUrl(puppy.images[0], "thumbnail") : "https://placehold.co/80x80?text=Puppy", "src")}${addAttribute(puppy.images && puppy.images.length > 0 ? puppy.images[0].alternativeText || `${puppy.name} puppy` : `${puppy.name} puppy`, "alt")} class="w-16 h-16 object-cover rounded-lg" loading="lazy" data-astro-cid-qvotnihv> </div> <div class="flex-1 min-w-0" data-astro-cid-qvotnihv> <h3 class="text-lg font-semibold text-gray-900 truncate" data-astro-cid-qvotnihv> ${puppy.name} </h3> <p class="text-sm text-gray-500" data-astro-cid-qvotnihv>
Updated: ${formatDate(puppy.updatedAt)} </p> </div> </div>`)} </div>` : renderTemplate`<p class="text-gray-500 text-center py-8" data-astro-cid-qvotnihv>No puppies found</p>`} </div> <!-- Latest Studs --> <div class="bg-white rounded-2xl shadow-lg p-6" data-astro-cid-qvotnihv> <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" data-astro-cid-qvotnihv> <span class="text-blue-600" data-astro-cid-qvotnihv>👑</span>
Latest Studs
</h2> ${latestStuds.length > 0 ? renderTemplate`<div class="space-y-4" data-astro-cid-qvotnihv> ${latestStuds.map((stud) => renderTemplate`<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" data-astro-cid-qvotnihv> <div class="flex-shrink-0" data-astro-cid-qvotnihv> <img${addAttribute(stud.images && stud.images.length > 0 ? getImageUrl(stud.images[0], "thumbnail") : "https://placehold.co/80x80?text=Stud", "src")}${addAttribute(stud.images && stud.images.length > 0 ? stud.images[0].alternativeText || `${stud.name} stud` : `${stud.name} stud`, "alt")} class="w-16 h-16 object-cover rounded-lg" loading="lazy" data-astro-cid-qvotnihv> </div> <div class="flex-1 min-w-0" data-astro-cid-qvotnihv> <h3 class="text-lg font-semibold text-gray-900 truncate" data-astro-cid-qvotnihv> ${stud.name} </h3> <p class="text-sm text-gray-500" data-astro-cid-qvotnihv>
Updated: ${formatDate(stud.updatedAt)} </p> </div> </div>`)} </div>` : renderTemplate`<p class="text-gray-500 text-center py-8" data-astro-cid-qvotnihv>No studs found</p>`} </div> </div>  <div class="mt-12 bg-blue-50 rounded-2xl p-6" data-astro-cid-qvotnihv> <h3 class="text-lg font-semibold text-blue-900 mb-4" data-astro-cid-qvotnihv>Summary</h3> <div class="grid grid-cols-2 gap-4 text-center" data-astro-cid-qvotnihv> <div data-astro-cid-qvotnihv> <p class="text-2xl font-bold text-blue-600" data-astro-cid-qvotnihv>${latestPuppies.length}</p> <p class="text-sm text-blue-700" data-astro-cid-qvotnihv>Latest Puppies</p> </div> <div data-astro-cid-qvotnihv> <p class="text-2xl font-bold text-blue-600" data-astro-cid-qvotnihv>${latestStuds.length}</p> <p class="text-sm text-blue-700" data-astro-cid-qvotnihv>Latest Studs</p> </div> </div> </div> ` })} ` })} `;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/latest.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/latest.astro";
const $$url = "/latest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Latest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
