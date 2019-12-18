/* eslint-disable default-case */
import { askVersionText, askAboutType, askAboutPlatform } from '../tools/menu';
import { updatePackageVersion, updateAndroidVersion, updateIosVersion } from '../tools/files/updateFilesInfo';
import { CONSTANTS } from '../tools/constants';

async function updateProjectVersions(fileInfo, platform) {
    const { version } = await askVersionText('Input the new Project Version:');

    switch (platform) {
    case CONSTANTS.PLATFORM.PACKAGE: {
        updatePackageVersion(fileInfo, version);
        break;
    }
    case CONSTANTS.PLATFORM.ANDROID: {
        updateAndroidVersion(fileInfo, version);
        break;
    }
    case CONSTANTS.PLATFORM.IOS: {
        updateIosVersion(fileInfo, version);
        break;
    }
    case CONSTANTS.PLATFORM.ALL: {
        updatePackageVersion(fileInfo, version);
        updateAndroidVersion(fileInfo, version);
        updateIosVersion(fileInfo, version);
        break;
    }
    }
}

async function updateBuildNumbers(fileInfo, platform) {
    const { version: buildNumber } = await askVersionText('Input the new Build Number:');
    switch (platform) {
    case CONSTANTS.PLATFORM.ANDROID: {
        updateAndroidVersion(fileInfo, null, buildNumber);
        break;
    }
    case CONSTANTS.PLATFORM.IOS: {
        updateIosVersion(fileInfo, null, buildNumber);
        break;
    }
    case CONSTANTS.PLATFORM.ALL: {
        updateAndroidVersion(fileInfo, null, buildNumber);
        updateIosVersion(fileInfo, null, buildNumber);
        break;
    }
    }
}

/**
 * [Application] Update versions or build number by menu interface
 * 
 */
async function updateSwitchCases(fileInfo) {
    const { updateFor } = await askAboutType();
    const { platform } = await askAboutPlatform(updateFor);

    switch (updateFor) {
    case CONSTANTS.UPDATE.PROJECT_VERSION_VARIANT: {
        await updateProjectVersions(fileInfo, platform);
        break;
    }
    case CONSTANTS.UPDATE.BUILD_NUMBER_VARIANT: {
        await updateBuildNumbers(fileInfo, platform);
        break;
    }
    }
}

export {
    updateSwitchCases,
};
