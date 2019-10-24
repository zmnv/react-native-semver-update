import { CONSTANTS } from '../constants';
import { SEARCH_PATTERNS } from '../searchPatterns';
import { PATHS } from '../paths';

import { readFile } from './readFile';

function getNativeVersion(inputPattern, sourceFile) {
    const projectVersion = new RegExp(inputPattern.buildVersion).exec(sourceFile)[2];
    const buildNumber = Number(new RegExp(inputPattern.buildNumber).exec(sourceFile)[2]);

    return {
        projectVersion,
        buildNumber,
    };
}

function getFilesInfo() {
    const files = {
        Package: JSON.parse(readFile(PATHS.PACKAGE)),
        [CONSTANTS.PLATFORM.IOS]: readFile(PATHS.IOS),
        [CONSTANTS.PLATFORM.ANDROID]: readFile(PATHS.ANDROID),
    };

    const versions = {
        Package: {
            projectVersion: files.Package.version,
        },
        [CONSTANTS.PLATFORM.IOS]: getNativeVersion(
            SEARCH_PATTERNS.IOS, files[CONSTANTS.PLATFORM.IOS],
        ),
        [CONSTANTS.PLATFORM.ANDROID]: getNativeVersion(
            SEARCH_PATTERNS.ANDROID, files[CONSTANTS.PLATFORM.ANDROID],
        ),
    };

    return {
        files,
        versions,
    };
}

export {
    getFilesInfo,
};
