import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DN_5AVfw.mjs';
import { i as introspectSchema, a as getStuds, d as getAvailableStuds } from '../chunks/graphql_DMiYXh2W.mjs';
export { renderers } from '../renderers.mjs';

const $$TestGraphql = createComponent(async ($$result, $$props, $$slots) => {
  let schemaData = null;
  let studsData = null;
  let availableStudsData = null;
  let errors = [];
  try {
    console.log("Attempting schema introspection...");
    schemaData = await introspectSchema();
    console.log("Schema introspection successful");
  } catch (error) {
    console.error("Schema introspection failed:", error);
    errors.push(`Schema introspection failed: ${error.message}`);
  }
  try {
    console.log("Attempting to fetch all studs...");
    studsData = await getStuds();
    console.log("Studs fetch successful:", studsData);
  } catch (error) {
    console.error("Studs fetch failed:", error);
    errors.push(`Studs fetch failed: ${error.message}`);
  }
  try {
    console.log("Attempting to fetch available studs...");
    availableStudsData = await getAvailableStuds();
    console.log("Available studs fetch successful:", availableStudsData);
  } catch (error) {
    console.error("Available studs fetch failed:", error);
    errors.push(`Available studs fetch failed: ${error.message}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "GraphQL Test" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-8"> <h1 class="text-3xl font-bold mb-8">GraphQL Test Page</h1> <!-- Errors Section --> ${errors.length > 0 && renderTemplate`<div class="mb-8 p-4 bg-red-100 border border-red-400 rounded"> <h2 class="text-xl font-bold text-red-800 mb-4">Errors:</h2> <ul class="list-disc list-inside"> ${errors.map((error) => renderTemplate`<li class="text-red-700">${error}</li>`)} </ul> </div>`} <!-- Schema Introspection Section --> <div class="mb-8"> <h2 class="text-2xl font-bold mb-4">Schema Introspection</h2> ${schemaData ? renderTemplate`<div class="bg-gray-100 p-4 rounded"> <h3 class="text-lg font-semibold mb-2">Available Queries:</h3> <ul class="list-disc list-inside"> ${schemaData.__schema.queryType.fields.map((field) => renderTemplate`<li class="mb-1"> <strong>${field.name}</strong>: ${field.type?.name || "Complex Type"} </li>`)} </ul> </div>` : renderTemplate`<p class="text-red-600">Schema introspection failed. Check console for details.</p>`} </div> <!-- All Studs Section --> <div class="mb-8"> <h2 class="text-2xl font-bold mb-4">All Studs</h2> ${studsData ? renderTemplate`<div class="bg-gray-100 p-4 rounded"> <p class="mb-2">Total studs: ${studsData.data.length}</p> <div class="grid gap-4"> ${studsData.data.map((stud) => renderTemplate`<div class="bg-white p-4 rounded shadow"> <h3 class="text-lg font-semibold">${stud.name}</h3> <p>Status: ${stud.availability}</p> <p>Age: ${stud.age || "Not specified"}</p> <p>Fee: $${stud.fee || "Not specified"}</p> <p>Images: ${stud.images?.length || 0}</p> </div>`)} </div> </div>` : renderTemplate`<p class="text-red-600">Failed to fetch studs. Check console for details.</p>`} </div> <!-- Available Studs Section --> <div class="mb-8"> <h2 class="text-2xl font-bold mb-4">Available Studs</h2> ${availableStudsData ? renderTemplate`<div class="bg-gray-100 p-4 rounded"> <p class="mb-2">Available studs: ${availableStudsData.data.length}</p> <div class="grid gap-4"> ${availableStudsData.data.map((stud) => renderTemplate`<div class="bg-white p-4 rounded shadow"> <h3 class="text-lg font-semibold">${stud.name}</h3> <p>Status: ${stud.availability}</p> <p>Age: ${stud.age || "Not specified"}</p> <p>Fee: $${stud.fee || "Not specified"}</p> <p>Images: ${stud.images?.length || 0}</p> </div>`)} </div> </div>` : renderTemplate`<p class="text-red-600">Failed to fetch available studs. Check console for details.</p>`} </div> <!-- Debug Information --> <div class="mb-8"> <h2 class="text-2xl font-bold mb-4">Debug Information</h2> <div class="bg-gray-100 p-4 rounded"> <p><strong>GraphQL Endpoint:</strong> ${"http://localhost:1337"}/graphql</p> <p><strong>Token Present:</strong> ${"Yes" }</p> <p><strong>Environment:</strong> ${"production"}</p> </div> </div> </div> ` })}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/test-graphql.astro", void 0);
const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/test-graphql.astro";
const $$url = "/test-graphql";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestGraphql,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
