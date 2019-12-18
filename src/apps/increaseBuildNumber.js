
import { getFilesInfo } from '../tools/files/getFilesInfo';
import { updateAndroidVersion, updateIosVersion } from '../tools/files/updateFilesInfo';
import { showBuildNumberIncreased } from '../tools/console/renderMessages';
import { getCurrentBuilds } from '../tools/currents';

/**
 * [Application] Increace build number
 * 
 * 1 → 2
 */
export function increaseBuildNumber() {
    const fileInfoNew = getFilesInfo();
    const builds = getCurrentBuilds(fileInfoNew);
    const newBuilds = {
        android: builds.android + 1,
        ios: builds.ios + 1,
    };

    showBuildNumberIncreased();

    updateAndroidVersion(fileInfoNew, null, `${newBuilds.android}`);
    updateIosVersion(fileInfoNew, null, `${newBuilds.ios}`);
}
