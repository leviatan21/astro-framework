/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, g as renderComponent, h as renderHead } from '../astro_CKiNdRy2.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex-row justify-center link whitespace-nowrap cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"], renderTemplate`
Un contenido por defecto
`)} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "/Users/user/Documents/Sites/Astro/curso-astro-demo/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header mx-auto max-w-5xl py-8 px-4 lg:py-16 lg:px-6"> <div class="mx-auto text-center mb-4 lg:mb-8"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX Launches
</p> </div> <nav class="header-navbar"> <ul class="flex flex-col gap-2 items-center justify-between w-full text-center md:flex-row"> <li> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/" }, { "after": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path> <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path> <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> </svg>`, "default": ($$result2) => renderTemplate` 
Últimos lanzamientos
` })} </li> <li> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/about" }, { "after": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 9h.01"></path> <path d="M11 12h1v4h1"></path> </svg>`, "default": ($$result2) => renderTemplate` 
Sobre el proyecto
` })} </li> <li> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/content" }, { "after": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 7v5l3 3"></path> </svg>`, "default": ($$result2) => renderTemplate` 
Los más viejos
` })} </li> </ul> </nav> </header>`;
}, "/Users/user/Documents/Sites/Astro/curso-astro-demo/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer mx-auto max-w-5xl py-8 px-4 lg:py-16 lg:px-6"> <nav class="footer-navbar"> <ul class="flex flex-col gap-2 w-full text-center md:flex-row"> <li class="link whitespace-nowrap">footer 1</li> <li class="link whitespace-nowrap">footer 2</li> <li class="link whitespace-nowrap">footer 3</li> </ul> </nav> </footer>`;
}, "/Users/user/Documents/Sites/Astro/curso-astro-demo/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    main = "",
    title,
    description = "SpaceX Launches",
    lang = "es-ES"
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main${addAttribute(`main ${main} mx-auto max-w-5xl py-8 px-4 lg:py-16 lg:px-6`, "class")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/user/Documents/Sites/Astro/curso-astro-demo/src/layouts/Layout.astro", void 0);

const getLatestLaunches = async () => {
  const { docs } = await fetch('https://api.spacexdata.com/v5/launches/query', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'query': {'upcoming': false},
      'options': {
        'sort': {'date_unix': 'asc'},
        'limit': 12
      }
    })
  })
  .then( async res =>  await res.json() );

  return docs
};

const getLaunchById = async (id='') => {
  const launch = await fetch(`https://api.spacexdata.com/v5/launches/${id}`, {
    'method': 'GET',
    'headers': {
      'Content-Type': 'application/json'
    }
  })
  .then( async res =>  await res.json() );

  return launch
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const {
    id = ""
  } = Astro2.params;
  console.log("params", id);
  if (!id) {
    return Astro2.redirect("404");
  }
  const data = await getLaunchById(id);
  console.log("data", JSON.stringify(data));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch ${id}`, "main": "launch" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Launch #${id}</h1> ` })}`;
}, "/Users/user/Documents/Sites/Astro/curso-astro-demo/src/pages/launch/[id].astro", void 0);

const $$file = "/Users/user/Documents/Sites/Astro/curso-astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLatestLaunches as g };
