
import { getFilesInfo } from '../tools/files/getFilesInfo';
import { updatePackageVersion, updateAndroidVersion, updateIosVersion } from '../tools/files/updateFilesInfo';
import { showProjectVersionUnitIncreased } from '../tools/console/renderMessages';
import { increaseVersion } from '../tools/increaseVersion';
import { getCurrentVersions } from '../tools/currents';

/**
 * [Application] Increase semver unit in project version
 * 
 * `major` 1.2.3 → 2.0.0  
 * `minor` 1.2.3 → 1.3.0  
 * `patch` 1.2.3 → 1.2.4  
 */
export function increaseProjectVersion(program) {
    const fileInfoNew = getFilesInfo();
    const versions = getCurrentVersions(fileInfoNew);
    const semverUnit = program.update;

    const newVersions = {
        package: increaseVersion(versions.package, program.update),
        android: increaseVersion(versions.android, program.update),
        ios: increaseVersion(versions.ios, program.update),
    };

    // console.log('AUTO UPDATE', newVersions);
    showProjectVersionUnitIncreased(semverUnit);

    updatePackageVersion(fileInfoNew, newVersions.package);
    updateAndroidVersion(fileInfoNew, newVersions.android);
    updateIosVersion(fileInfoNew, newVersions.ios);
}
