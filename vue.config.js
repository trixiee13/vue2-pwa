module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,

  pwa: {
    name: "MyDev'",
    shortName: "MyDev'",
    themeColor: '#007F8C',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url: '/',

    manifestOptions: {
      display: 'standalone',
      name: "Vue2 PWA demo'",
      short_name: "vue2-pwa-demo'",
      start_url: "/",
      background_color: "#007F8C",
      theme_color: "#ffffff"
    },

    // these are defaults, don't need to be specified here - but in a real app would be overwritten
    iconPaths: {
      faviconSVG: 'img/icons/favicon.svg',
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  },

  // configure webpack st the generated output is not minified for debugging purposes
  configureWebpack: {
    mode: 'development',
    optimization: {
      usedExports: true,
    },
  }
};
