const PATHS = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const output = {
  filename: `${PATHS.JS_FOLDER}/[name].[hash].js`,
  path: PATHS.OUTPUT_PATH,
  chunkFilename: `${PATHS.JS_FOLDER}/[name].[chunkhash].js`
}

const rules = [
  {
    test: /\.s?css$/,
    exclude: /\.module\.s?css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
      },
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
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
      },
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
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          query: {
            hash: 'sha512',
            digest: 'hex'
          },
          name:'img/[hash].[ext]'
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          query: {
            mozjpeg: {
              progressive: true
            },
            gifsicle: {
              interlaced: true
            },
            optipng: {
              optimizationLevel: 7
            }
          }
        }
      }]
  }
]

const plugins = [
  new CleanWebpackPlugin({ verbose: true }),
  new MiniCssExtractPlugin({
    filename: `${PATHS.CSS_FOLDER}/[name].[hash].css`,
    chunkFilename: `${PATHS.CSS_FOLDER}/[id].[hash].css`,
    ignoreOrder: false
  })
]

const optimization = {
  minimizer: [
    new TerserPlugin({
      parallel: true,
      cache: true,
      sourceMap: false
    })
  ],
  runtimeChunk: 'multiple',
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    maxSize: 200000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '.',
    automaticNameMaxLength: 30,
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
}

module.exports = {
  output,
  module: {
    rules
  },
  plugins,
  optimization
}
