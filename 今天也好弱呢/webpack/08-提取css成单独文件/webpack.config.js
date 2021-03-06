const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签,将样式放入
          // 'style-loader',
          // 这个loader取代style-loader,作用: 提取js中的css成单独文件
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader',
          /* 
            css兼容性处理: postcss->postcss-loader postcss-preset-env
            帮postcss找到package.json中browserslist里面的配置,通过配置加载指定的css兼容性样式
          */{
            loader: 'postcss-loader',
            options: {
              indet: 'postcss',
              plugins:() => {
                // postcss的插件
                require('postcss-preset-env')()
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件重命名
      filename: 'css/built.css'
    })
  ],
  mode: 'production'
}