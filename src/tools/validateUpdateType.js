import { versionUpdateErrorMessage } from './console/renderMessages';

export function validateUpdateType(type) {
    switch (type) {
    case 'major':
    case 'minor':
    case 'patch':
        return true;
    default: {
        versionUpdateErrorMessage(type);
        return false;
    }
    }
}
