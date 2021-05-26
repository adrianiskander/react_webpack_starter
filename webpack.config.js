const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
