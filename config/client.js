const path = require('path')
const webpack = require('webpack')
const babelOptions = require('./client.babel.js')
const getUglify = env => (
  env === 'production' ? new webpack.optimize.UglifyJsPlugin() : () => null
)

module.exports = env => ({
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:  /node_modules/,
        loader: 'babel-loader',
        query: babelOptions,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    getUglify(env),
  ]
})
