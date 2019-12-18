import semver from 'semver';

export function increaseVersion(version, type = 'patch') {
    let major = Number(semver.major(version));
    let minor = Number(semver.minor(version));
    let patch = Number(semver.patch(version));

    switch (type) {
    case 'major': {
        major += 1;
        minor = 0;
        patch = 0;
        break;
    }
    case 'minor': {
        minor += 1;
        patch = 0;
        break;
    }
    case 'patch': {
        patch += 1;
        break;
    }
    default:
        break;
    }

    return `${major}.${minor}.${patch}`;
}
