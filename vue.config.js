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
          publish: ['github'],
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
