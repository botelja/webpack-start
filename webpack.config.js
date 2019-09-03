const path = require('path');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.{svg|png|jpg|gif|jpeg}$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  }
};
