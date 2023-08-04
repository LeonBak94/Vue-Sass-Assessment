import pkg from './package.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: 'dist'
  },

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    app_version: pkg.version,
    base_url: process.env.base_url || ''
  },

  env: {
    app_version: pkg.version,
    base_url: process.env.base_url || ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.title || 'Teamwork Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: process.env.color || '#000000' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'remixicon/fonts/remixicon.css',
    '@/assets/scss/main.scss'
  ],
  // https://github.com/nuxt-community/style-resources-module/
  styleResources: {
    scss: [
      '@/assets/scss/utils/_mixins.scss',
      '@/assets/scss/utils/_variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-compress',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Work Sans': {
            wght: [400, 500, 600],
          },
        },
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // global styles
    '@nuxtjs/style-resources',
    [
      'nuxt-precompress',
      {
        enabled: true, // Enable in production
        report: false, // set true to turn one console messages during module init
        test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
        // Serving options
        middleware: {
          // You can disable middleware if you serve static files using nginx...
          enabled: true,
          // Enable if you have .gz or .br files in /static/ folder
          enabledStatic: true,
          // Priority of content-encodings, first matched with request Accept-Encoding will me served
          encodingsPriority: ['br', 'gzip']
        },

        // build time compression settings
        gzip: {
          // should compress to gzip?
          enabled: true,
          // compression config
          // https://www.npmjs.com/package/compression-webpack-plugin
          filename: '[path].gz[query]', // middleware will look for this filename
          threshold: 10240,
          minRatio: 0.8,
          compressionOptions: { level: 9 },
        },
        brotli: {
          // should compress to brotli?
          enabled: true,
          // compression config
          // https://www.npmjs.com/package/compression-webpack-plugin
          filename: '[path].br[query]', // middleware will look for this filename
          compressionOptions: { level: 11 },
          threshold: 10240,
          minRatio: 0.8
        }
      }
    ],
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: process.env.title || 'Nuxt V2 Starter Template',
      lang: 'en'
    },
    icon: {
      source: 'static/icon.png'
    },
    meta: {
      /* meta options */
      // theme_color: process.env.color,
      name: process.env.title
    }
  }
}
