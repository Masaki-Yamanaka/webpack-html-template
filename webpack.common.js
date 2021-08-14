const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'index': './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/fonts', to: 'fonts' }],
    }),
  ],
};
