const androidSearchPatterns = {
    buildVersion: /(^\s*versionName ")(?<buildVersion>.*)("$)/gm,
    buildNumber: /(^\s*versionCode )(?<buildNumber>\d*)($)/gm,
};

const iosSearchPatterns = {
    buildVersion: /(^\s*MARKETING_VERSION = )(?<buildVersion>.*)(;$)/gm,
    buildNumber: /(^\s*CURRENT_PROJECT_VERSION = )(?<buildNumber>.*)(;$)/gm,
};

const SEARCH_PATTERNS = {
    ANDROID: androidSearchPatterns,
    IOS: iosSearchPatterns,
};

export {
    SEARCH_PATTERNS,
};
