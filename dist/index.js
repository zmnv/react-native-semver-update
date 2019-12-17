/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ "./src/App.js");

Object(_src_App__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, preferGlobal, bin, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, babel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"react-native-semver-update\",\"version\":\"1.0.14\",\"description\":\"Automaticly updates a project version and build number for react-native\",\"preferGlobal\":true,\"bin\":{\"rnsemup\":\"./bin.js\"},\"scripts\":{\"build\":\"webpack --config ./config/webpack.prod.js\",\"dev\":\"webpack --watch --config ./config/webpack.dev.js\",\"dev:live\":\"nodemon ./dist/index.js\",\"lint\":\"eslint ./src\",\"start\":\"node ./dist/index.js\",\"postinstall\":\"node ./postinstall.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/zmnv/react-native-semver-update.git\"},\"keywords\":[\"react\",\"native\",\"semver\",\"update\",\"menu\",\"automatization\",\"cli\"],\"author\":\"Valeriy Zimnev (@zmnv)\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/zmnv/react-native-semver-update/issues\"},\"homepage\":\"https://github.com/zmnv/react-native-semver-update#readme\",\"dependencies\":{\"chalk\":\"^2.4.2\",\"inquirer\":\"^7.0.0\",\"@babel/runtime\":\"^7.6.3\"},\"devDependencies\":{\"@babel/core\":\"^7.4.3\",\"@babel/plugin-proposal-class-properties\":\"^7.4.4\",\"@babel/plugin-transform-runtime\":\"^7.4.3\",\"@babel/preset-env\":\"^7.4.3\",\"babel-eslint\":\"^10.0.2\",\"babel-loader\":\"^8.0.5\",\"clean-webpack-plugin\":\"^3.0.0\",\"eslint\":\"^6.5.1\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-import-resolver-alias\":\"^1.1.2\",\"eslint-plugin-import\":\"^2.18.2\",\"nodemon\":\"^1.18.11\",\"raw-loader\":\"^2.0.0\",\"webpack\":\"^4.41.2\",\"webpack-cli\":\"^3.3.9\",\"webpack-merge\":\"^4.2.1\",\"webpack-node-externals\":\"^1.7.2\"},\"babel\":{\"presets\":[\"@babel/preset-env\"],\"plugins\":[\"@babel/plugin-proposal-class-properties\",\"@babel/plugin-transform-runtime\"]}}");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_files_renderFilesInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/files/renderFilesInfo */ "./src/tools/files/renderFilesInfo.js");
/* harmony import */ var _tools_files_getFilesInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/files/getFilesInfo */ "./src/tools/files/getFilesInfo.js");
/* harmony import */ var _tools_files_validateFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/files/validateFiles */ "./src/tools/files/validateFiles.js");
/* harmony import */ var _tools_console_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/console/logo */ "./src/tools/console/logo.js");
/* harmony import */ var _updateSwitchCases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSwitchCases */ "./src/updateSwitchCases.js");








function App() {
  return _App.apply(this, arguments);
}

function _App() {
  _App = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var isNeedToExit, fileInfo, afterFileInfo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // eslint-disable-next-line no-console
            console.log(_tools_console_logo__WEBPACK_IMPORTED_MODULE_5__["Logo"]);
            /** Close application if required files not found */

            isNeedToExit = Object(_tools_files_validateFiles__WEBPACK_IMPORTED_MODULE_4__["validateImportantFilesExist"])();

            if (!isNeedToExit) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            fileInfo = Object(_tools_files_getFilesInfo__WEBPACK_IMPORTED_MODULE_3__["getFilesInfo"])();
            Object(_tools_files_renderFilesInfo__WEBPACK_IMPORTED_MODULE_2__["renderFilesInfo"])(fileInfo, 'Before');
            _context.next = 8;
            return Object(_updateSwitchCases__WEBPACK_IMPORTED_MODULE_6__["updateSwitchCases"])(fileInfo);

          case 8:
            afterFileInfo = Object(_tools_files_getFilesInfo__WEBPACK_IMPORTED_MODULE_3__["getFilesInfo"])();
            Object(_tools_files_renderFilesInfo__WEBPACK_IMPORTED_MODULE_2__["renderFilesInfo"])(afterFileInfo, 'After');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _App.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/tools/console/colorByBoolean.js":
/*!*********************************************!*\
  !*** ./src/tools/console/colorByBoolean.js ***!
  \*********************************************/
/*! exports provided: colorByBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorByBoolean", function() { return colorByBoolean; });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);


function colorByBoolean(input) {
  if (input) return chalk__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright(input);
  return chalk__WEBPACK_IMPORTED_MODULE_0___default.a.redBright(input);
}



/***/ }),

/***/ "./src/tools/console/layout.js":
/*!*************************************!*\
  !*** ./src/tools/console/layout.js ***!
  \*************************************/
/*! exports provided: LayoutLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutLine", function() { return LayoutLine; });
function LayoutLine() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (a) {
    return a;
  };
  var outStr = '';
  var count = 0;

  while (count < width) {
    var currentChar = str[count] || fill;
    outStr = outStr.concat(currentChar);
    count += 1;
  }

  if (str.length > width) outStr = outStr.replace(/.$/, '…');
  return color(outStr);
}



/***/ }),

/***/ "./src/tools/console/logo.js":
/*!***********************************!*\
  !*** ./src/tools/console/logo.js ***!
  \***********************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);


var Logo = chalk__WEBPACK_IMPORTED_MODULE_0___default.a.magentaBright("".concat(_package_json__WEBPACK_IMPORTED_MODULE_1__.name, " ").concat(_package_json__WEBPACK_IMPORTED_MODULE_1__.version));


/***/ }),

/***/ "./src/tools/console/table.js":
/*!************************************!*\
  !*** ./src/tools/console/table.js ***!
  \************************************/
/*! exports provided: renderTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTable", function() { return renderTable; });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/tools/console/layout.js");



var renderTable = function renderTable() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$m = _ref.m1,
      m1 = _ref$m === void 0 ? '' : _ref$m,
      _ref$m2 = _ref.m2,
      m2 = _ref$m2 === void 0 ? '' : _ref$m2,
      _ref$m3 = _ref.m3,
      m3 = _ref$m3 === void 0 ? '' : _ref$m3,
      _ref$m4 = _ref.m4,
      m4 = _ref$m4 === void 0 ? '' : _ref$m4,
      _ref$m5 = _ref.m5,
      m5 = _ref$m5 === void 0 ? '' : _ref$m5;

  var width = 11;
  var h1 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])('Package', width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.yellowBright);
  var h2 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])('Android', width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright);
  var h3 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])('iOS', width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.cyanBright);
  var r1 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])('Project Version', 16, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.whiteBright);
  var r2 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])('Build Number', 16, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.whiteBright);
  var v11 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])(m1, width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.yellowBright);
  var v12 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])(m2, width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright);
  var v13 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])(m3, width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.cyanBright);
  var v22 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])(m4, width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright);
  var v23 = Object(_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutLine"])(m5, width, undefined, chalk__WEBPACK_IMPORTED_MODULE_0___default.a.cyanBright);
  return chalk__WEBPACK_IMPORTED_MODULE_0___default.a.gray("\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                  \u2502 ".concat(h1, " \u2502 ").concat(h2, " \u2502 ").concat(h3, " \u2502\n\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ").concat(r1, " \u2502 ").concat(v11, " \u2502 ").concat(v12, " \u2502 ").concat(v13, " \u2502\n\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ").concat(r2, " \u2502 -           \u2502 ").concat(v22, " \u2502 ").concat(v23, " \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"));
};



/***/ }),

/***/ "./src/tools/constants.js":
/*!********************************!*\
  !*** ./src/tools/constants.js ***!
  \********************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
var CONSTANTS = {
  UPDATE: {
    // ALL: 'All',
    // PACKAGE_VERSION_VARIANT: 'Package Version',
    PROJECT_VERSION_VARIANT: 'Project Version',
    BUILD_NUMBER_VARIANT: 'Build Number'
  },
  PLATFORM: {
    ALL: 'All',
    ANDROID: 'Android',
    IOS: 'iOS',
    PACKAGE: 'Package'
  }
};


/***/ }),

/***/ "./src/tools/files/getFilesInfo.js":
/*!*****************************************!*\
  !*** ./src/tools/files/getFilesInfo.js ***!
  \*****************************************/
/*! exports provided: getFilesInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilesInfo", function() { return getFilesInfo; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/tools/constants.js");
/* harmony import */ var _searchPatterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../searchPatterns */ "./src/tools/searchPatterns.js");
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paths */ "./src/tools/paths.js");
/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readFile */ "./src/tools/files/readFile.js");






