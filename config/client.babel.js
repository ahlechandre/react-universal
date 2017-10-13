module.exports = {
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
  plugins: [
    'transform-object-rest-spread',
  ],
};
