import chalk from 'chalk';
import { Logo } from '../tools/console/logo';
import { LogoIcon } from '../tools/console/logoIcon';

export function showHelp(program) {
    console.log(LogoIcon);
    console.log(Logo);

    console.log('Automaticly updates a project version and build number for react-native');
    console.log('');

    program.outputHelp();

    console.log(`
Example:
  > cd /your-project-path
  > ${chalk.yellowBright('rnsemup -b -u patch')}
    `);
}
