export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SimpleNotes',
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Mahmoud Mosaad'},
      {
        hid: 'content-type',
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=UTF-8'
      }
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
    { src: '~/plugins/index', mode: 'client', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://ssimplenotess.herokuapp.com/api/graphql',
      }
    }
  },

  auth: {
    strategies: {
      local: {
//      scheme: "refresh",
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token",
//        data: "refresh_token",
//      },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
//        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/api/auth/user", method: "get" }
        }
      }
    }
  },

  serverMiddleware: [
    '~/api/index.js',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // CORS
    // baseURL: 'http://example.com',
    // browserBaseURL: 'http://localhost:3000',
    proxy: true
  },

  proxy: {
    '/api': 'https://ssimplenotess.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
