const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';
const environment = PRODUCTION ? 'production' : 'development';

const entry = PRODUCTION ? './src/index' : [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server',
  './src/index'
];

const resolve = {
  modules: [
    path.resolve(__dirname, './src'),
    'node_modules'
  ]
};

const output = {
  path: path.join(__dirname, 'dist'),
  publicPath: PRODUCTION ? '' : '/dist/',
  filename: PRODUCTION ? 'scripts/app-[hash:12].min.js' : 'app.js'
};

const rules = [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
  }, {
    loader: 'eslint-loader',
    options: {
      configFile: `.eslintrc.${environment}.yml`
    }
  }]
}, {
  test: /\.(png|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 25000,
    name: PRODUCTION ? 'images/[name]-[hash:12].[ext]' : 'images/[name].[ext]'
  }
}];

const plugins = [
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
    // Because fuck it
    'process.env': {
      NODE_ENV: `'${environment}'`
    }
  })
];

module.exports = {
  entry,
  module: {
    rules
  },
  plugins,
  resolve,
  output
};
