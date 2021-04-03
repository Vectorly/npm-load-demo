const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
  entry: ["./src/main.js"],
  output: {
    library: "test",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.resolve(__dirname, 'demo'),
      chunkFilename: 'test.[name].js',
    filename: "test.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'head',
        scriptLoading: 'blocking',
        filename: process.env.HTML_FNAME || 'index.html',
    }),
  ],

  node: {}
};
