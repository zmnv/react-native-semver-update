/* eslint-disable no-console */
import { CONSTANTS } from '../constants';
import { renderTable } from '../console/table';

function renderFilesInfo(fileInfo, header) {
    const packageVersion = fileInfo.versions.Package.projectVersion;
    const iOSVersion = fileInfo.versions[CONSTANTS.PLATFORM.IOS];
    const androidVersion = fileInfo.versions[CONSTANTS.PLATFORM.ANDROID];

    const table = renderTable({
        m1: packageVersion,
        m2: androidVersion && androidVersion.projectVersion,
        m3: iOSVersion && iOSVersion.projectVersion,
        m4: androidVersion && String(androidVersion.buildNumber),
        m5: iOSVersion && String(iOSVersion.buildNumber),
        header,
    });

    console.log(table);
}

export {
    renderFilesInfo,
};
