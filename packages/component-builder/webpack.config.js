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

  resolveLoader: {
    modules: [ path.resolve(__dirname, 'node_modules') ],
    extensions: [ '.js', '.json' ],
    mainFields: [ 'loader', 'main' ]
  },

  resolve: {
    modules: [
      path.resolve(".", "src"),
      path.resolve(".", "node_modules"),
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
        include: [
          path.resolve(".", "src"),
          /node_modules\/.+\/src/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: "upward"
          }
        }
      },

      {
        test: /\.vue$/,
        include: [
          path.resolve(".", "src"),
          /node_modules\/.+\/src/
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
        include: [
          path.resolve(".", "src"),
          /node_modules\/.+\/src/
        ],        
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