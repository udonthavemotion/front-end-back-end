import { a as createComponent, m as maybeRenderHead, f as renderComponent, d as renderTemplate, c as createAstro, b as addAttribute } from '../chunks/astro/server_Ne5A_v-A.mjs';
import 'kleur/colors';
import { b as $$Icon, c as $$Link, $ as $$Layout, a as $$Container } from '../chunks/Layout_DN_5AVfw.mjs';
import { b as getImageUrl, d as getHomepageContent, c as getStuds, f as formatPrice } from '../chunks/strapi_DWb3GrfW.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-brand-navy to-brand-navy p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-md flex flex-col items-center text-center relative overflow-hidden shadow-strong border border-brand-blue"> <!-- Background Pattern --> <div class="absolute inset-0 opacity-10"> <div class="absolute top-10 left-10 w-20 h-20 border-2 border-brand-blue rounded-full"></div> <div class="absolute bottom-10 right-10 w-32 h-32 border-2 border-brand-orange rounded-full"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-brand-blue rounded-full"></div> </div> <div class="relative z-10"> <!-- Icon --> <div class="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 shadow-medium"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 h-8 text-white", "name": "bx:bxs-dog" })} </div> <!-- Headline --> <h2 class="text-white font-heading text-4xl md:text-6xl font-bold mb-4">
Find Your Perfect
<span class="text-brand-blue">Bulldog</span> </h2> <!-- Subheadline --> <p class="text-neutral-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
Connect with premier English Bulldog breeders. Our expert team is ready to help you find the perfect companion or breeding partner from our quality breeding program.
</p> <!-- Features --> <div class="grid sm:grid-cols-3 gap-6 mt-8 mb-8"> <div class="text-center"> <div class="w-12 h-12 bg-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-6 h-6 text-brand-blue", "name": "bx:bxs-phone" })} </div> <p class="text-neutral-300 text-sm">Expert Consultation</p> </div> <div class="text-center"> <div class="w-12 h-12 bg-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-6 h-6 text-brand-blue", "name": "bx:bxs-heart" })} </div> <p class="text-neutral-300 text-sm">Perfect Match</p> </div> <div class="text-center"> <div class="w-12 h-12 bg-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-6 h-6 text-brand-blue", "name": "bx:bxs-shield" })} </div> <p class="text-neutral-300 text-sm">Health Guarantee</p> </div> </div> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center"> ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "style": "primary", "class": "flex gap-2 items-center justify-center" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5", "name": "bx:bxs-envelope" })}
Get in Touch
` })} ${renderComponent($$result, "Link", $$Link, { "href": "/puppies", "style": "outline", "class": "flex gap-2 items-center justify-center" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5", "name": "bx:bxs-heart" })}
View Available Puppies
` })} </div> <!-- Contact Info --> <div class="mt-8 pt-6 border-t border-brand-blue"> <div class="flex flex-col sm:flex-row gap-4 items-center justify-center text-neutral-300 text-sm"> <div class="flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 text-brand-blue", "name": "bx:bxs-phone" })} <span>561-516-2560</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 text-brand-blue", "name": "bx:bxs-envelope" })} <span>info@mainlinebulldogs.com</span> </div> </div> </div> </div> </div>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/cta.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Strategic Imports",
      description: "We bring the world's most exceptional English Bulldogs to the UK, carefully selecting quality breeding stock from renowned breeders globally to elevate our breeding program.",
      icon: "bx:bxs-plane"
    },
    {
      title: "Exotic Color Genetics",
      description: "Specializing in rare and exotic color combinations, we produce some of the most unique and stunning English Bulldogs with extraordinary genetic diversity.",
      icon: "bx:bxs-palette"
    },
    {
      title: "Cultural Influence",
      description: "HorrorBullz HQ is shifting the UK bulldog scene, setting new standards for quality, ethics, and innovation in English Bulldog breeding practices.",
      icon: "bx:bxs-star"
    },
    {
      title: "Thematic Naming",
      description: "Our dogs carry names inspired by movies, music, and pop culture, creating memorable identities that reflect their unique personalities and our creative approach.",
      icon: "bx:bxs-movie"
    },
    {
      title: "Health Excellence",
      description: "Every breeding dog undergoes comprehensive health screening including heart, spine, and respiratory testing to ensure the healthiest puppies possible.",
      icon: "bx:bxs-shield"
    },
    {
      title: "Premium Care",
      description: "From whelping to weaning, our puppies receive exceptional nutrition, veterinary care, and socialization in our state-of-the-art UK facilities.",
      icon: "bx:bxs-heart"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-24 px-4"> <div class="text-center mb-16"> <h2 class="font-heading text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
Why Choose
<span class="text-brand-blue">Main Line Bulldogs</span> </h2> <!-- Section divider --> <div class="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full mx-auto mb-6"></div> <p class="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
Experience the difference of working with premium English Bulldog breeders. 
      We're revolutionizing the breeding scene with passion, dedication, and uncompromising quality.
</p> </div> <!-- Features Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`<div class="card hover:shadow-strong group"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-orange rounded-lg flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-200"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-6 h-6 text-white", "name": feature.icon })} </div> <div> <h3 class="font-heading font-semibold text-xl text-brand-navy mb-2"> ${feature.title} </h3> <p class="text-secondary leading-relaxed"> ${feature.description} </p> </div> </div> </div>`)} </div> <!-- CTA Section --> <div class="mt-16 text-center"> <div class="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 rounded-2xl p-8 border border-neutral-200"> <h3 class="font-heading text-2xl font-bold text-brand-navy mb-4">
Ready to Find Your Perfect Companion?
</h3> <p class="text-secondary mb-6 max-w-2xl mx-auto">
Browse our current selection of champion studs and available puppies, each one representing the pinnacle of English Bulldog breeding excellence.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/studs" class="cta-primary"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-5 h-5 mr-2", "name": "bx:bxs-crown" })}
View Champion Studs
</a> <a href="/puppies" class="cta-secondary"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-5 h-5 mr-2", "name": "bx:bxs-heart" })}
See Available Puppies
</a> </div> </div> </div> </div>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/features.astro", void 0);

