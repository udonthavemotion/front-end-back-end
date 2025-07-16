import { a as createComponent, f as renderComponent, g as renderScript, d as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
import { g as getPuppies, f as formatPrice, a as formatDate, b as getImageUrl } from '../chunks/strapi_DWb3GrfW.mjs';
export { renderers } from '../renderers.mjs';

const $$Puppies = createComponent(async ($$result, $$props, $$slots) => {
  let puppies = [];
  let error = null;
  try {
    const response = await getPuppies({
      populate: "images",
      sort: "createdAt:desc",
      pageSize: 50
      // Adjust as needed
    });
    puppies = response.data;
  } catch (err) {
    console.error("Error fetching puppies:", err);
    error = "Failed to load puppies. Please try again later.";
    puppies = [
      {
        id: 1,
        name: "Scarlett",
        status: "Available",
        date_of_birth: "2023-10-01",
        price: 5500,
        gender: "Female",
        color: "Red",
        weight: "15 lbs",
        description: "Beautiful red female puppy",
        parents: "Joker x Harley",
        healthrecords: "Up to date on all vaccinations",
        images: [],
        createdAt: "2023-10-01T00:00:00.000Z",
        updatedAt: "2023-10-01T00:00:00.000Z",
        publishedAt: "2023-10-01T00:00:00.000Z"
      },
      {
        id: 2,
        name: "Max",
        status: "Available",
        date_of_birth: "2023-09-15",
        price: 6e3,
        gender: "Male",
        color: "Blue",
        weight: "18 lbs",
        description: "Stunning blue male puppy",
        parents: "Hannibal x Luna",
        healthrecords: "Up to date on all vaccinations",
        images: [],
        createdAt: "2023-09-15T00:00:00.000Z",
        updatedAt: "2023-09-15T00:00:00.000Z",
        publishedAt: "2023-09-15T00:00:00.000Z"
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Available Puppies" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`
Browse our healthy English Bulldog puppies ready for adoption
` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Available Puppies` })}` })} ${maybeRenderHead()}<main class="mt-16"> <!-- Error Message --> ${error && renderTemplate`<div class="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4"> <p class="text-yellow-800"> <strong>Note:</strong> ${error} Showing sample data for demonstration.
</p> </div>`} <!-- Filter Controls --> <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-center"> <button id="filter-all" class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 font-medium" aria-label="Show all puppies">
All Puppies
</button> <button id="filter-available" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 font-medium" aria-label="Show available puppies only">
Available Only
</button> <button id="filter-reserved" class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 font-medium" aria-label="Show reserved puppies only">
Reserved Only
</button> </div> <!-- Puppies Grid --> <div id="puppies-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"> ${puppies.map((puppy) => renderTemplate`<article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 puppy-card"${addAttribute(puppy.status, "data-status")}> <div class="photo-hover relative"> <img${addAttribute(puppy.images && puppy.images.length > 0 ? getImageUrl(puppy.images[0], "medium") : "https://placehold.co/400x300?text=No+Image", "src")}${addAttribute(puppy.images && puppy.images.length > 0 && puppy.images[0].alternativeText ? puppy.images[0].alternativeText : `${puppy.name} puppy`, "alt")} loading="lazy" class="w-full h-48 object-cover"> <!-- Hover overlay text --> <div class="overlay-text"> <h3 class="text-xl font-bold">${puppy.name}</h3> <p class="text-lg">${formatPrice(puppy.price)}</p> </div> </div> <div class="p-6"> <div class="flex items-center justify-between mb-3"> <h3 class="text-xl font-bold text-gray-900">${puppy.name}</h3> <span${addAttribute(`px-3 py-1 rounded-full text-sm font-medium ${puppy.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, "class")}> ${puppy.status} </span> </div> <div class="space-y-2 mb-4"> <p class="text-gray-600"> <strong>Date of Birth:</strong> ${formatDate(puppy.date_of_birth)} </p> <p class="text-gray-600"> <strong>Price:</strong> ${formatPrice(puppy.price)} </p> <p class="text-gray-600"> <strong>Gender:</strong> ${puppy.gender} </p> <p class="text-gray-600"> <strong>Color:</strong> ${puppy.color} </p> </div> <a${addAttribute(`/contact?puppy=${encodeURIComponent(puppy.name)}`, "href")} class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 font-medium text-center block"${addAttribute(`Inquire about ${puppy.name}`, "aria-label")}>
Inquire Now
</a> </div> </article>`)} </div> </main> ` })} ` })} ${renderScript($$result, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/puppies.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/puppies.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/puppies.astro";
const $$url = "/puppies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Puppies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
