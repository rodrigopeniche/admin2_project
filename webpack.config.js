const path = require('path');
const Copier = require('copy-webpack-plugin');

function ft(name, from, to) {
  return {
    from: path.join(nmPath, from, name),
    to: path.join(prodPath, to, name)
  };
}

var devPath = path.join(__dirname, 'development');
var nmPath = path.join(__dirname, 'node_modules');
var prodPath = path.join(__dirname, 'production');
module.exports = {
  entry: path.join(devPath, 'index.js'),
  output: {
    path: prodPath,
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          url: false
        }
      }]
    }]
  },
  plugins: [
    new Copier([
      ft('bootstrap.min.css', 'bootstrap/dist/css', 'css'),
      ft('font-awesome.min.css', 'font-awesome/css', 'css'),
      ft('fontawesome-webfont.woff2', 'font-awesome/fonts', 'fonts'),
      ft('glyphicons-halflings-regular.woff2', 'bootstrap/fonts', 'fonts'),
      ft('ionicons.min.css', 'ionicons/css', 'css'),
      ft('ionicons.ttf', 'ionicons/fonts', 'fonts'),
      ft('AdminLTE.min.css', 'admin-lte/dist/css', 'css'),
      ft('skin-blue.min.css', 'admin-lte/dist/css/skins', 'css')
    ])
  ]
};
