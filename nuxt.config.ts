// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 1115,
  },

  modules: [
   "@vite-pwa/nuxt" ,"@vueform/nuxt", 
  ],

  pwa: {
    manifest: {
      name: "Students_Books",
      short_name: "StudBooks",
      theme_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/logo.png",
          sizes: "144x144",
          type: "image/jpg",
        }, 
        {
          src: "public/images/icons/logo.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "images/icons/duivion.jpg",
          sizes: "96x96",
          type: "image/jpg",
        },
        {
          src: "images/icons/duivion.jpg",
          sizes: "256x256",
          type: "image/jpg",
        },
      ],
    }, devOptions: {
      enabled: true,
    }
  },


  build: {
    transpile: ["vuetify"],
  },

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        // ...
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
