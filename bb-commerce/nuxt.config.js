const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "北北商城",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'image/icon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f40' },

  /*
  ** Global CSS
  */
  css: [
    '~/css/iconfont.css',
    
    { src: "swiper/dist/css/swiper.css" }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/css/reset.css',
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: "~/plugins/vee-validate.js", ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
