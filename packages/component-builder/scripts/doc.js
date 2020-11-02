const glob  = require('glob');
const path  = require("path");
const fs    = require("fs");

const vuedoc = require('@vuedoc/md');

function generateDoc () {
  return new Promise((resolve, reject) => {
    console.log("Making README.md");

    glob(path.resolve(".", "src/**.vue"), function(err, files) {
      vuedoc.md({
        filenames: files,
        stream   : fs.createWriteStream(path.resolve(".", "README.md")),
        join     : true
      })
      .then((document) => {
        console.log("README.md success");
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
    });
  });
}

module.exports = generateDoc;
