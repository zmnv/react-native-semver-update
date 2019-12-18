export const getCurrentVersions = _fileInfo => ({
    package: _fileInfo.versions.Package.projectVersion,
    android: _fileInfo.versions.Android.projectVersion,
    ios: _fileInfo.versions.iOS.projectVersion,
});

export const getCurrentBuilds = _fileInfo => ({
    android: Number(_fileInfo.versions.Android.buildNumber),
    ios: Number(_fileInfo.versions.iOS.buildNumber),
});
