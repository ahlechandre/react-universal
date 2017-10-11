const path = require('path');

const babelRcClient = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          'browsers': 'last 2 versions',
        },
      },
    ],
  ],
};
const babelRcServer = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          'node': 'current',
        },
        modules: false,
      },
    ],
  ],
};

const babelLoaderClient = {
  test: /\.js$/,
  exclude:  /node_modules/,
  loader: 'babel-loader',
  query: babelRcClient,
};
const babelLoaderServer = {
  test: /\.js$/,
  exclude:  /node_modules/,
  loader: 'babel-loader',
  query: babelRcServer,
};

module.exports = [
  {
    entry: './src/client/index.js',
    output: {
      path: path.resolve(__dirname, './static/js'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        babelLoaderClient,
      ],
    },
    plugins: [],
  },
  {
    entry: './src/server/index.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'server.js',
      libraryTarget: 'commonjs',
    },
    externals: [ /^(?!\.|\/).+/i, ],
    module: {
      loaders: [
        babelLoaderServer,
      ],
    },
    plugins: [],
  },
]