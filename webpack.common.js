let webpack = require('webpack')
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'ts-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'base-project',
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    }),
  ]
}