const base = require('./webpack.config.base');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.noDeprecation = true;

const rules = [...base.module.rules, {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    use: [{
      loader: 'css-loader',
      options: {
        minimize: true
      }
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
  })
}];

const plugins = [
  ...base.plugins,
  // Webpack
  new webpack.optimize.UglifyJsPlugin(),
  // Third party
  new ExtractTextPlugin('styles/app-[contenthash:12].min.css'),
  new HtmlWebpackPlugin({
    template: './index.template.ejs',
    favicon: 'src/images/favicon.ico'
  })
];

module.exports = {
  entry: base.entry,
  module: {
    rules
  },
  plugins,
  resolve: base.resolve,
  output: base.output
};
