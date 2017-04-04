const base = require('./webpack.config.base');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const devtool = 'inline-source-map';

const rules = [...base.module.rules, {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        autoprefixer
      ]
    }
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: ['src/scss']
    }
  }]
}];

const plugins = [
  ...base.plugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
];

module.exports = {
  devtool,
  entry: base.entry,
  module: {
    rules
  },
  plugins,
  resolve: base.resolve,
  output: base.output
};
