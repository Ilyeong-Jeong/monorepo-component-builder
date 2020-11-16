const webpack = require('webpack');
const path    = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(".", "src/index.js"),

  output: {
    filename: 'bundle.js',
  },

  resolve: {
    modules: [
      path.resolve(".", "src"),
      "node_modules"
    ],

    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },

    extensions: ['.js', '.sass', '.vue']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(".", "src"),
        ],
        loader: 'babel-loader'
      },

      {
        test: /\.vue$/,
        exclude: [
          path.resolve(".", "src"),
        ],
        loader: 'vue-loader'
      },  
      
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }, 
      
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader'
      },

      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    // new UglifyJSPlugin()
  ]
};