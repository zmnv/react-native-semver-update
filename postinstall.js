const chalk = require('chalk').default;

const packageFile = require('./package.json');

const projectName = chalk.bold(chalk.magentaBright(
    packageFile.name,
));

const cliName = chalk.bold(chalk.yellowBright(
    Object.keys(packageFile.bin)[0],
));

console.log(`
🔥  Thanks for ${projectName} install!

💎  Now you can use fast semantic version updater just by cli command:
${chalk.gray(`
┌─────────────────────────────────────┐
│               ${cliName}               │
└─────────────────────────────────────┘
`)}\
`);
