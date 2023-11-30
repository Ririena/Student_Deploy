// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 1115,
  },

  modules: [
   '@vite-pwa/nuxt' ,'@vueform/nuxt', 
  ],

  pwa: {
    manifest: {
      name: "StudentBooks",
      short_name: "StudBooks",
      theme_color: '#fff',
      background_color: '#fff',
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/duivion.jpg",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "images/icons/duivsion.jpg",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
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