function getNativeVersion(inputPattern, sourceFile) {
  var projectVersion = new RegExp(inputPattern.buildVersion).exec(sourceFile)[2];
  var buildNumber = Number(new RegExp(inputPattern.buildNumber).exec(sourceFile)[2]);
  return {
    projectVersion: projectVersion,
    buildNumber: buildNumber
  };
}

function getFilesInfo() {
  var _files, _versions;

  var files = (_files = {
    Package: JSON.parse(Object(_readFile__WEBPACK_IMPORTED_MODULE_4__["readFile"])(_paths__WEBPACK_IMPORTED_MODULE_3__["PATHS"].PACKAGE))
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_files, _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].PLATFORM.IOS, Object(_readFile__WEBPACK_IMPORTED_MODULE_4__["readFile"])(_paths__WEBPACK_IMPORTED_MODULE_3__["PATHS"].IOS)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_files, _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].PLATFORM.ANDROID, Object(_readFile__WEBPACK_IMPORTED_MODULE_4__["readFile"])(_paths__WEBPACK_IMPORTED_MODULE_3__["PATHS"].ANDROID)), _files);
  var versions = (_versions = {
    Package: {
      projectVersion: files.Package.version
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_versions, _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].PLATFORM.IOS, getNativeVersion(_searchPatterns__WEBPACK_IMPORTED_MODULE_2__["SEARCH_PATTERNS"].IOS, files[_constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].PLATFORM.IOS])), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_versions, _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].PLATFORM.ANDROID, getNativeVersion(_searchPatterns__WEBPACK_IMPORTED_MODULE_2__["SEARCH_PATTERNS"].ANDROID, files[_constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].PLATFORM.ANDROID])), _versions);
  return {
    files: files,
    versions: versions
  };
}



/***/ }),

/***/ "./src/tools/files/readFile.js":
/*!*************************************!*\
  !*** ./src/tools/files/readFile.js ***!
  \*************************************/
/*! exports provided: readFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

var readFile = function readFile(inputPath) {
  return Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(inputPath, 'utf8');
};

/***/ }),

/***/ "./src/tools/files/renderFilesInfo.js":
/*!********************************************!*\
  !*** ./src/tools/files/renderFilesInfo.js ***!
  \********************************************/
/*! exports provided: renderFilesInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFilesInfo", function() { return renderFilesInfo; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/tools/constants.js");
/* harmony import */ var _console_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console/table */ "./src/tools/console/table.js");
/* eslint-disable no-console */



function renderFilesInfo(fileInfo, header) {
  var packageVersion = fileInfo.versions.Package.projectVersion;
  var iOSVersion = fileInfo.versions[_constants__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].PLATFORM.IOS];
  var androidVersion = fileInfo.versions[_constants__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].PLATFORM.ANDROID];
  var table = Object(_console_table__WEBPACK_IMPORTED_MODULE_1__["renderTable"])({
    m1: packageVersion,
    m2: androidVersion && androidVersion.projectVersion,
    m3: iOSVersion && iOSVersion.projectVersion,
    m4: androidVersion && String(androidVersion.buildNumber),
    m5: iOSVersion && String(iOSVersion.buildNumber),
    header: header
  });
  console.log(table);
}



/***/ }),

/***/ "./src/tools/files/updateFilesInfo.js":
/*!********************************************!*\
  !*** ./src/tools/files/updateFilesInfo.js ***!
  \********************************************/
/*! exports provided: updatePackageVersion, updateAndroidVersion, updateIosVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePackageVersion", function() { return updatePackageVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAndroidVersion", function() { return updateAndroidVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIosVersion", function() { return updateIosVersion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paths */ "./src/tools/paths.js");
/* harmony import */ var _writeFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../writeFile */ "./src/tools/writeFile.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/tools/constants.js");
/* harmony import */ var _searchPatterns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchPatterns */ "./src/tools/searchPatterns.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function updatePackageVersion(filesInfo, newVersion) {
  if (!newVersion) return;
  var packagePath = _paths__WEBPACK_IMPORTED_MODULE_1__["PATHS"].PACKAGE;
  var packageFile = filesInfo.files.Package;

  var newPackage = _objectSpread({}, packageFile, {
    version: newVersion
  });

  var newPackageFile = JSON.stringify(newPackage, null, 2);

  if (JSON.stringify(packageFile, null, 2) === newPackageFile) {
    // noWriteFileMessage();
    return;
  }

  Object(_writeFile__WEBPACK_IMPORTED_MODULE_2__["writeFile"])(packagePath, newPackageFile);
}

function updateNativeVersion(sourceFileData, platform, searchPattern, newProjectVersion, newBuildNumber) {
  var sourceFilePath = _paths__WEBPACK_IMPORTED_MODULE_1__["PATHS"][platform.toUpperCase()];
  var sourceFile = sourceFileData.files[platform];
  var _sourceFileData$versi = sourceFileData.versions,
      projectVersion = _sourceFileData$versi.projectVersion,
      buildNumber = _sourceFileData$versi.buildNumber;
  var fileData = sourceFile;

  if (newProjectVersion && projectVersion !== newProjectVersion) {
    fileData = fileData.replace(searchPattern.buildVersion, function (all, start, found, end) {
      return "".concat(start).concat(newProjectVersion).concat(end);
    });
  }

  if (newBuildNumber && buildNumber !== newBuildNumber) {
    fileData = fileData.replace(searchPattern.buildNumber, function (all, start, found, end) {
      return "".concat(start).concat(newBuildNumber).concat(end);
    });
  }

  if (sourceFile === fileData) {
    // noWriteFileMessage();
    return;
  }

  Object(_writeFile__WEBPACK_IMPORTED_MODULE_2__["writeFile"])(sourceFilePath, fileData);
}

function updateAndroidVersion(sourceFileData, newProjectVersion, newBuildNumber) {
  updateNativeVersion(sourceFileData, _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].PLATFORM.ANDROID, _searchPatterns__WEBPACK_IMPORTED_MODULE_4__["SEARCH_PATTERNS"].ANDROID, newProjectVersion, newBuildNumber);
}

function updateIosVersion(sourceFileData, newProjectVersion, newBuildNumber) {
  updateNativeVersion(sourceFileData, _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].PLATFORM.IOS, _searchPatterns__WEBPACK_IMPORTED_MODULE_4__["SEARCH_PATTERNS"].IOS, newProjectVersion, newBuildNumber);
}



/***/ }),

/***/ "./src/tools/files/validateFiles.js":
/*!******************************************!*\
  !*** ./src/tools/files/validateFiles.js ***!
  \******************************************/
/*! exports provided: validateImportantFilesExist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateImportantFilesExist", function() { return validateImportantFilesExist; });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../paths */ "./src/tools/paths.js");
/* harmony import */ var _console_colorByBoolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../console/colorByBoolean */ "./src/tools/console/colorByBoolean.js");




/**
 * Returns `true` if any required file in `PATHS` not exist
 * and show warning in console.
 * @returns boolean
 */

function validateImportantFilesExist() {
  var isError = false;
  var meta = {};
  Object.keys(_paths__WEBPACK_IMPORTED_MODULE_2__["PATHS"]).forEach(function (key) {
    var isFileExist = Object(fs__WEBPACK_IMPORTED_MODULE_1__["existsSync"])(_paths__WEBPACK_IMPORTED_MODULE_2__["PATHS"][key]);
    meta[key] = {
      path: _paths__WEBPACK_IMPORTED_MODULE_2__["PATHS"][key],
      isFound: isFileExist
    };

    if (!isFileExist) {
      isError = true;
    }
  });

  if (isError) {
    console.log(chalk__WEBPACK_IMPORTED_MODULE_0___default.a.redBright('[Error] Some of files not found:\n'));
    Object.keys(_paths__WEBPACK_IMPORTED_MODULE_2__["PATHS"]).forEach(function (key) {
      console.log(key);
      console.log('– path:', meta[key].path);
      console.log('– is found:', Object(_console_colorByBoolean__WEBPACK_IMPORTED_MODULE_3__["colorByBoolean"])(meta[key].isFound));
      console.log('');
    });
  }

  return isError;
}



/***/ }),

/***/ "./src/tools/isDevelopment.js":
/*!************************************!*\
  !*** ./src/tools/isDevelopment.js ***!
  \************************************/
/*! exports provided: isDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
var isDevelopment = "development" === 'development';

/***/ }),

/***/ "./src/tools/menu.js":
/*!***************************!*\
  !*** ./src/tools/menu.js ***!
  \***************************/
