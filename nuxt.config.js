import { apiEndpoint } from './sm.json';
// import path from 'path'
// import fs from 'fs'

// const config = {}

// if (process.env.NODE_ENV === "development") {
//   config.server = {
//     https: {
//       key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
//       cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
//     }
//   }
// }


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-naruto',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // server: config.server,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/prismic',
  ],
  prismic: {
    endpoint: apiEndpoint,
    modern: true
    /* see configuration for more */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["@nuxtjs/prismic", {
    endpoint: apiEndpoint|| ""
  }], ["nuxt-sm"]
  ],
  serverMiddleware: ['~/server-middleware/logger'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@prismicio/vue", "vue-slicezone", "nuxt-sm"],
  },
  target: 'static',
  router: {
    base: '/<repository-name>/'
  }

}
