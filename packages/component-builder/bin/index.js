const program = require('commander');
const chalk   = require('chalk');
const path    = require('path');

const build = require('../scripts/build');
const doc   = require('../scripts/doc');

program
.version('0.0.1')
.command('build')
.description('monorepo component build')
.option('-nd, --nodoc', 'generate no document')
.action(async function(cmd) {
  console.log(chalk.green("running path : ", path.resolve(".")));

  try {
    if(!cmd.nodoc) {
      await doc();
    }
    await build();
  } catch(err) {
    console.log(chalk.red("Error : ", err.message));
    process.exit(1);
  }
})