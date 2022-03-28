const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const LwcWebpackPlugin = require('lwc-webpack-plugin')

module.exports = (env, { mode }) => ({
  mode,
  plugins: [
    new LwcWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
    new HtmlWebpackPlugin()
  ]
})
