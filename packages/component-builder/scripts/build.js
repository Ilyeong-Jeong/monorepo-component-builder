const webpack = require('webpack');

const webpackConfig = require('../webpack.config.js');

function bundling () {

  const compiler = webpack(webpackConfig);

  console.log("Webpack Bundling...");

  return new Promise((resolve, reject) => {
    compiler.run(function(err, stats) {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        reject(new Error("Webpack system error"));
      }

      console.log(stats.toString({
        chunks: true, // Makes the build much quieter
        colors: true
      }));
    
      if (stats.hasErrors()) {
        const info = stats.toJson();
        console.error(info.errors);
        reject(new Error("Webpack bundling error"));
      } else {
        resolve();
      }
    });
  });  
}

module.exports = bundling;