export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false, // Disable Server Side rendering

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "betawave-io",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Betawave creates world class scalable software solutions for online and land based operations. We are more than just a betting platform. Achieve all your betting goals in Africa with Betawave's multi-featured sportsbook, retail betting platform, enormous virtual sports, and every essential additional service",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [{ src: "@/plugins/vue-glide" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: "smooth",
        });
      }
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-fonts",
  ],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
