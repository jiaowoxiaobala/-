/* 
  HMR: hot module replacement 热模块替换 / 模块热替换
  作用: 一个模块发生变化,只会重新打包这一个模块(而不是打包所有模块)
  极大提升构建速度
  样式文件:可以使用HMR功能,因为style-loader内部实现了
  js文件: 默认不能使用HMR功能 --> 需要修改js代码,添加支持HMR功能的代码
  html文件: 默认不能使用HMR功能,同时会导致问题:html文件不能热更新了(不用做HMR功能)
  解决: 修改entry入口,将html文件引入
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader配置
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname,' build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置,新配置要想生效,必须重新npx webpack-dev-server
    hot: true
  }
}