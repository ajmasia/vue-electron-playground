module.exports = {
  pluginOptions: {
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'vue-electron-playground',
      },
    },
    electronBuilder: {
      electronBuilder: {
        builderOptions: {
          appId: 'com.tiendatek.desktop',
          copyright: 'Copyright Frogtek',
          mac: {
            category: 'public.app-category.finance',
            target: ['dmg'],
            publish: {
              provider: ['github'],
              // bucket: 'frogtek.ttdesktop',
            },
          },
          win: {
            target: ['nsis'],
            publish: {
              provider: ['github'],
              // bucket: 'frogtek.ttdesktop',
            },
          },
          linux: {
            category: 'Office',
            target: ['AppImage'],
            publish: {
              provider: ['github'],
              // bucket: 'frogtek.ttdesktop',
            },
          },
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