/*! exports provided: askVersionText, askAboutType, askAboutPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askVersionText", function() { return askVersionText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askAboutType", function() { return askAboutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askAboutPlatform", function() { return askAboutPlatform; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inquirer */ "inquirer");
/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/tools/constants.js");





function askAboutType() {
  return _askAboutType.apply(this, arguments);
}

function _askAboutType() {
  _askAboutType = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var answers;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(inquirer__WEBPACK_IMPORTED_MODULE_2__["prompt"])([{
              type: 'list',
              name: 'updateFor',
              message: 'What do you want to update?',
              choices: [_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].UPDATE.BUILD_NUMBER_VARIANT, _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].UPDATE.PROJECT_VERSION_VARIANT]
            }]);

          case 2:
            answers = _context.sent;
            return _context.abrupt("return", answers);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _askAboutType.apply(this, arguments);
}

function askAboutPlatform(_x) {
  return _askAboutPlatform.apply(this, arguments);
}

function _askAboutPlatform() {
  _askAboutPlatform = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(updateFor) {
    var choices, answers;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            choices = [_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].PLATFORM.ALL, _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].PLATFORM.PACKAGE, _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].PLATFORM.ANDROID, _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].PLATFORM.IOS];
            if (updateFor === _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].UPDATE.BUILD_NUMBER_VARIANT) delete choices[1];
            _context2.next = 4;
            return Object(inquirer__WEBPACK_IMPORTED_MODULE_2__["prompt"])([{
              type: 'list',
              name: 'platform',
              message: 'Choose the platform:',
              choices: choices
            }]);

          case 4:
            answers = _context2.sent;
            return _context2.abrupt("return", answers);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _askAboutPlatform.apply(this, arguments);
}

function askVersionText(_x2) {
  return _askVersionText.apply(this, arguments);
}

function _askVersionText() {
  _askVersionText = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(message) {
    var answer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(inquirer__WEBPACK_IMPORTED_MODULE_2__["prompt"])([{
              type: 'input',
              name: 'version',
              message: message
            }]);

          case 2:
            answer = _context3.sent;
            return _context3.abrupt("return", answer);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _askVersionText.apply(this, arguments);
}



/***/ }),

/***/ "./src/tools/paths.js":
/*!****************************!*\
  !*** ./src/tools/paths.js ***!
  \****************************/
/*! exports provided: PATHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATHS", function() { return PATHS; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _files_readFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/readFile */ "./src/tools/files/readFile.js");
/* harmony import */ var _isDevelopment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isDevelopment */ "./src/tools/isDevelopment.js");





var CURRENT_DIRECTORY_PATH = process.cwd();

function getAppProjectName() {
  var appJsonFilePath = _isDevelopment__WEBPACK_IMPORTED_MODULE_4__["isDevelopment"] ? Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './src/sources/app.json') : Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './app.json');

  if (!Object(fs__WEBPACK_IMPORTED_MODULE_1__["existsSync"])(appJsonFilePath)) {
    console.log(chalk__WEBPACK_IMPORTED_MODULE_2___default.a.redBright('[rnsemup] File app.json not found in'), CURRENT_DIRECTORY_PATH);
    process.exit(1);
  }

  var appJsonFile = Object(_files_readFile__WEBPACK_IMPORTED_MODULE_3__["readFile"])(appJsonFilePath);
  var appJsonObject = JSON.parse(appJsonFile);
  var appName = appJsonObject.name;

  if (!appName) {
    console.log('App name not found in app.json from ', CURRENT_DIRECTORY_PATH);
    process.exit(1);
  }

  return appJsonObject.name;
}

var productionPaths = {
  /** FOR PRODUCTION */
  PACKAGE: Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './package.json'),
  ANDROID: Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './android/app/build.gradle'),
  IOS: Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, "./ios/".concat(getAppProjectName(), ".xcodeproj/project.pbxproj"))
};
var developmentPaths = {
  /** FOR DEVELOPMENT */
  PACKAGE: Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './src/sources/package.json'),
  ANDROID: Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './src/sources/build.gradle'),
  IOS: Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(CURRENT_DIRECTORY_PATH, './src/sources/project.pbxproj')
};
var PATHS = _isDevelopment__WEBPACK_IMPORTED_MODULE_4__["isDevelopment"] ? developmentPaths : productionPaths;


/***/ }),

/***/ "./src/tools/searchPatterns.js":
/*!*************************************!*\
  !*** ./src/tools/searchPatterns.js ***!
  \*************************************/
/*! exports provided: SEARCH_PATTERNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PATTERNS", function() { return SEARCH_PATTERNS; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "@babel/runtime/helpers/wrapNativeSuper");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);






function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

var androidSearchPatterns = {
  buildVersion: _wrapRegExp(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*versionName ")(.*)("$)/gm, {
    buildVersion: 2
  }),
  buildNumber: _wrapRegExp(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*versionCode )([0-9]*)($)/gm, {
    buildNumber: 2
  })
};
var iosSearchPatterns = {
  buildVersion: _wrapRegExp(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*MARKETING_VERSION = )(.*)(;$)/gm, {
    buildVersion: 2
  }),
  buildNumber: _wrapRegExp(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*CURRENT_PROJECT_VERSION = )(.*)(;$)/gm, {
    buildNumber: 2
  })
};
var SEARCH_PATTERNS = {
  ANDROID: androidSearchPatterns,
  IOS: iosSearchPatterns
};


/***/ }),

/***/ "./src/tools/writeFile.js":
/*!********************************!*\
  !*** ./src/tools/writeFile.js ***!
  \********************************/
/*! exports provided: writeFile, noWriteFileMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noWriteFileMessage", function() { return noWriteFileMessage; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-console */

var consolePrefix = '[writeFile]';

function writeFile(filePath, data) {
  try {
    Object(fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"])(filePath, data);
  } catch (error) {
    console.log(consolePrefix, error);
  } // console.log(`${consolePrefix} file updated:`, filePath);

}

function noWriteFileMessage() {
  console.log('NO CHANGES');
}



/***/ }),

/***/ "./src/updateSwitchCases.js":
/*!**********************************!*\
  !*** ./src/updateSwitchCases.js ***!
  \**********************************/
/*! exports provided: updateSwitchCases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSwitchCases", function() { return updateSwitchCases; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/menu */ "./src/tools/menu.js");
/* harmony import */ var _tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/files/updateFilesInfo */ "./src/tools/files/updateFilesInfo.js");
/* harmony import */ var _tools_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/constants */ "./src/tools/constants.js");



/* eslint-disable default-case */




function updateProjectVersions(_x, _x2) {
  return _updateProjectVersions.apply(this, arguments);
}

function _updateProjectVersions() {
  _updateProjectVersions = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fileInfo, platform) {
    var _ref, version;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_tools_menu__WEBPACK_IMPORTED_MODULE_2__["askVersionText"])('Input the new Project Version:');

          case 2:
            _ref = _context.sent;
            version = _ref.version;
            _context.t0 = platform;
            _context.next = _context.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.PACKAGE ? 7 : _context.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.ANDROID ? 9 : _context.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.IOS ? 11 : _context.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.ALL ? 13 : 17;
            break;

          case 7:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updatePackageVersion"])(fileInfo, version);
            return _context.abrupt("break", 17);

          case 9:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateAndroidVersion"])(fileInfo, version);
            return _context.abrupt("break", 17);

          case 11:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateIosVersion"])(fileInfo, version);
            return _context.abrupt("break", 17);

          case 13:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updatePackageVersion"])(fileInfo, version);
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateAndroidVersion"])(fileInfo, version);
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateIosVersion"])(fileInfo, version);
            return _context.abrupt("break", 17);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _updateProjectVersions.apply(this, arguments);
}

function updateBuildNumbers(_x3, _x4) {
  return _updateBuildNumbers.apply(this, arguments);
}

function _updateBuildNumbers() {
  _updateBuildNumbers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fileInfo, platform) {
    var _ref2, buildNumber;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_tools_menu__WEBPACK_IMPORTED_MODULE_2__["askVersionText"])('Input the new Build Number:');

          case 2:
            _ref2 = _context2.sent;
            buildNumber = _ref2.version;
            _context2.t0 = platform;
            _context2.next = _context2.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.ANDROID ? 7 : _context2.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.IOS ? 9 : _context2.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].PLATFORM.ALL ? 11 : 14;
            break;

          case 7:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateAndroidVersion"])(fileInfo, null, buildNumber);
            return _context2.abrupt("break", 14);

          case 9:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateIosVersion"])(fileInfo, null, buildNumber);
            return _context2.abrupt("break", 14);

          case 11:
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateAndroidVersion"])(fileInfo, null, buildNumber);
            Object(_tools_files_updateFilesInfo__WEBPACK_IMPORTED_MODULE_3__["updateIosVersion"])(fileInfo, null, buildNumber);
            return _context2.abrupt("break", 14);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateBuildNumbers.apply(this, arguments);
}

