import { PATHS } from '../paths';
import { writeFile } from '../writeFile';
import { CONSTANTS } from '../constants';
import { SEARCH_PATTERNS } from '../searchPatterns';

function updatePackageVersion(filesInfo, newVersion) {
    if (!newVersion) return;

    const packagePath = PATHS.PACKAGE;
    const packageFile = filesInfo.files.Package;

    const newPackage = {
        ...packageFile,
        version: newVersion,
    };

    const newPackageFile = JSON.stringify(newPackage, null, 2);

    if (JSON.stringify(packageFile, null, 2) === newPackageFile) {
        // noWriteFileMessage();
        return;
    }

    writeFile(packagePath, newPackageFile);
}

function updateNativeVersion(
    sourceFileData, platform, searchPattern, newProjectVersion, newBuildNumber,
) {
    const sourceFilePath = PATHS[platform.toUpperCase()];
    const sourceFile = sourceFileData.files[platform];

    const { projectVersion, buildNumber } = sourceFileData.versions;

    let fileData = sourceFile;

    if (newProjectVersion && projectVersion !== newProjectVersion) {
        fileData = fileData.replace(searchPattern.buildVersion, (all, start, found, end) => `${start}${newProjectVersion}${end}`);
    }

    if (newBuildNumber && buildNumber !== newBuildNumber) {
        fileData = fileData.replace(searchPattern.buildNumber, (all, start, found, end) => `${start}${newBuildNumber}${end}`);
    }

    if (sourceFile === fileData) {
        // noWriteFileMessage();
        return;
    }

    writeFile(sourceFilePath, fileData);
}

function updateAndroidVersion(sourceFileData, newProjectVersion, newBuildNumber) {
    updateNativeVersion(
        sourceFileData, CONSTANTS.PLATFORM.ANDROID, SEARCH_PATTERNS.ANDROID,
        newProjectVersion, newBuildNumber,
    );
}

function updateIosVersion(sourceFileData, newProjectVersion, newBuildNumber) {
    updateNativeVersion(
        sourceFileData, CONSTANTS.PLATFORM.IOS, SEARCH_PATTERNS.IOS,
        newProjectVersion, newBuildNumber,
    );
}

export {
    updatePackageVersion,
    updateAndroidVersion,
    updateIosVersion,
};
