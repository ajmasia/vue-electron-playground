module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'vue-electron-playground',
    },
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.tiendatek.desktop',
        copyright: 'Copyright Frogtek',
        publish: {
          provider: 'github',
          // bucket: 'frogtek.ttdesktop',
        },
        mac: {
          category: 'public.app-category.finance',
          target: ['dmg'],
        },
        win: {
          target: ['nsis'],
        },
        linux: {
          category: 'Office',
          target: ['AppImage'],
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
