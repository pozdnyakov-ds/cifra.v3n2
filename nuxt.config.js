export default {
  //target: 'static',

  head: {
    title: "Cifra",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Cifra" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [],
    css: [],
  },

  // imports: {
  //   dirs: ["store"],
  // },

  css: [],

  script: [],

  components: true,

  build: {
    postcss: null,
  },

  buildModules: ["@nuxtjs/moment"],

  modules: [
    "@nuxtjs/toast",
    "@nuxtjs/vuetify",
    "@nuxtjs/universal-storage",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  toast: {
    position: "top-right",
    duration: 5000,
    closeOnClick: false,
  },

  server: {
    port: 3000,
  },
};
