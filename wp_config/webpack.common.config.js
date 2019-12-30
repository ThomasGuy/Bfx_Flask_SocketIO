/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./theProject/client/static/js/main.jsx",
  output: {
    path: path.resolve(__dirname, "../theProject/client/dist"),
    filename: "js/[name].js",
  },

  module: {
    rules: [
      {
        test: [/.js$|.jsx$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
              // hmr: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
              // hmr: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/fonts/",
        },
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/fonts/",
        },
      },
    ],
  },

  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "../theProject/client/static/stylesheets"),
      "@img": path.resolve(__dirname, "../theProject/client/static/assets/images"),
      "@": path.resolve(__dirname, "../theProject/client/static"),
    },
    modules: ["node_modules", path.resolve(__dirname, "theProject/client")],
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      // filename: isDevelopment
      //   ? "styles/[name].css"
      //   : "styles/[name].[hash].css",
      // chunkFilename: isDevelopment
      //   ? "styles/[id].css"
      //   : "styles/[id].[hash].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./theProject/client/static/assets/images",
        to: "assets/images",
      },
    ]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: true,
    }),
  ],
};