function updateSwitchCases(_x5) {
  return _updateSwitchCases.apply(this, arguments);
}

function _updateSwitchCases() {
  _updateSwitchCases = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(fileInfo) {
    var _ref3, updateFor, _ref4, platform;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_tools_menu__WEBPACK_IMPORTED_MODULE_2__["askAboutType"])();

          case 2:
            _ref3 = _context3.sent;
            updateFor = _ref3.updateFor;
            _context3.next = 6;
            return Object(_tools_menu__WEBPACK_IMPORTED_MODULE_2__["askAboutPlatform"])(updateFor);

          case 6:
            _ref4 = _context3.sent;
            platform = _ref4.platform;
            _context3.t0 = updateFor;
            _context3.next = _context3.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].UPDATE.PROJECT_VERSION_VARIANT ? 11 : _context3.t0 === _tools_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].UPDATE.BUILD_NUMBER_VARIANT ? 14 : 17;
            break;

          case 11:
            _context3.next = 13;
            return updateProjectVersions(fileInfo, platform);

          case 13:
            return _context3.abrupt("break", 17);

          case 14:
            _context3.next = 16;
            return updateBuildNumbers(fileInfo, platform);

          case 16:
            return _context3.abrupt("break", 17);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateSwitchCases.apply(this, arguments);
}



