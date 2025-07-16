import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C_rjOsy-.mjs';
import { manifest } from './manifest_B_HBk9I4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/latest.astro.mjs');
const _page6 = () => import('./pages/pricing.astro.mjs');
const _page7 = () => import('./pages/puppies.astro.mjs');
const _page8 = () => import('./pages/studs.astro.mjs');
const _page9 = () => import('./pages/studs-graphql.astro.mjs');
const _page10 = () => import('./pages/test-graphql.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/latest.astro", _page5],
    ["src/pages/pricing.astro", _page6],
    ["src/pages/puppies.astro", _page7],
    ["src/pages/studs.astro", _page8],
    ["src/pages/studs-graphql.astro", _page9],
    ["src/pages/test-graphql.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "57adb238-dcea-4fe9-814f-7132d2a3d6d5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
