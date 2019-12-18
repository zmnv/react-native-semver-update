import chalk from 'chalk';
import packageFile from '../../../package.json';

const Logo = chalk.magentaBright(`${packageFile.name} ${packageFile.version}\n`);

export {
    Logo,
};
