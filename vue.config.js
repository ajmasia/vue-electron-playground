module.exports = {
  pluginOptions: {
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
