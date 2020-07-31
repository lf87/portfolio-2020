// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/scss/_style.scss')],
    })
}

module.exports = {
  siteName: 'Luke Fryer Web Developer',
  icon: './src/assets/img/logo.svg',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        manifestPath: 'manifest.json',
        title: 'Luke Fryer - Web Developer',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#b65474',
        backgroundColor: '#2c2c2c',
        name: 'Luke Fryer - Web Developer',
        shortName: 'Luke Fryer - Web Developer',
        icon: './src/assets/img/logo.svg',
      },
    },
  ],
  siteUrl: 'https://lf20.github.io',
  pathPrefix: '/',
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
}
