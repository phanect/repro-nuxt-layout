export default {
  target: "static",
  modern: "client",

  head: {
    title: "repro-nuxt-layout",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" }
    ],
  },

  components: true,
};
