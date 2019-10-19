# React Native Semver Update

> **Warning**  
> This is a first version. It hasn't any input validations by now.
> Use it for your own risk.

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
1. Write commmand in terminal and press [enter]:
```
rnsemup
```
2. Choose what do you need from menu.

## How it works

1. It find files in current directory by defined paths array
[(see paths.js)](https://github.com/zmnv/react-native-semver-update/blob/master/src/tools/paths.js)

```js
PACKAGE: resolve(CURRENT_DIRECTORY_PATH, './package.json'),
ANDROID: resolve(CURRENT_DIRECTORY_PATH, './android/app/build.gradle'),
IOS: resolve(CURRENT_DIRECTORY_PATH, './ios/enapter.xcodeproj/project.pbxproj'),
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

* react-native 0.60.4

## Why?

* I just tired to change build number by manual. Maybe you too...
* https://semver.org/

