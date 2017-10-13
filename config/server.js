const path = require('path')
const webpack = require('webpack')
const babelOptions = require('./server.babel.js')

module.exports = env => ({
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs',
  },
  externals: [ /^(?!\.|\/).+/i, ],
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
      NODE_ENV: JSON.stringify(env)
    }),
  ],
})