const $$Astro = createAstro("https://maxlinexhorror-pxisu6g03-logan-folses-projects.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { homepageContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="relative overflow-hidden min-h-screen bg-primary" data-astro-cid-zi4ldr3x> <!-- Background decoration --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-zi4ldr3x> <div class="absolute top-20 left-10 w-32 h-32 accent-decoration float-animation" data-astro-cid-zi4ldr3x></div> <div class="absolute bottom-20 right-10 w-24 h-24 accent-decoration float-animation-delayed" data-astro-cid-zi4ldr3x></div> </div> <div class="relative z-10 grid lg:grid-cols-2 gap-12 place-items-center pt-20 pb-12 md:pt-24 md:pb-28 px-6 min-h-screen" data-astro-cid-zi4ldr3x> <!-- Hero Video - Using CMS content --> <div class="py-6 md:order-2" data-astro-cid-zi4ldr3x> <div class="relative float-animation" data-astro-cid-zi4ldr3x> <div class="video-container hover-lift" data-astro-cid-zi4ldr3x> <div class="w-full h-[450px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-xl relative" data-astro-cid-zi4ldr3x> <video class="w-full h-full object-cover rounded-xl" autoplay muted loop playsinline${addAttribute(homepageContent?.hero_poster_image ? getImageUrl(homepageContent.hero_poster_image) : "/hero-video-poster/horrorbullzhq_1750528212_3660018381867734658_54079664260.jpg", "poster")} data-astro-cid-zi4ldr3x> <source${addAttribute(homepageContent?.hero_video ? getImageUrl(homepageContent.hero_video) : "/hero-video/horrorbullzhq_1745182624_3615176192438272992_54079664260.mp4", "src")} type="video/mp4" data-astro-cid-zi4ldr3x> <!-- Fallback for unsupported browsers --> <div class="w-full h-full flex items-center justify-center bg-neutral-100" data-astro-cid-zi4ldr3x> <div class="text-center" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-12 h-12 text-brand-blue mb-4", "name": "bx:bxs-dog", "data-astro-cid-zi4ldr3x": true })} <p class="text-lg font-semibold text-brand-navy" data-astro-cid-zi4ldr3x>Main Line Bulldogs</p> <p class="text-sm text-muted" data-astro-cid-zi4ldr3x>Your browser doesn't support video</p> </div> </div> </video> </div> </div> <!-- Decorative elements --> <div class="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue/10 rounded-full float-animation-delayed" data-astro-cid-zi4ldr3x></div> <div class="absolute -bottom-8 -left-8 w-36 h-36 bg-brand-orange/10 rounded-full float-animation" data-astro-cid-zi4ldr3x></div> </div> </div> <!-- Hero Content - Using CMS content --> <div class="text-center lg:text-left float-animation-delayed" data-astro-cid-zi4ldr3x> <!-- Partnership Badge --> <div class="inline-flex items-center gap-2 content-card mb-6 hover-lift" data-astro-cid-zi4ldr3x> <div class="w-2 h-2 bg-brand-orange rounded-full" data-astro-cid-zi4ldr3x></div> <span class="text-brand-navy font-medium text-sm" data-astro-cid-zi4ldr3x>Wellington, Florida & UK Operations</span> </div> <!-- Main Headline - Using CMS content --> <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-navy leading-tight mb-6" data-astro-cid-zi4ldr3x> <span class="text-brand-navy" data-astro-cid-zi4ldr3x> ${homepageContent?.hero_headline || "Main Line Bulldogs"} </span> <br data-astro-cid-zi4ldr3x> <span class="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent" data-astro-cid-zi4ldr3x>
Where Legends Are Made
</span> </h1> <!-- Section divider --> <div class="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full mx-auto lg:mx-0 mb-6" data-astro-cid-zi4ldr3x></div> <!-- Subheadline - Using CMS content --> <p class="text-lg md:text-xl text-secondary max-w-2xl mb-8 leading-relaxed" data-astro-cid-zi4ldr3x> ${homepageContent?.hero_subheadline || "Pioneering premium English Bulldog breeding through strategic imports, exotic genetics, and cultural influence."} <br data-astro-cid-zi4ldr3x> <span class="text-brand-orange font-bold italic mt-2 block" data-astro-cid-zi4ldr3x>JUST FOR THE LOVE OF IT</span> <br data-astro-cid-zi4ldr3x> <span class="text-sm text-muted" data-astro-cid-zi4ldr3x>In partnership with HorrorBullz HQ</span> </p> <!-- Stats with light theme cards --> <div class="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start" data-astro-cid-zi4ldr3x> <div class="text-center stats-card" data-astro-cid-zi4ldr3x> <div class="text-2xl font-bold text-brand-orange" data-astro-cid-zi4ldr3x>15+</div> <div class="text-sm text-muted" data-astro-cid-zi4ldr3x>Import Champions</div> </div> <div class="text-center stats-card" data-astro-cid-zi4ldr3x> <div class="text-2xl font-bold text-brand-orange" data-astro-cid-zi4ldr3x>FL</div> <div class="text-sm text-muted" data-astro-cid-zi4ldr3x>Based & Bred</div> </div> <div class="text-center stats-card" data-astro-cid-zi4ldr3x> <div class="text-2xl font-bold text-brand-orange" data-astro-cid-zi4ldr3x>100%</div> <div class="text-sm text-muted" data-astro-cid-zi4ldr3x>Exotic Genetics</div> </div> </div> <!-- CTA Buttons - Enhanced for light theme --> <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "Link", $$Link, { "href": "/studs", "style": "primary", "class": "cta-primary flex gap-2 items-center justify-center", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5", "name": "bx:bxs-crown", "data-astro-cid-zi4ldr3x": true })}
View Champion Studs
` })} ${renderComponent($$result, "Link", $$Link, { "href": "/puppies", "style": "outline", "class": "cta-secondary flex gap-2 items-center justify-center", "data-astro-cid-zi4ldr3x": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5", "name": "bx:bxs-heart", "data-astro-cid-zi4ldr3x": true })}
See Available Puppies
` })} </div> <!-- Trust indicators --> <div class="mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-sm text-muted" data-astro-cid-zi4ldr3x> <div class="flex items-center gap-1" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 text-brand-blue", "name": "bx:bxs-shield", "data-astro-cid-zi4ldr3x": true })} <span data-astro-cid-zi4ldr3x>Health Guaranteed</span> </div> <div class="flex items-center gap-1" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 text-brand-blue", "name": "bx:bxs-award", "data-astro-cid-zi4ldr3x": true })} <span data-astro-cid-zi4ldr3x>KC Registered</span> </div> <div class="flex items-center gap-1" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 text-brand-blue", "name": "bx:bxs-truck", "data-astro-cid-zi4ldr3x": true })} <span data-astro-cid-zi4ldr3x>International Shipping</span> </div> </div> </div> </div> </main>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/hero.astro", void 0);

