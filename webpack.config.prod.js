var config = require('./webpack.config.dev');
var webpack = require('webpack');

config.plugins = (function(plugins) {
  var defineOptions = {
    'process.env.NODE_ENV': JSON.stringify('production')
  };

  var uglifyOptions = {
    sourceMap: true,
    beautify: false,
    comments: false,
    compress: {
      collapse_vars: true,
      drop_console: true,
      screw_ie8: true,
      warnings: false
    },
    mangle: {
      screw_ie8: true,
      except: ['$super', '$', 'exports', 'require']
    },
    output: {
      screw_ie8: true,
      comments: false
    }
  };

  return [new webpack.DefinePlugin(defineOptions)]
    .concat(plugins || [])
    .concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(uglifyOptions)
    ]);
})(config.plugins);

module.exports = config;
