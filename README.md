# React Native Semver Update

Automaticly updates a project version and build number in:
* package.json
* iOS
* Android

<p align="center">
<img src="https://i.imgur.com/IjHNgPp.gif" />
</p>

## Install

Install global package by:

```
npm i -g react-native-semver-update
```

## Usage

### Change Version by Manual Control

1. Write commmand in terminal and press [enter]:
```
rnsemup
```
2. Choose what do you need from menu.

### Auto Increase by cli

Build Number:
```
rnsemup -b
```

Project Version:
```
rnsemup -u <unit>
```
where `unit` is:
 * `major` 1.2.3 → 2.0.0  
 * `minor` 1.2.3 → 1.3.0  
 * `patch` 1.2.3 → 1.2.4  

For example:

```
rnsemup -b -u minor
```

1. Increase build number
2. Increase minor in project version
3. Set patch is 0

## How it works

1. It find files in current directory by defined paths array
[(see paths.js)](https://github.com/zmnv/react-native-semver-update/blob/master/src/tools/paths.js)

```js
PACKAGE: resolve(CURRENT_DIRECTORY_PATH, './package.json'),
ANDROID: resolve(CURRENT_DIRECTORY_PATH, './android/app/build.gradle'),
IOS: resolve(CURRENT_DIRECTORY_PATH, './ios/<YOUR PROJECT NAME FROM app.json>.xcodeproj/project.pbxproj'),
```

2. Find & replace versions by regular expressions [(see searchPatterns.js)](https://github.com/zmnv/react-native-semver-update/blob/master/src/tools/searchPatterns.js)

```
Android
- versionName
- versionCode

iOS
- MARKETING_VERSION
- CURRENT_PROJECT_VERSION
```

3. Display previous and new versions in terminal

## Support

* react-native 0.60+

## Why?

* I just tired to change build number by manual. Maybe you too...
* https://semver.org/

