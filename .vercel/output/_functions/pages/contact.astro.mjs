import { a as createComponent, d as renderTemplate, f as renderComponent, b as addAttribute, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/button_RyDqWoGh.mjs';
/* empty css                                   */
import { $ as $$Layout, a as $$Container, b as $$Icon } from '../chunks/Layout_DN_5AVfw.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dud8ohmc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Contact form with production-ready configuration -->", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate data-astro-cid-uwnxe3i2> <input type="hidden" name="access_key"', ' data-astro-cid-uwnxe3i2> <!-- Get your free access key from https://web3forms.com/ --> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-uwnxe3i2> <input type="hidden" name="subject" value="New Contact Form Submission from Main Line Bulldogs" data-astro-cid-uwnxe3i2> <input type="hidden" name="from_name" value="Main Line Bulldogs Website" data-astro-cid-uwnxe3i2> <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="text" placeholder="Full Name" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" name="name" data-astro-cid-uwnxe3i2> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your full name.\n</div> </div> <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="email_address" class="sr-only" data-astro-cid-uwnxe3i2>Email Address</label> <input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your email address.\n</div> <div class="invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide a valid email address.\n</div> </div> <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="tel" placeholder="Phone Number" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" name="phone" data-astro-cid-uwnxe3i2> </div> <div class="mb-5" data-astro-cid-uwnxe3i2> <select name="interest" class="w-full px-4 py-3 border-2 text-gray-800 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2> <option value="" data-astro-cid-uwnxe3i2>Select Interest</option> <option value="puppy" data-astro-cid-uwnxe3i2>Available Puppies</option> <option value="stud" data-astro-cid-uwnxe3i2>Stud Services</option> <option value="breeding" data-astro-cid-uwnxe3i2>Breeding Program</option> <option value="general" data-astro-cid-uwnxe3i2>General Inquiry</option> </select> </div> <div class="mb-3" data-astro-cid-uwnxe3i2> <textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2></textarea> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease enter your message.\n</div> </div> ', ` <div id="result" class="mt-3 text-center" data-astro-cid-uwnxe3i2></div> </form>  <script>
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";
    result.className = "mt-3 text-center text-blue-600";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.className = "mt-3 text-center text-green-600";
          result.innerHTML = "✓ Thank you! Your message has been sent successfully. We'll get back to you soon.";
        } else {
          console.log(response);
          result.className = "mt-3 text-center text-red-600";
          result.innerHTML = json.message || "Something went wrong. Please try again.";
        }
      })
      .catch((error) => {
        console.log(error);
        result.className = "mt-3 text-center text-red-600";
        result.innerHTML = "Network error. Please check your connection and try again.";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 8000);
      });
  });
</script>`])), maybeRenderHead(), addAttribute("YOUR_ACCESS_KEY_HERE", "value"), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "data-astro-cid-uwnxe3i2": true }, { "default": async ($$result2) => renderTemplate`Send Message` }));
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/contactform.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are here to help with all your English Bulldog needs.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Contact` })}` })} ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-gray-800">Contact Maxline Bulldogs</h2> <p class="text-lg leading-relaxed text-slate-500 mt-3">
Ready to welcome a legendary English Bulldog into your family? 
          Contact CEO Moti Maximoff and our team for personalized breeding consultation.
</p> <div class="mt-5"> <div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:map-marker" })} <span>Wellington, Florida & United Kingdom</span> </div> <div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:phone" })} <a href="tel:+15615162560">561-516-2560</a> </div> <div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:envelope" })} <a href="mailto:info@maxlinebulldogs.com">info@maxlinebulldogs.com</a> </div> </div> <div class="mt-6 p-4 bg-blue-50 rounded-lg"> <h3 class="font-semibold text-gray-800 mb-2">CEO: Moti Maximoff</h3> <p class="text-sm text-gray-600">
Leading our breeding program with passion and dedication. 
            "JUST FOR THE LOVE OF IT" - where legends are made through 
            strategic US/UK partnerships and quality breeding program.
</p> </div> <div class="mt-4 p-4 bg-green-50 rounded-lg"> <h3 class="font-semibold text-gray-800 mb-2">Partnership</h3> <p class="text-sm text-gray-600">
In collaboration with HorrorBullz HQ for international breeding excellence.
            Follow us: @maxlinebulldogs & @horrorbullzhq
</p> </div> </div> <div> ${renderComponent($$result3, "Contactform", $$Contactform, {})} </div> </div> ` })} ` })}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/contact.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
