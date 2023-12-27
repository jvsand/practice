const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './client/client.tsx',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
