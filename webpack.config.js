var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: path.resolve(__dirname, 'assets', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /(\.eot$)|(\.woff2$)|(\.woff$)|(\.ttf$)|(\.svg$)/, loaders: ['file'] },
      { test: /\.jsx?$/, loader: 'babel?stage=2', include: path.resolve(__dirname, 'assets') }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
};