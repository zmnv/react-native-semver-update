
import { getFilesInfo } from '../tools/files/getFilesInfo';
import { updateAndroidVersion, updateIosVersion } from '../tools/files/updateFilesInfo';
import { showBuildNumberIncreased } from '../tools/console/renderMessages';
import { getCurrentBuilds } from '../tools/currents';

/**
 * [Application] Increase build number
 * 
 * 1 → 2
 */
export function increaseBuildNumber(program) {
    const platform = program.platform
    
    const fileInfoNew = getFilesInfo();
    const builds = getCurrentBuilds(fileInfoNew);
    const newBuilds = {
        android: builds.android + 1,
        ios: builds.ios + 1,
    };

    showBuildNumberIncreased();
    
    if (platform !== undefind){
        if (platform === 'ios') {
            updateIosVersion(fileInfoNew, null, `${newBuilds.ios}`);
        } else if (platform === 'android') {
            updateAndroidVersion(fileInfoNew, null, `${newBuilds.android}`);
        }
    } else {
        updateAndroidVersion(fileInfoNew, null, `${newBuilds.android}`);
        updateIosVersion(fileInfoNew, null, `${newBuilds.ios}`);
    }
}
