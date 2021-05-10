/* eslint-disable import/no-extraneous-dependencies */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.common.config");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "@/dist"),
    publicPath: "@/dist/",
    watchContentBase: true,
    port: 9001,
    proxy: {
      "!(/dist/**/**.*)": {
        target: "http://localhost:5000/",
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: true,
    }),
  ],
});
