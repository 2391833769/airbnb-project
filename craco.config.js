const path = require('path');
const CracoLessPlugin = require('craco-less')

module.exports = {
  //webpack别名配置
  webpack: {
    alias: {
      "@": path.resolve("src"),
      "components": path.resolve("src/components"),
      "utils": path.resolve("src/utils")
    }
  },

  //配置less
  plugins: [
    {
      plugin:  CracoLessPlugin
    }
  ]
}