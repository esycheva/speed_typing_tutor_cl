// https://nodejs.org/api/path.html
const path = require('path');

// Import htlm-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

// Webpack configuration
module.exports = {
  mode: 'development',
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  // Tell webpack to use html plugin
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],

  // Loaders configuration
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
 //
 // So we can write:
 // import MyComponent from './my-component';
 //
 // Instead of:
 // import MyComponent from './my-component.jsx';
 resolve: {
   extensions: ['.js', '.jsx'],
 },

  //Dev server configuration
  devServer: {
    host: '0.0.0.0',
    port: '8080'
  }
}
