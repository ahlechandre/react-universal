module.exports = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          'node': 'current',
        },
      },
    ],
  ],
  plugins: [
    'transform-object-rest-spread',
  ],  
};