const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    // contacts: './src/js/contacts.js',
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../img',
              options: '[name].[ext]'
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
