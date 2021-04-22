import program from 'commander';

import { validateImportantFilesExist } from './src/tools/files/validateFiles';

import App from './src/App';

program
    .option('-p, --platform', 'Output Platform')
    .option('-v, --version', 'Output version number')
    .option('-u, --update [patch|minor|major]', 'Update part of project version')
    .option('-b, --build', 'Increase build number');

program.parse(process.argv);

validateImportantFilesExist();

App(program);
