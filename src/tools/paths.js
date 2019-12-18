import { resolve } from 'path';
import { existsSync } from 'fs';
import chalk from 'chalk';

import { readFile } from './files/readFile';
import { isDevelopment } from './isDevelopment';

const CURRENT_DIRECTORY_PATH = process.cwd();

function getAppProjectName() {
    const appJsonFilePath = isDevelopment
        ? resolve(CURRENT_DIRECTORY_PATH, './src/sources/app.json')
        : resolve(CURRENT_DIRECTORY_PATH, './app.json');

    if (!existsSync(appJsonFilePath)) { 
        console.log(chalk.redBright('[rnsemup] File app.json not found in'), CURRENT_DIRECTORY_PATH);
        process.exit(0);
    }

    const appJsonFile = readFile(appJsonFilePath);
    const appJsonObject = JSON.parse(appJsonFile);

    const appName = appJsonObject.name;

    if (!appName) {
        console.log('App name not found in app.json from ', CURRENT_DIRECTORY_PATH);
        process.exit(0);
    }

    return appJsonObject.name;
}

const productionPaths = {
    /** FOR PRODUCTION */
    PACKAGE: resolve(CURRENT_DIRECTORY_PATH, './package.json'),
    ANDROID: resolve(CURRENT_DIRECTORY_PATH, './android/app/build.gradle'),
    IOS: resolve(CURRENT_DIRECTORY_PATH, `./ios/${getAppProjectName()}.xcodeproj/project.pbxproj`),
};

const developmentPaths = {
    /** FOR DEVELOPMENT */
    PACKAGE: resolve(CURRENT_DIRECTORY_PATH, './src/sources/package.json'),
    ANDROID: resolve(CURRENT_DIRECTORY_PATH, './src/sources/build.gradle'),
    IOS: resolve(CURRENT_DIRECTORY_PATH, './src/sources/project.pbxproj'),
};

const PATHS = isDevelopment ? developmentPaths : productionPaths;

export {
    PATHS,
};
