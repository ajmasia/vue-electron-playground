module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: 'github',
            owner: 'ajmasia',
            repo: 'vue-electron-playground',
          },
        ],
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