const $$ImageShowcase = createComponent(($$result, $$props, $$slots) => {
  const images = [
    {
      src: "https://placehold.co/400x300?text=Champion+Stud+1",
      alt: "Champion English Bulldog Stud 1",
      title: "Champion Bloodlines",
      description: "Our carefully selected champion studs represent the finest English Bulldog genetics."
    },
    {
      src: "https://placehold.co/400x300?text=Happy+Puppy+1",
      alt: "Happy English Bulldog Puppy 1",
      title: "Healthy Puppies",
      description: "Each puppy is raised with love and receives comprehensive health care from birth."
    },
    {
      src: "https://placehold.co/400x300?text=Breeding+Pair",
      alt: "English Bulldog Breeding Pair",
      title: "Expert Breeding",
      description: "Strategic pairings ensure optimal health, temperament, and conformation in every litter."
    },
    {
      src: "https://placehold.co/400x300?text=Family+Photo",
      alt: "English Bulldog Family Photo",
      title: "Family Raised",
      description: "Our bulldogs are part of our family, ensuring excellent socialization and temperament."
    },
    {
      src: "https://placehold.co/400x300?text=Show+Winner",
      alt: "English Bulldog Show Winner",
      title: "Show Quality",
      description: "Many of our bulldogs have achieved championship status in prestigious dog shows."
    },
    {
      src: "https://placehold.co/400x300?text=Puppy+Playdate",
      alt: "English Bulldog Puppy Playdate",
      title: "Socialization",
      description: "Early socialization ensures our puppies grow into well-adjusted family companions."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-secondary"> <div class="max-w-7xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="font-heading text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
Life at
<span class="text-brand-blue">Main Line Bulldogs</span> </h2> <!-- Section divider --> <div class="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full mx-auto mb-6"></div> <p class="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
Step into our world where champion English Bulldogs live, play, and thrive. 
        Each photo tells a story of dedication, love, and the pursuit of breeding excellence.
</p> </div> <!-- Image Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${images.map((image, index) => renderTemplate`<div class="card hover:shadow-strong group"> <div class="relative overflow-hidden rounded-lg mb-4"> <!-- TODO: Replace these placeholders with your actual image paths (e.g., from public/ or Strapi media URL). This is the spot to edit for custom images later. --> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} loading="lazy" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </div> <div class="space-y-2"> <h3 class="font-heading font-semibold text-xl text-brand-navy"> ${image.title} </h3> <p class="text-secondary leading-relaxed text-sm"> ${image.description} </p> </div> </div>`)} </div> <!-- CTA Section --> <div class="mt-16 text-center"> <div class="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 rounded-2xl p-8 border border-neutral-200"> <h3 class="font-heading text-2xl font-bold text-brand-navy mb-4">
Ready to Meet Your Perfect Companion?
</h3> <p class="text-secondary mb-6 max-w-2xl mx-auto">
Each of our bulldogs is raised with love, care, and attention to detail. 
          Contact us to learn more about available puppies and champion studs.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="cta-primary"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-5 h-5 mr-2", "name": "bx:bxs-envelope" })}
Contact Us Today
</a> <a href="/puppies" class="cta-secondary"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-5 h-5 mr-2", "name": "bx:bxs-heart" })}
View Available Puppies
</a> </div> </div> </div> </div> </section>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/imageShowcase.astro", void 0);

const $$Logos = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    {
      name: "Wellington, Florida",
      description: "Based in Wellington, Florida",
      icon: "bx:bxs-map"
    },
    {
      name: "UK Operations",
      description: "International breeding program",
      icon: "bx:world"
    },
    {
      name: "HorrorBullz HQ",
      description: "Partnership with HorrorBullz HQ",
      icon: "bx:bxs-crown"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-24 px-4"> <div class="text-center mb-16"> <h2 class="font-heading text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
Our <span class="text-brand-blue">Operations</span> </h2> <p class="text-lg text-secondary max-w-2xl mx-auto">
Strategic breeding operations spanning two continents, bringing you the finest English Bulldogs.
</p> </div> <div class="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"> ${partners.map((partner) => renderTemplate`<div class="text-center p-6 bg-white rounded-lg shadow-medium hover:shadow-strong transition-all duration-300"> <div class="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 h-8 text-white", "name": partner.icon })} </div> <h3 class="font-heading font-semibold text-xl text-brand-navy mb-2"> ${partner.name} </h3> <p class="text-secondary text-sm"> ${partner.description} </p> </div>`)} </div> </div>`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/components/logos.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let homepageContent = null;
  let featuredStuds = [];
  try {
    const homepageResponse = await getHomepageContent();
    homepageContent = homepageResponse.data;
    const studsResponse = await getStuds({
      populate: "images",
      filters: { availability: "Available" },
      sort: "createdAt:desc",
      pageSize: 3
    });
    featuredStuds = studsResponse.data;
  } catch (err) {
    console.error("Error fetching homepage content:", err);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "homepageContent": homepageContent })} ${renderComponent($$result3, "Features", $$Features, {})}  ${maybeRenderHead()}<section class="py-16 bg-secondary"> <div class="max-w-7xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="font-heading text-4xl lg:text-5xl font-bold text-brand-navy mb-4"> ${homepageContent?.featured_section_title || "Featured English Bulldogs"} </h2> <div class="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full mx-auto mb-6"></div> <p class="text-lg text-secondary max-w-3xl mx-auto leading-relaxed"> ${homepageContent?.featured_section_description || "Discover our exceptional English Bulldogs featuring rare color genetics and quality breeding program. Each dog represents our commitment to excellence and innovation in breeding."} </p> </div> ${featuredStuds.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${featuredStuds.map((stud) => renderTemplate`<div class="card hover:shadow-strong group"> <div class="relative overflow-hidden rounded-lg mb-4"> <img${addAttribute(stud.images && stud.images.length > 0 ? getImageUrl(stud.images[0], "medium") : "https://placehold.co/400x300?text=Photo+Coming+Soon", "src")}${addAttribute(stud.images && stud.images.length > 0 && stud.images[0].alternativeText ? stud.images[0].alternativeText : `${stud.name} stud`, "alt")} loading="lazy" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="absolute top-3 right-3"> <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full"> ${stud.availability} </span> </div> <div class="absolute top-3 left-3"> <span class="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3 h-3", "name": "bx:bxs-crown" })}
Stud
</span> </div> </div> <div class="space-y-3"> <div class="flex items-center justify-between"> <h3 class="font-heading font-semibold text-xl text-brand-navy"> ${stud.name} </h3> <span class="text-blue-600 font-bold text-lg"> ${formatPrice(stud.fee)} </span> </div> <p class="text-secondary leading-relaxed text-sm"> ${stud.description} </p> <div class="flex items-center gap-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4 text-blue-600", "name": "bx:bxs-calendar" })} <span class="text-sm">${stud.age}</span> </div> <a${addAttribute(`/contact?stud=${encodeURIComponent(stud.name)}`, "href")} class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "bx:bxs-phone" })}
Contact for Breeding
</a> </div> </div>`)} </div>` : renderTemplate`<div class="text-center py-8"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-16 h-16 text-gray-400 mx-auto mb-4", "name": "bx:bxs-dog" })} <p class="text-gray-600">No featured studs available at the moment.</p> </div>`} <div class="mt-12 text-center"> <a href="/studs" class="cta-primary"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5 mr-2", "name": "bx:bxs-crown" })}
View All Champion Studs
</a> </div> </div> </section> ${renderComponent($$result3, "ImageShowcase", $$ImageShowcase, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` })}`;
}, "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/index.astro", void 0);

const $$file = "/Users/godspeed/Downloads/astro-f8cc6e6206f26634324f07daee84a5ad2931c4d9/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
