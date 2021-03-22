const PATHS = require('./paths')
const webpack = require('webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const output = {
  filename: 'bundle.js',
  path: PATHS.OUTPUT_PATH,
  chunkFilename: '[id].js',
  chunkLoadTimeout: 30000
}

const rules = [
  {
    test: /\.s?css$/,
    exclude: /\.module\.s?css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          localsConvention: 'camelCase'
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.module\.s?css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          localsConvention: 'camelCase',
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/,
    exclude: /node_modules/,
    loader: 'file-loader'
  }
]

const devServer = {
  historyApiFallback: true,
  compress: true,
  port: 8080,
  hot: true,
  open: true,
  overlay: true
}

module.exports = {
  output,
  module: {
    rules
  },
  devServer,
  plugins: [new webpack.HotModuleReplacementPlugin(),new ErrorOverlayPlugin()],
  devtool: 'cheap-module-source-map'
}
