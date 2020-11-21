const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8082,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: 'public',
          from: 'assets/**/*',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
