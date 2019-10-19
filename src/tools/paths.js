import { resolve } from 'path';

const CURRENT_DIRECTORY_PATH = process.cwd();

const PATHS = {
    /** FOR DEVELOPMENT */
    // PACKAGE: resolve(CURRENT_DIRECTORY_PATH, './src/sources/package.json'),
    // ANDROID: resolve(CURRENT_DIRECTORY_PATH, './src/sources/build.gradle'),
    // IOS: resolve(CURRENT_DIRECTORY_PATH, './src/sources/project.pbxproj'),

    /** FOR PRODUCTION */
    PACKAGE: resolve(CURRENT_DIRECTORY_PATH, './package.json'),
    ANDROID: resolve(CURRENT_DIRECTORY_PATH, './android/app/build.gradle'),
    IOS: resolve(CURRENT_DIRECTORY_PATH, './ios/enapter.xcodeproj/project.pbxproj'),
};

export {
    PATHS,
};
