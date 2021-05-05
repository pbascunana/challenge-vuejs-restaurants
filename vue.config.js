const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new CompressionPlugin({
        algorithm: "gzip",
        compressionOptions: {
            numiterations: 15
        },
        minRatio: 0.99,
        test: /\.(js|css|html|ico|json)(\?.*)?$/i
      })
    ],
    resolve: {
      alias: {
        moment: 'moment/src/moment'
      }
    }
  }
};