/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/helpers/wrapNativeSuper":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/wrapNativeSuper" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc29sZS9jb2xvckJ5Qm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc29sZS9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL2NvbnNvbGUvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc29sZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy9maWxlcy9nZXRGaWxlc0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL2ZpbGVzL3JlYWRGaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy9maWxlcy9yZW5kZXJGaWxlc0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL2ZpbGVzL3VwZGF0ZUZpbGVzSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvZmlsZXMvdmFsaWRhdGVGaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvaXNEZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3NlYXJjaFBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy93cml0ZUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZVN3aXRjaENhc2VzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnF1aXJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJBcHAiLCJjb25zb2xlIiwibG9nIiwiTG9nbyIsImlzTmVlZFRvRXhpdCIsInZhbGlkYXRlSW1wb3J0YW50RmlsZXNFeGlzdCIsImZpbGVJbmZvIiwiZ2V0RmlsZXNJbmZvIiwicmVuZGVyRmlsZXNJbmZvIiwidXBkYXRlU3dpdGNoQ2FzZXMiLCJhZnRlckZpbGVJbmZvIiwiY29sb3JCeUJvb2xlYW4iLCJpbnB1dCIsImNoYWxrIiwiZ3JlZW5CcmlnaHQiLCJyZWRCcmlnaHQiLCJMYXlvdXRMaW5lIiwic3RyIiwid2lkdGgiLCJmaWxsIiwiY29sb3IiLCJhIiwib3V0U3RyIiwiY291bnQiLCJjdXJyZW50Q2hhciIsImNvbmNhdCIsImxlbmd0aCIsInJlcGxhY2UiLCJtYWdlbnRhQnJpZ2h0IiwicGFja2FnZUZpbGUiLCJuYW1lIiwidmVyc2lvbiIsInJlbmRlclRhYmxlIiwibTEiLCJtMiIsIm0zIiwibTQiLCJtNSIsImgxIiwidW5kZWZpbmVkIiwieWVsbG93QnJpZ2h0IiwiaDIiLCJoMyIsImN5YW5CcmlnaHQiLCJyMSIsIndoaXRlQnJpZ2h0IiwicjIiLCJ2MTEiLCJ2MTIiLCJ2MTMiLCJ2MjIiLCJ2MjMiLCJncmF5IiwiQ09OU1RBTlRTIiwiVVBEQVRFIiwiUFJPSkVDVF9WRVJTSU9OX1ZBUklBTlQiLCJCVUlMRF9OVU1CRVJfVkFSSUFOVCIsIlBMQVRGT1JNIiwiQUxMIiwiQU5EUk9JRCIsIklPUyIsIlBBQ0tBR0UiLCJnZXROYXRpdmVWZXJzaW9uIiwiaW5wdXRQYXR0ZXJuIiwic291cmNlRmlsZSIsInByb2plY3RWZXJzaW9uIiwiUmVnRXhwIiwiYnVpbGRWZXJzaW9uIiwiZXhlYyIsImJ1aWxkTnVtYmVyIiwiTnVtYmVyIiwiZmlsZXMiLCJQYWNrYWdlIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGUiLCJQQVRIUyIsInZlcnNpb25zIiwiU0VBUkNIX1BBVFRFUk5TIiwiaW5wdXRQYXRoIiwicmVhZEZpbGVTeW5jIiwiaGVhZGVyIiwicGFja2FnZVZlcnNpb24iLCJpT1NWZXJzaW9uIiwiYW5kcm9pZFZlcnNpb24iLCJ0YWJsZSIsIlN0cmluZyIsInVwZGF0ZVBhY2thZ2VWZXJzaW9uIiwiZmlsZXNJbmZvIiwibmV3VmVyc2lvbiIsInBhY2thZ2VQYXRoIiwibmV3UGFja2FnZSIsIm5ld1BhY2thZ2VGaWxlIiwic3RyaW5naWZ5Iiwid3JpdGVGaWxlIiwidXBkYXRlTmF0aXZlVmVyc2lvbiIsInNvdXJjZUZpbGVEYXRhIiwicGxhdGZvcm0iLCJzZWFyY2hQYXR0ZXJuIiwibmV3UHJvamVjdFZlcnNpb24iLCJuZXdCdWlsZE51bWJlciIsInNvdXJjZUZpbGVQYXRoIiwidG9VcHBlckNhc2UiLCJmaWxlRGF0YSIsImFsbCIsInN0YXJ0IiwiZm91bmQiLCJlbmQiLCJ1cGRhdGVBbmRyb2lkVmVyc2lvbiIsInVwZGF0ZUlvc1ZlcnNpb24iLCJpc0Vycm9yIiwibWV0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaXNGaWxlRXhpc3QiLCJleGlzdHNTeW5jIiwicGF0aCIsImlzRm91bmQiLCJpc0RldmVsb3BtZW50IiwicHJvY2VzcyIsImFza0Fib3V0VHlwZSIsInByb21wdCIsInR5cGUiLCJtZXNzYWdlIiwiY2hvaWNlcyIsImFuc3dlcnMiLCJhc2tBYm91dFBsYXRmb3JtIiwidXBkYXRlRm9yIiwiYXNrVmVyc2lvblRleHQiLCJhbnN3ZXIiLCJDVVJSRU5UX0RJUkVDVE9SWV9QQVRIIiwiY3dkIiwiZ2V0QXBwUHJvamVjdE5hbWUiLCJhcHBKc29uRmlsZVBhdGgiLCJyZXNvbHZlIiwiZXhpdCIsImFwcEpzb25GaWxlIiwiYXBwSnNvbk9iamVjdCIsImFwcE5hbWUiLCJwcm9kdWN0aW9uUGF0aHMiLCJkZXZlbG9wbWVudFBhdGhzIiwiYW5kcm9pZFNlYXJjaFBhdHRlcm5zIiwiaW9zU2VhcmNoUGF0dGVybnMiLCJjb25zb2xlUHJlZml4IiwiZmlsZVBhdGgiLCJkYXRhIiwid3JpdGVGaWxlU3luYyIsImVycm9yIiwibm9Xcml0ZUZpbGVNZXNzYWdlIiwidXBkYXRlUHJvamVjdFZlcnNpb25zIiwidXBkYXRlQnVpbGROdW1iZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFn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MUIseUJBU1NGLDBEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLG9CQVQxQjtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFNYytGLHFCQUFxQixDQUFDakosUUFBRCxFQUFXMkYsUUFBWCxDQU5uQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFVY3VELGtCQUFrQixDQUFDbEosUUFBRCxFQUFXMkYsUUFBWCxDQVZoQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vc3JjL0FwcCc7XG5cbkFwcCgpO1xuIiwiaW1wb3J0IHsgcmVuZGVyRmlsZXNJbmZvIH0gZnJvbSAnLi90b29scy9maWxlcy9yZW5kZXJGaWxlc0luZm8nO1xuaW1wb3J0IHsgZ2V0RmlsZXNJbmZvIH0gZnJvbSAnLi90b29scy9maWxlcy9nZXRGaWxlc0luZm8nO1xuaW1wb3J0IHsgdmFsaWRhdGVJbXBvcnRhbnRGaWxlc0V4aXN0IH0gZnJvbSAnLi90b29scy9maWxlcy92YWxpZGF0ZUZpbGVzJztcblxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4vdG9vbHMvY29uc29sZS9sb2dvJztcblxuaW1wb3J0IHsgdXBkYXRlU3dpdGNoQ2FzZXMgfSBmcm9tICcuL3VwZGF0ZVN3aXRjaENhc2VzJztcblxuXG5hc3luYyBmdW5jdGlvbiBBcHAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhMb2dvKTtcblxuICAgIC8qKiBDbG9zZSBhcHBsaWNhdGlvbiBpZiByZXF1aXJlZCBmaWxlcyBub3QgZm91bmQgKi9cbiAgICBjb25zdCBpc05lZWRUb0V4aXQgPSB2YWxpZGF0ZUltcG9ydGFudEZpbGVzRXhpc3QoKTtcbiAgICBpZiAoaXNOZWVkVG9FeGl0KSByZXR1cm47XG5cbiAgICBjb25zdCBmaWxlSW5mbyA9IGdldEZpbGVzSW5mbygpO1xuICAgIHJlbmRlckZpbGVzSW5mbyhmaWxlSW5mbywgJ0JlZm9yZScpO1xuXG4gICAgYXdhaXQgdXBkYXRlU3dpdGNoQ2FzZXMoZmlsZUluZm8pO1xuXG4gICAgY29uc3QgYWZ0ZXJGaWxlSW5mbyA9IGdldEZpbGVzSW5mbygpO1xuICAgIHJlbmRlckZpbGVzSW5mbyhhZnRlckZpbGVJbmZvLCAnQWZ0ZXInKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuZnVuY3Rpb24gY29sb3JCeUJvb2xlYW4oaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQpIHJldHVybiBjaGFsay5ncmVlbkJyaWdodChpbnB1dCk7XG5cbiAgICByZXR1cm4gY2hhbGsucmVkQnJpZ2h0KGlucHV0KTtcbn1cblxuZXhwb3J0IHtcbiAgICBjb2xvckJ5Qm9vbGVhbixcbn07XG4iLCJmdW5jdGlvbiBMYXlvdXRMaW5lKHN0ciA9ICcnLCB3aWR0aCA9IDE1LCBmaWxsID0gJyAnLCBjb2xvciA9IGEgPT4gYSkge1xuICAgIGxldCBvdXRTdHIgPSAnJztcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGNvdW50IDwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENoYXIgPSBzdHJbY291bnRdIHx8IGZpbGw7XG4gICAgICAgIG91dFN0ciA9IG91dFN0ci5jb25jYXQoY3VycmVudENoYXIpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgIH1cblxuICAgIGlmIChzdHIubGVuZ3RoID4gd2lkdGgpIG91dFN0ciA9IG91dFN0ci5yZXBsYWNlKC8uJC8sICfigKYnKTtcblxuICAgIHJldHVybiBjb2xvcihvdXRTdHIpO1xufVxuXG5leHBvcnQge1xuICAgIExheW91dExpbmUsXG59O1xuIiwiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBwYWNrYWdlRmlsZSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5jb25zdCBMb2dvID0gY2hhbGsubWFnZW50YUJyaWdodChgJHtwYWNrYWdlRmlsZS5uYW1lfSAke3BhY2thZ2VGaWxlLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7XG4gICAgTG9nbyxcbn07XG4iLCJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgTGF5b3V0TGluZSB9IGZyb20gJy4vbGF5b3V0JztcblxuY29uc3QgcmVuZGVyVGFibGUgPSAoeyBtMSA9ICcnLCBtMiA9ICcnLCBtMyA9ICcnLCBtNCA9ICcnLCBtNSA9ICcnIH0gPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gMTE7XG5cbiAgICBjb25zdCBoMSA9IExheW91dExpbmUoJ1BhY2thZ2UnLCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay55ZWxsb3dCcmlnaHQpO1xuICAgIGNvbnN0IGgyID0gTGF5b3V0TGluZSgnQW5kcm9pZCcsIHdpZHRoLCB1bmRlZmluZWQsIGNoYWxrLmdyZWVuQnJpZ2h0KTtcbiAgICBjb25zdCBoMyA9IExheW91dExpbmUoJ2lPUycsIHdpZHRoLCB1bmRlZmluZWQsIGNoYWxrLmN5YW5CcmlnaHQpO1xuXG4gICAgY29uc3QgcjEgPSBMYXlvdXRMaW5lKCdQcm9qZWN0IFZlcnNpb24nLCAxNiwgdW5kZWZpbmVkLCBjaGFsay53aGl0ZUJyaWdodCk7XG4gICAgY29uc3QgcjIgPSBMYXlvdXRMaW5lKCdCdWlsZCBOdW1iZXInLCAxNiwgdW5kZWZpbmVkLCBjaGFsay53aGl0ZUJyaWdodCk7XG5cbiAgICBjb25zdCB2MTEgPSBMYXlvdXRMaW5lKG0xLCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay55ZWxsb3dCcmlnaHQpO1xuICAgIGNvbnN0IHYxMiA9IExheW91dExpbmUobTIsIHdpZHRoLCB1bmRlZmluZWQsIGNoYWxrLmdyZWVuQnJpZ2h0KTtcbiAgICBjb25zdCB2MTMgPSBMYXlvdXRMaW5lKG0zLCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay5jeWFuQnJpZ2h0KTtcblxuICAgIGNvbnN0IHYyMiA9IExheW91dExpbmUobTQsIHdpZHRoLCB1bmRlZmluZWQsIGNoYWxrLmdyZWVuQnJpZ2h0KTtcbiAgICBjb25zdCB2MjMgPSBMYXlvdXRMaW5lKG01LCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay5jeWFuQnJpZ2h0KTtcblxuICAgIHJldHVybiBjaGFsay5ncmF5KGBcbuKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUrOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUrOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUrOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxu4pSCICAgICAgICAgICAgICAgICAg4pSCICR7aDF9IOKUgiAke2gyfSDilIIgJHtoM30g4pSCXG7ilJzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilKRcbuKUgiAke3IxfSDilIIgJHt2MTF9IOKUgiAke3YxMn0g4pSCICR7djEzfSDilIJcbuKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUvOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUvOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUvOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpFxu4pSCICR7cjJ9IOKUgiAtICAgICAgICAgICDilIIgJHt2MjJ9IOKUgiAke3YyM30g4pSCXG7ilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbmApO1xufTtcblxuZXhwb3J0IHtcbiAgICByZW5kZXJUYWJsZSxcbn07XG4iLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgVVBEQVRFOiB7XG4gICAgICAgIC8vIEFMTDogJ0FsbCcsXG4gICAgICAgIC8vIFBBQ0tBR0VfVkVSU0lPTl9WQVJJQU5UOiAnUGFja2FnZSBWZXJzaW9uJyxcbiAgICAgICAgUFJPSkVDVF9WRVJTSU9OX1ZBUklBTlQ6ICdQcm9qZWN0IFZlcnNpb24nLFxuICAgICAgICBCVUlMRF9OVU1CRVJfVkFSSUFOVDogJ0J1aWxkIE51bWJlcicsXG4gICAgfSxcbiAgICBQTEFURk9STToge1xuICAgICAgICBBTEw6ICdBbGwnLFxuICAgICAgICBBTkRST0lEOiAnQW5kcm9pZCcsXG4gICAgICAgIElPUzogJ2lPUycsXG4gICAgICAgIFBBQ0tBR0U6ICdQYWNrYWdlJyxcbiAgICB9LFxufTtcblxuZXhwb3J0IHtcbiAgICBDT05TVEFOVFMsXG59O1xuIiwiaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFNFQVJDSF9QQVRURVJOUyB9IGZyb20gJy4uL3NlYXJjaFBhdHRlcm5zJztcbmltcG9ydCB7IFBBVEhTIH0gZnJvbSAnLi4vcGF0aHMnO1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJy4vcmVhZEZpbGUnO1xuXG5mdW5jdGlvbiBnZXROYXRpdmVWZXJzaW9uKGlucHV0UGF0dGVybiwgc291cmNlRmlsZSkge1xuICAgIGNvbnN0IHByb2plY3RWZXJzaW9uID0gbmV3IFJlZ0V4cChpbnB1dFBhdHRlcm4uYnVpbGRWZXJzaW9uKS5leGVjKHNvdXJjZUZpbGUpWzJdO1xuICAgIGNvbnN0IGJ1aWxkTnVtYmVyID0gTnVtYmVyKG5ldyBSZWdFeHAoaW5wdXRQYXR0ZXJuLmJ1aWxkTnVtYmVyKS5leGVjKHNvdXJjZUZpbGUpWzJdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RWZXJzaW9uLFxuICAgICAgICBidWlsZE51bWJlcixcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlc0luZm8oKSB7XG4gICAgY29uc3QgZmlsZXMgPSB7XG4gICAgICAgIFBhY2thZ2U6IEpTT04ucGFyc2UocmVhZEZpbGUoUEFUSFMuUEFDS0FHRSkpLFxuICAgICAgICBbQ09OU1RBTlRTLlBMQVRGT1JNLklPU106IHJlYWRGaWxlKFBBVEhTLklPUyksXG4gICAgICAgIFtDT05TVEFOVFMuUExBVEZPUk0uQU5EUk9JRF06IHJlYWRGaWxlKFBBVEhTLkFORFJPSUQpLFxuICAgIH07XG5cbiAgICBjb25zdCB2ZXJzaW9ucyA9IHtcbiAgICAgICAgUGFja2FnZToge1xuICAgICAgICAgICAgcHJvamVjdFZlcnNpb246IGZpbGVzLlBhY2thZ2UudmVyc2lvbixcbiAgICAgICAgfSxcbiAgICAgICAgW0NPTlNUQU5UUy5QTEFURk9STS5JT1NdOiBnZXROYXRpdmVWZXJzaW9uKFxuICAgICAgICAgICAgU0VBUkNIX1BBVFRFUk5TLklPUywgZmlsZXNbQ09OU1RBTlRTLlBMQVRGT1JNLklPU10sXG4gICAgICAgICksXG4gICAgICAgIFtDT05TVEFOVFMuUExBVEZPUk0uQU5EUk9JRF06IGdldE5hdGl2ZVZlcnNpb24oXG4gICAgICAgICAgICBTRUFSQ0hfUEFUVEVSTlMuQU5EUk9JRCwgZmlsZXNbQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSURdLFxuICAgICAgICApLFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmaWxlcyxcbiAgICAgICAgdmVyc2lvbnMsXG4gICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRGaWxlc0luZm8sXG59O1xuIiwiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuXG5leHBvcnQgY29uc3QgcmVhZEZpbGUgPSBpbnB1dFBhdGggPT4gcmVhZEZpbGVTeW5jKGlucHV0UGF0aCwgJ3V0ZjgnKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyByZW5kZXJUYWJsZSB9IGZyb20gJy4uL2NvbnNvbGUvdGFibGUnO1xuXG5mdW5jdGlvbiByZW5kZXJGaWxlc0luZm8oZmlsZUluZm8sIGhlYWRlcikge1xuICAgIGNvbnN0IHBhY2thZ2VWZXJzaW9uID0gZmlsZUluZm8udmVyc2lvbnMuUGFja2FnZS5wcm9qZWN0VmVyc2lvbjtcbiAgICBjb25zdCBpT1NWZXJzaW9uID0gZmlsZUluZm8udmVyc2lvbnNbQ09OU1RBTlRTLlBMQVRGT1JNLklPU107XG4gICAgY29uc3QgYW5kcm9pZFZlcnNpb24gPSBmaWxlSW5mby52ZXJzaW9uc1tDT05TVEFOVFMuUExBVEZPUk0uQU5EUk9JRF07XG5cbiAgICBjb25zdCB0YWJsZSA9IHJlbmRlclRhYmxlKHtcbiAgICAgICAgbTE6IHBhY2thZ2VWZXJzaW9uLFxuICAgICAgICBtMjogYW5kcm9pZFZlcnNpb24gJiYgYW5kcm9pZFZlcnNpb24ucHJvamVjdFZlcnNpb24sXG4gICAgICAgIG0zOiBpT1NWZXJzaW9uICYmIGlPU1ZlcnNpb24ucHJvamVjdFZlcnNpb24sXG4gICAgICAgIG00OiBhbmRyb2lkVmVyc2lvbiAmJiBTdHJpbmcoYW5kcm9pZFZlcnNpb24uYnVpbGROdW1iZXIpLFxuICAgICAgICBtNTogaU9TVmVyc2lvbiAmJiBTdHJpbmcoaU9TVmVyc2lvbi5idWlsZE51bWJlciksXG4gICAgICAgIGhlYWRlcixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcbn1cblxuZXhwb3J0IHtcbiAgICByZW5kZXJGaWxlc0luZm8sXG59O1xuIiwiaW1wb3J0IHsgUEFUSFMgfSBmcm9tICcuLi9wYXRocyc7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICcuLi93cml0ZUZpbGUnO1xuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFNFQVJDSF9QQVRURVJOUyB9IGZyb20gJy4uL3NlYXJjaFBhdHRlcm5zJztcblxuZnVuY3Rpb24gdXBkYXRlUGFja2FnZVZlcnNpb24oZmlsZXNJbmZvLCBuZXdWZXJzaW9uKSB7XG4gICAgaWYgKCFuZXdWZXJzaW9uKSByZXR1cm47XG5cbiAgICBjb25zdCBwYWNrYWdlUGF0aCA9IFBBVEhTLlBBQ0tBR0U7XG4gICAgY29uc3QgcGFja2FnZUZpbGUgPSBmaWxlc0luZm8uZmlsZXMuUGFja2FnZTtcblxuICAgIGNvbnN0IG5ld1BhY2thZ2UgPSB7XG4gICAgICAgIC4uLnBhY2thZ2VGaWxlLFxuICAgICAgICB2ZXJzaW9uOiBuZXdWZXJzaW9uLFxuICAgIH07XG5cbiAgICBjb25zdCBuZXdQYWNrYWdlRmlsZSA9IEpTT04uc3RyaW5naWZ5KG5ld1BhY2thZ2UsIG51bGwsIDIpO1xuXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHBhY2thZ2VGaWxlLCBudWxsLCAyKSA9PT0gbmV3UGFja2FnZUZpbGUpIHtcbiAgICAgICAgLy8gbm9Xcml0ZUZpbGVNZXNzYWdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cml0ZUZpbGUocGFja2FnZVBhdGgsIG5ld1BhY2thZ2VGaWxlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTmF0aXZlVmVyc2lvbihcbiAgICBzb3VyY2VGaWxlRGF0YSwgcGxhdGZvcm0sIHNlYXJjaFBhdHRlcm4sIG5ld1Byb2plY3RWZXJzaW9uLCBuZXdCdWlsZE51bWJlcixcbikge1xuICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gUEFUSFNbcGxhdGZvcm0udG9VcHBlckNhc2UoKV07XG4gICAgY29uc3Qgc291cmNlRmlsZSA9IHNvdXJjZUZpbGVEYXRhLmZpbGVzW3BsYXRmb3JtXTtcblxuICAgIGNvbnN0IHsgcHJvamVjdFZlcnNpb24sIGJ1aWxkTnVtYmVyIH0gPSBzb3VyY2VGaWxlRGF0YS52ZXJzaW9ucztcblxuICAgIGxldCBmaWxlRGF0YSA9IHNvdXJjZUZpbGU7XG5cbiAgICBpZiAobmV3UHJvamVjdFZlcnNpb24gJiYgcHJvamVjdFZlcnNpb24gIT09IG5ld1Byb2plY3RWZXJzaW9uKSB7XG4gICAgICAgIGZpbGVEYXRhID0gZmlsZURhdGEucmVwbGFjZShzZWFyY2hQYXR0ZXJuLmJ1aWxkVmVyc2lvbiwgKGFsbCwgc3RhcnQsIGZvdW5kLCBlbmQpID0+IGAke3N0YXJ0fSR7bmV3UHJvamVjdFZlcnNpb259JHtlbmR9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5ld0J1aWxkTnVtYmVyICYmIGJ1aWxkTnVtYmVyICE9PSBuZXdCdWlsZE51bWJlcikge1xuICAgICAgICBmaWxlRGF0YSA9IGZpbGVEYXRhLnJlcGxhY2Uoc2VhcmNoUGF0dGVybi5idWlsZE51bWJlciwgKGFsbCwgc3RhcnQsIGZvdW5kLCBlbmQpID0+IGAke3N0YXJ0fSR7bmV3QnVpbGROdW1iZXJ9JHtlbmR9YCk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZUZpbGUgPT09IGZpbGVEYXRhKSB7XG4gICAgICAgIC8vIG5vV3JpdGVGaWxlTWVzc2FnZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3JpdGVGaWxlKHNvdXJjZUZpbGVQYXRoLCBmaWxlRGF0YSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFuZHJvaWRWZXJzaW9uKHNvdXJjZUZpbGVEYXRhLCBuZXdQcm9qZWN0VmVyc2lvbiwgbmV3QnVpbGROdW1iZXIpIHtcbiAgICB1cGRhdGVOYXRpdmVWZXJzaW9uKFxuICAgICAgICBzb3VyY2VGaWxlRGF0YSwgQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSUQsIFNFQVJDSF9QQVRURVJOUy5BTkRST0lELFxuICAgICAgICBuZXdQcm9qZWN0VmVyc2lvbiwgbmV3QnVpbGROdW1iZXIsXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSW9zVmVyc2lvbihzb3VyY2VGaWxlRGF0YSwgbmV3UHJvamVjdFZlcnNpb24sIG5ld0J1aWxkTnVtYmVyKSB7XG4gICAgdXBkYXRlTmF0aXZlVmVyc2lvbihcbiAgICAgICAgc291cmNlRmlsZURhdGEsIENPTlNUQU5UUy5QTEFURk9STS5JT1MsIFNFQVJDSF9QQVRURVJOUy5JT1MsXG4gICAgICAgIG5ld1Byb2plY3RWZXJzaW9uLCBuZXdCdWlsZE51bWJlcixcbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIHVwZGF0ZVBhY2thZ2VWZXJzaW9uLFxuICAgIHVwZGF0ZUFuZHJvaWRWZXJzaW9uLFxuICAgIHVwZGF0ZUlvc1ZlcnNpb24sXG59O1xuIiwiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tICdmcyc7XG5cbmltcG9ydCB7IFBBVEhTIH0gZnJvbSAnLi4vcGF0aHMnO1xuaW1wb3J0IHsgY29sb3JCeUJvb2xlYW4gfSBmcm9tICcuLi9jb25zb2xlL2NvbG9yQnlCb29sZWFuJztcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgcmVxdWlyZWQgZmlsZSBpbiBgUEFUSFNgIG5vdCBleGlzdFxuICogYW5kIHNob3cgd2FybmluZyBpbiBjb25zb2xlLlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUltcG9ydGFudEZpbGVzRXhpc3QoKSB7XG4gICAgbGV0IGlzRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBtZXRhID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhQQVRIUykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBpc0ZpbGVFeGlzdCA9IGV4aXN0c1N5bmMoUEFUSFNba2V5XSk7XG4gICAgICAgIG1ldGFba2V5XSA9IHtcbiAgICAgICAgICAgIHBhdGg6IFBBVEhTW2tleV0sXG4gICAgICAgICAgICBpc0ZvdW5kOiBpc0ZpbGVFeGlzdCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWlzRmlsZUV4aXN0KSB7XG4gICAgICAgICAgICBpc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBjaGFsay5yZWRCcmlnaHQoJ1tFcnJvcl0gU29tZSBvZiBmaWxlcyBub3QgZm91bmQ6XFxuJyksXG4gICAgICAgICk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoUEFUSFMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4oCTIHBhdGg6JywgbWV0YVtrZXldLnBhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+KAkyBpcyBmb3VuZDonLCBjb2xvckJ5Qm9vbGVhbihtZXRhW2tleV0uaXNGb3VuZCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFcnJvcjtcbn1cblxuZXhwb3J0IHtcbiAgICB2YWxpZGF0ZUltcG9ydGFudEZpbGVzRXhpc3QsXG59O1xuIiwiZXhwb3J0IGNvbnN0IGlzRGV2ZWxvcG1lbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcbiIsImltcG9ydCB7IHByb21wdCB9IGZyb20gJ2lucXVpcmVyJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuYXN5bmMgZnVuY3Rpb24gYXNrQWJvdXRUeXBlKCkge1xuICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBwcm9tcHQoW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICBuYW1lOiAndXBkYXRlRm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdXaGF0IGRvIHlvdSB3YW50IHRvIHVwZGF0ZT8nLFxuICAgICAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgICAgIENPTlNUQU5UUy5VUERBVEUuQlVJTERfTlVNQkVSX1ZBUklBTlQsXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLlVQREFURS5QUk9KRUNUX1ZFUlNJT05fVkFSSUFOVCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSk7XG5cbiAgICByZXR1cm4gYW5zd2Vycztcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXNrQWJvdXRQbGF0Zm9ybSh1cGRhdGVGb3IpIHtcbiAgICBjb25zdCBjaG9pY2VzID0gW1xuICAgICAgICBDT05TVEFOVFMuUExBVEZPUk0uQUxMLFxuICAgICAgICBDT05TVEFOVFMuUExBVEZPUk0uUEFDS0FHRSxcbiAgICAgICAgQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSUQsXG4gICAgICAgIENPTlNUQU5UUy5QTEFURk9STS5JT1MsXG4gICAgXTtcblxuICAgIGlmICh1cGRhdGVGb3IgPT09IENPTlNUQU5UUy5VUERBVEUuQlVJTERfTlVNQkVSX1ZBUklBTlQpIGRlbGV0ZSBjaG9pY2VzWzFdO1xuXG4gICAgY29uc3QgYW5zd2VycyA9IGF3YWl0IHByb21wdChbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgICAgICAgIG5hbWU6ICdwbGF0Zm9ybScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIHRoZSBwbGF0Zm9ybTonLFxuICAgICAgICAgICAgY2hvaWNlcyxcbiAgICAgICAgfSxcbiAgICBdKTtcblxuICAgIHJldHVybiBhbnN3ZXJzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhc2tWZXJzaW9uVGV4dChtZXNzYWdlKSB7XG4gICAgY29uc3QgYW5zd2VyID0gYXdhaXQgcHJvbXB0KFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgIG5hbWU6ICd2ZXJzaW9uJyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH0sXG4gICAgXSk7XG5cbiAgICByZXR1cm4gYW5zd2VyO1xufVxuXG5leHBvcnQge1xuICAgIGFza1ZlcnNpb25UZXh0LFxuICAgIGFza0Fib3V0VHlwZSxcbiAgICBhc2tBYm91dFBsYXRmb3JtLFxufTtcbiIsImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJy4vZmlsZXMvcmVhZEZpbGUnO1xuaW1wb3J0IHsgaXNEZXZlbG9wbWVudCB9IGZyb20gJy4vaXNEZXZlbG9wbWVudCc7XG5cbmNvbnN0IENVUlJFTlRfRElSRUNUT1JZX1BBVEggPSBwcm9jZXNzLmN3ZCgpO1xuXG5mdW5jdGlvbiBnZXRBcHBQcm9qZWN0TmFtZSgpIHtcbiAgICBjb25zdCBhcHBKc29uRmlsZVBhdGggPSBpc0RldmVsb3BtZW50XG4gICAgICAgID8gcmVzb2x2ZShDVVJSRU5UX0RJUkVDVE9SWV9QQVRILCAnLi9zcmMvc291cmNlcy9hcHAuanNvbicpXG4gICAgICAgIDogcmVzb2x2ZShDVVJSRU5UX0RJUkVDVE9SWV9QQVRILCAnLi9hcHAuanNvbicpO1xuXG4gICAgaWYgKCFleGlzdHNTeW5jKGFwcEpzb25GaWxlUGF0aCkpIHsgXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZEJyaWdodCgnW3Juc2VtdXBdIEZpbGUgYXBwLmpzb24gbm90IGZvdW5kIGluJyksIENVUlJFTlRfRElSRUNUT1JZX1BBVEgpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwSnNvbkZpbGUgPSByZWFkRmlsZShhcHBKc29uRmlsZVBhdGgpO1xuICAgIGNvbnN0IGFwcEpzb25PYmplY3QgPSBKU09OLnBhcnNlKGFwcEpzb25GaWxlKTtcblxuICAgIGNvbnN0IGFwcE5hbWUgPSBhcHBKc29uT2JqZWN0Lm5hbWU7XG5cbiAgICBpZiAoIWFwcE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcCBuYW1lIG5vdCBmb3VuZCBpbiBhcHAuanNvbiBmcm9tICcsIENVUlJFTlRfRElSRUNUT1JZX1BBVEgpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwcEpzb25PYmplY3QubmFtZTtcbn1cblxuY29uc3QgcHJvZHVjdGlvblBhdGhzID0ge1xuICAgIC8qKiBGT1IgUFJPRFVDVElPTiAqL1xuICAgIFBBQ0tBR0U6IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgJy4vcGFja2FnZS5qc29uJyksXG4gICAgQU5EUk9JRDogcmVzb2x2ZShDVVJSRU5UX0RJUkVDVE9SWV9QQVRILCAnLi9hbmRyb2lkL2FwcC9idWlsZC5ncmFkbGUnKSxcbiAgICBJT1M6IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgYC4vaW9zLyR7Z2V0QXBwUHJvamVjdE5hbWUoKX0ueGNvZGVwcm9qL3Byb2plY3QucGJ4cHJvamApLFxufTtcblxuY29uc3QgZGV2ZWxvcG1lbnRQYXRocyA9IHtcbiAgICAvKiogRk9SIERFVkVMT1BNRU5UICovXG4gICAgUEFDS0FHRTogcmVzb2x2ZShDVVJSRU5UX0RJUkVDVE9SWV9QQVRILCAnLi9zcmMvc291cmNlcy9wYWNrYWdlLmpzb24nKSxcbiAgICBBTkRST0lEOiByZXNvbHZlKENVUlJFTlRfRElSRUNUT1JZX1BBVEgsICcuL3NyYy9zb3VyY2VzL2J1aWxkLmdyYWRsZScpLFxuICAgIElPUzogcmVzb2x2ZShDVVJSRU5UX0RJUkVDVE9SWV9QQVRILCAnLi9zcmMvc291cmNlcy9wcm9qZWN0LnBieHByb2onKSxcbn07XG5cbmNvbnN0IFBBVEhTID0gaXNEZXZlbG9wbWVudCA/IGRldmVsb3BtZW50UGF0aHMgOiBwcm9kdWN0aW9uUGF0aHM7XG5cbmV4cG9ydCB7XG4gICAgUEFUSFMsXG59O1xuIiwiY29uc3QgYW5kcm9pZFNlYXJjaFBhdHRlcm5zID0ge1xuICAgIGJ1aWxkVmVyc2lvbjogLyheXFxzKnZlcnNpb25OYW1lIFwiKSg/PGJ1aWxkVmVyc2lvbj4uKikoXCIkKS9nbSxcbiAgICBidWlsZE51bWJlcjogLyheXFxzKnZlcnNpb25Db2RlICkoPzxidWlsZE51bWJlcj5cXGQqKSgkKS9nbSxcbn07XG5cbmNvbnN0IGlvc1NlYXJjaFBhdHRlcm5zID0ge1xuICAgIGJ1aWxkVmVyc2lvbjogLyheXFxzKk1BUktFVElOR19WRVJTSU9OID0gKSg/PGJ1aWxkVmVyc2lvbj4uKikoOyQpL2dtLFxuICAgIGJ1aWxkTnVtYmVyOiAvKF5cXHMqQ1VSUkVOVF9QUk9KRUNUX1ZFUlNJT04gPSApKD88YnVpbGROdW1iZXI+LiopKDskKS9nbSxcbn07XG5cbmNvbnN0IFNFQVJDSF9QQVRURVJOUyA9IHtcbiAgICBBTkRST0lEOiBhbmRyb2lkU2VhcmNoUGF0dGVybnMsXG4gICAgSU9TOiBpb3NTZWFyY2hQYXR0ZXJucyxcbn07XG5cbmV4cG9ydCB7XG4gICAgU0VBUkNIX1BBVFRFUk5TLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IHdyaXRlRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5cbmNvbnN0IGNvbnNvbGVQcmVmaXggPSAnW3dyaXRlRmlsZV0nO1xuXG5mdW5jdGlvbiB3cml0ZUZpbGUoZmlsZVBhdGgsIGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICB3cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhjb25zb2xlUHJlZml4LCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coYCR7Y29uc29sZVByZWZpeH0gZmlsZSB1cGRhdGVkOmAsIGZpbGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gbm9Xcml0ZUZpbGVNZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdOTyBDSEFOR0VTJyk7XG59XG5cbmV4cG9ydCB7XG4gICAgd3JpdGVGaWxlLFxuICAgIG5vV3JpdGVGaWxlTWVzc2FnZSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBkZWZhdWx0LWNhc2UgKi9cbmltcG9ydCB7IGFza1ZlcnNpb25UZXh0LCBhc2tBYm91dFR5cGUsIGFza0Fib3V0UGxhdGZvcm0gfSBmcm9tICcuL3Rvb2xzL21lbnUnO1xuaW1wb3J0IHsgdXBkYXRlUGFja2FnZVZlcnNpb24sIHVwZGF0ZUFuZHJvaWRWZXJzaW9uLCB1cGRhdGVJb3NWZXJzaW9uIH0gZnJvbSAnLi90b29scy9maWxlcy91cGRhdGVGaWxlc0luZm8nO1xuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi90b29scy9jb25zdGFudHMnO1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0VmVyc2lvbnMoZmlsZUluZm8sIHBsYXRmb3JtKSB7XG4gICAgY29uc3QgeyB2ZXJzaW9uIH0gPSBhd2FpdCBhc2tWZXJzaW9uVGV4dCgnSW5wdXQgdGhlIG5ldyBQcm9qZWN0IFZlcnNpb246Jyk7XG5cbiAgICBzd2l0Y2ggKHBsYXRmb3JtKSB7XG4gICAgY2FzZSBDT05TVEFOVFMuUExBVEZPUk0uUEFDS0FHRToge1xuICAgICAgICB1cGRhdGVQYWNrYWdlVmVyc2lvbihmaWxlSW5mbywgdmVyc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENPTlNUQU5UUy5QTEFURk9STS5BTkRST0lEOiB7XG4gICAgICAgIHVwZGF0ZUFuZHJvaWRWZXJzaW9uKGZpbGVJbmZvLCB2ZXJzaW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ09OU1RBTlRTLlBMQVRGT1JNLklPUzoge1xuICAgICAgICB1cGRhdGVJb3NWZXJzaW9uKGZpbGVJbmZvLCB2ZXJzaW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ09OU1RBTlRTLlBMQVRGT1JNLkFMTDoge1xuICAgICAgICB1cGRhdGVQYWNrYWdlVmVyc2lvbihmaWxlSW5mbywgdmVyc2lvbik7XG4gICAgICAgIHVwZGF0ZUFuZHJvaWRWZXJzaW9uKGZpbGVJbmZvLCB2ZXJzaW9uKTtcbiAgICAgICAgdXBkYXRlSW9zVmVyc2lvbihmaWxlSW5mbywgdmVyc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJ1aWxkTnVtYmVycyhmaWxlSW5mbywgcGxhdGZvcm0pIHtcbiAgICBjb25zdCB7IHZlcnNpb246IGJ1aWxkTnVtYmVyIH0gPSBhd2FpdCBhc2tWZXJzaW9uVGV4dCgnSW5wdXQgdGhlIG5ldyBCdWlsZCBOdW1iZXI6Jyk7XG4gICAgc3dpdGNoIChwbGF0Zm9ybSkge1xuICAgIGNhc2UgQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSUQ6IHtcbiAgICAgICAgdXBkYXRlQW5kcm9pZFZlcnNpb24oZmlsZUluZm8sIG51bGwsIGJ1aWxkTnVtYmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ09OU1RBTlRTLlBMQVRGT1JNLklPUzoge1xuICAgICAgICB1cGRhdGVJb3NWZXJzaW9uKGZpbGVJbmZvLCBudWxsLCBidWlsZE51bWJlcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENPTlNUQU5UUy5QTEFURk9STS5BTEw6IHtcbiAgICAgICAgdXBkYXRlQW5kcm9pZFZlcnNpb24oZmlsZUluZm8sIG51bGwsIGJ1aWxkTnVtYmVyKTtcbiAgICAgICAgdXBkYXRlSW9zVmVyc2lvbihmaWxlSW5mbywgbnVsbCwgYnVpbGROdW1iZXIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTd2l0Y2hDYXNlcyhmaWxlSW5mbykge1xuICAgIGNvbnN0IHsgdXBkYXRlRm9yIH0gPSBhd2FpdCBhc2tBYm91dFR5cGUoKTtcbiAgICBjb25zdCB7IHBsYXRmb3JtIH0gPSBhd2FpdCBhc2tBYm91dFBsYXRmb3JtKHVwZGF0ZUZvcik7XG5cbiAgICBzd2l0Y2ggKHVwZGF0ZUZvcikge1xuICAgIGNhc2UgQ09OU1RBTlRTLlVQREFURS5QUk9KRUNUX1ZFUlNJT05fVkFSSUFOVDoge1xuICAgICAgICBhd2FpdCB1cGRhdGVQcm9qZWN0VmVyc2lvbnMoZmlsZUluZm8sIHBsYXRmb3JtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ09OU1RBTlRTLlVQREFURS5CVUlMRF9OVU1CRVJfVkFSSUFOVDoge1xuICAgICAgICBhd2FpdCB1cGRhdGVCdWlsZE51bWJlcnMoZmlsZUluZm8sIHBsYXRmb3JtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVTd2l0Y2hDYXNlcyxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlucXVpcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==