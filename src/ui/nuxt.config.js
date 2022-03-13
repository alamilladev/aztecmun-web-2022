import path from 'path';

export default {
  rootDir: '.',
  srcDir: 'src/ui',

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/global.scss'],

  styleResources: {
    scss: [
      '@/assets/styles/base/variables/colors.scss',
      '@/assets/styles/base/variables/fonts.scss',
      '@/assets/styles/base/variables/breakpoints.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildDir: 'dist',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const rootDir = this.buildContext.options.rootDir;
      const joinSrc = (s) => path.join(rootDir, 'src', s);

      if (!config?.resolve?.alias) {
        throw new Error('webpack config aliases not found!');
      }

      config.resolve.alias['@modules'] = joinSrc('modules');
      config.resolve.alias['@shared'] = joinSrc('shared');
      config.resolve.alias['@ui'] = joinSrc('ui');
    },
  },
};
