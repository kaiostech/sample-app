var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    root: [path.join(__dirname, 'src')],
    modulesDirectories: ['node_modules', 'src', 'scss'],
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  entry: {
    app: './src/app.js',
    vendors: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};
