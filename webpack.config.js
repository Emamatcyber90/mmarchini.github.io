const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin("styles.css");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  plugins: [
    extractPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: [{
              loader: "css-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  }
};
