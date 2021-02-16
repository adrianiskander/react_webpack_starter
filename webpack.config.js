const path = require('path');
const publicDir = path.join(__dirname, 'public');


module.exports = {
  entry: './src',
  output: {
    filename: 'app.js',
    path: publicDir
  },
  devServer: {
    contentBase: publicDir,
    port: 1000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
