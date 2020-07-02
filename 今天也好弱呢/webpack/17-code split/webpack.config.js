const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
moudle.exports = {
  // 单入口
  entry: './src/index.js',
  // entry: {
  //   // 多入口
  //   main: './src/index.js',
  //   text: './src/test.js'
  // },
  output: {
    // [name] 取文件名
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'production'
}
