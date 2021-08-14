const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: "./src/index.html",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8081,
    host: '0.0.0.0',
  }
});
