const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    filename: 'js/[name]_[chunkhash:5].js'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.js', '.jsx', '.vue', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.s?css/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
