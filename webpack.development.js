var path = require('path');

var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'assets', 'app.js'),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /(\.eot$)|(\.woff2$)|(\.woff$)|(\.ttf$)|(\.svg$)/, loaders: ['file'] },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?stage=2'], include: path.resolve(__dirname, 'assets') }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
};