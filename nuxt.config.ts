// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  components: [
    {
      path: "~/components/layout-components",
      extensions: [".vue"],
    },
    {
      path: "~/components/form-components",
      extensions: [".vue"],
    },
    {
      path: "~/components/utility-components",
      extensions: [".vue"],
    },
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
});
