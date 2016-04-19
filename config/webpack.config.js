const webpack = require('webpack');


module.exports = {

  entry: {

    //'polyfills': './src/polyfills.ts',
    //'vendor': './src/vendor.ts',
    'main': './src/main.browser.ts'

  },


  output: {
    path: __dirname + "/.." + "/dist", publicPath: 'dist/', filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  /**
   * Modules
   */
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    },
    {
      test:   /\.scss/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test:   /\.html/,
      loader: 'html'
    },
    {
      test: /\.css$/,
      loader: 'raw-loader'
    }

    ],

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        //name: helpers.reverse(['polyfills', 'vendor', 'main']),
        name: ['main', 'vendor', 'polyfills'],
        minChunks: Infinity
      })

    ]
  }




};