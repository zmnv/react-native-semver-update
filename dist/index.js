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

process.env.RNSEMUP_COMMAND = 'true';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc29sZS9jb2xvckJ5Qm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc29sZS9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL2NvbnNvbGUvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc29sZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy9maWxlcy9nZXRGaWxlc0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL2ZpbGVzL3JlYWRGaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy9maWxlcy9yZW5kZXJGaWxlc0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL2ZpbGVzL3VwZGF0ZUZpbGVzSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvZmlsZXMvdmFsaWRhdGVGaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvaXNEZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3NlYXJjaFBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy93cml0ZUZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZVN3aXRjaENhc2VzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnF1aXJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiUk5TRU1VUF9DT01NQU5EIiwiQXBwIiwiY29uc29sZSIsImxvZyIsIkxvZ28iLCJpc05lZWRUb0V4aXQiLCJ2YWxpZGF0ZUltcG9ydGFudEZpbGVzRXhpc3QiLCJmaWxlSW5mbyIsImdldEZpbGVzSW5mbyIsInJlbmRlckZpbGVzSW5mbyIsInVwZGF0ZVN3aXRjaENhc2VzIiwiYWZ0ZXJGaWxlSW5mbyIsImNvbG9yQnlCb29sZWFuIiwiaW5wdXQiLCJjaGFsayIsImdyZWVuQnJpZ2h0IiwicmVkQnJpZ2h0IiwiTGF5b3V0TGluZSIsInN0ciIsIndpZHRoIiwiZmlsbCIsImNvbG9yIiwiYSIsIm91dFN0ciIsImNvdW50IiwiY3VycmVudENoYXIiLCJjb25jYXQiLCJsZW5ndGgiLCJyZXBsYWNlIiwibWFnZW50YUJyaWdodCIsInBhY2thZ2VGaWxlIiwibmFtZSIsInZlcnNpb24iLCJyZW5kZXJUYWJsZSIsIm0xIiwibTIiLCJtMyIsIm00IiwibTUiLCJoMSIsInVuZGVmaW5lZCIsInllbGxvd0JyaWdodCIsImgyIiwiaDMiLCJjeWFuQnJpZ2h0IiwicjEiLCJ3aGl0ZUJyaWdodCIsInIyIiwidjExIiwidjEyIiwidjEzIiwidjIyIiwidjIzIiwiZ3JheSIsIkNPTlNUQU5UUyIsIlVQREFURSIsIlBST0pFQ1RfVkVSU0lPTl9WQVJJQU5UIiwiQlVJTERfTlVNQkVSX1ZBUklBTlQiLCJQTEFURk9STSIsIkFMTCIsIkFORFJPSUQiLCJJT1MiLCJQQUNLQUdFIiwiZ2V0TmF0aXZlVmVyc2lvbiIsImlucHV0UGF0dGVybiIsInNvdXJjZUZpbGUiLCJwcm9qZWN0VmVyc2lvbiIsIlJlZ0V4cCIsImJ1aWxkVmVyc2lvbiIsImV4ZWMiLCJidWlsZE51bWJlciIsIk51bWJlciIsImZpbGVzIiwiUGFja2FnZSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlIiwiUEFUSFMiLCJ2ZXJzaW9ucyIsIlNFQVJDSF9QQVRURVJOUyIsImlucHV0UGF0aCIsInJlYWRGaWxlU3luYyIsImhlYWRlciIsInBhY2thZ2VWZXJzaW9uIiwiaU9TVmVyc2lvbiIsImFuZHJvaWRWZXJzaW9uIiwidGFibGUiLCJTdHJpbmciLCJ1cGRhdGVQYWNrYWdlVmVyc2lvbiIsImZpbGVzSW5mbyIsIm5ld1ZlcnNpb24iLCJwYWNrYWdlUGF0aCIsIm5ld1BhY2thZ2UiLCJuZXdQYWNrYWdlRmlsZSIsInN0cmluZ2lmeSIsIndyaXRlRmlsZSIsInVwZGF0ZU5hdGl2ZVZlcnNpb24iLCJzb3VyY2VGaWxlRGF0YSIsInBsYXRmb3JtIiwic2VhcmNoUGF0dGVybiIsIm5ld1Byb2plY3RWZXJzaW9uIiwibmV3QnVpbGROdW1iZXIiLCJzb3VyY2VGaWxlUGF0aCIsInRvVXBwZXJDYXNlIiwiZmlsZURhdGEiLCJhbGwiLCJzdGFydCIsImZvdW5kIiwiZW5kIiwidXBkYXRlQW5kcm9pZFZlcnNpb24iLCJ1cGRhdGVJb3NWZXJzaW9uIiwiaXNFcnJvciIsIm1ldGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImlzRmlsZUV4aXN0IiwiZXhpc3RzU3luYyIsInBhdGgiLCJpc0ZvdW5kIiwiaXNEZXZlbG9wbWVudCIsImFza0Fib3V0VHlwZSIsInByb21wdCIsInR5cGUiLCJtZXNzYWdlIiwiY2hvaWNlcyIsImFuc3dlcnMiLCJhc2tBYm91dFBsYXRmb3JtIiwidXBkYXRlRm9yIiwiYXNrVmVyc2lvblRleHQiLCJhbnN3ZXIiLCJDVVJSRU5UX0RJUkVDVE9SWV9QQVRIIiwiY3dkIiwiZ2V0QXBwUHJvamVjdE5hbWUiLCJhcHBKc29uRmlsZVBhdGgiLCJyZXNvbHZlIiwiZXhpdCIsImFwcEpzb25GaWxlIiwiYXBwSnNvbk9iamVjdCIsImFwcE5hbWUiLCJwcm9kdWN0aW9uUGF0aHMiLCJkZXZlbG9wbWVudFBhdGhzIiwiYW5kcm9pZFNlYXJjaFBhdHRlcm5zIiwiaW9zU2VhcmNoUGF0dGVybnMiLCJjb25zb2xlUHJlZml4IiwiZmlsZVBhdGgiLCJkYXRhIiwid3JpdGVGaWxlU3luYyIsImVycm9yIiwibm9Xcml0ZUZpbGVNZXNzYWdlIiwidXBkYXRlUHJvamVjdFZlcnNpb25zIiwidXBkYXRlQnVpbGROdW1iZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBWixHQUE4QixNQUE5QjtBQUVBQyx3REFBRyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pIO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O1NBR2VBLEc7Ozs7Ozs7eUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFDQUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyx3REFBWjtBQUVBOztBQUNNQyx3QkFMVixHQUt5QkMsOEZBQTJCLEVBTHBEOztBQUFBLGlCQU1RRCxZQU5SO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBUVVFLG9CQVJWLEdBUXFCQyw4RUFBWSxFQVJqQztBQVNJQyxnR0FBZSxDQUFDRixRQUFELEVBQVcsUUFBWCxDQUFmO0FBVEo7QUFBQSxtQkFXVUcsNEVBQWlCLENBQUNILFFBQUQsQ0FYM0I7O0FBQUE7QUFhVUkseUJBYlYsR0FhMEJILDhFQUFZLEVBYnRDO0FBY0lDLGdHQUFlLENBQUNFLGFBQUQsRUFBZ0IsT0FBaEIsQ0FBZjs7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBaUJlVixrRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTVyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUMzQixNQUFJQSxLQUFKLEVBQVcsT0FBT0MsNENBQUssQ0FBQ0MsV0FBTixDQUFrQkYsS0FBbEIsQ0FBUDtBQUVYLFNBQU9DLDRDQUFLLENBQUNFLFNBQU4sQ0FBZ0JILEtBQWhCLENBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUEsU0FBU0ksVUFBVCxHQUFzRTtBQUFBLE1BQWxEQyxHQUFrRCx1RUFBNUMsRUFBNEM7QUFBQSxNQUF4Q0MsS0FBd0MsdUVBQWhDLEVBQWdDO0FBQUEsTUFBNUJDLElBQTRCLHVFQUFyQixHQUFxQjtBQUFBLE1BQWhCQyxLQUFnQix1RUFBUixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBSjtBQUFBLEdBQU87QUFDbEUsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFPQSxLQUFLLEdBQUdMLEtBQWYsRUFBc0I7QUFDbEIsUUFBTU0sV0FBVyxHQUFHUCxHQUFHLENBQUNNLEtBQUQsQ0FBSCxJQUFjSixJQUFsQztBQUNBRyxVQUFNLEdBQUdBLE1BQU0sQ0FBQ0csTUFBUCxDQUFjRCxXQUFkLENBQVQ7QUFDQUQsU0FBSyxJQUFJLENBQVQ7QUFDSDs7QUFFRCxNQUFJTixHQUFHLENBQUNTLE1BQUosR0FBYVIsS0FBakIsRUFBd0JJLE1BQU0sR0FBR0EsTUFBTSxDQUFDSyxPQUFQLENBQWUsSUFBZixFQUFxQixHQUFyQixDQUFUO0FBRXhCLFNBQU9QLEtBQUssQ0FBQ0UsTUFBRCxDQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1uQixJQUFJLEdBQUdVLDRDQUFLLENBQUNlLGFBQU4sV0FBdUJDLDBDQUFXLENBQUNDLElBQW5DLGNBQTJDRCwwQ0FBVyxDQUFDRSxPQUF2RCxFQUFiOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBMEQ7QUFBQSxpRkFBUCxFQUFPO0FBQUEsb0JBQXZEQyxFQUF1RDtBQUFBLE1BQXZEQSxFQUF1RCx1QkFBbEQsRUFBa0Q7QUFBQSxxQkFBOUNDLEVBQThDO0FBQUEsTUFBOUNBLEVBQThDLHdCQUF6QyxFQUF5QztBQUFBLHFCQUFyQ0MsRUFBcUM7QUFBQSxNQUFyQ0EsRUFBcUMsd0JBQWhDLEVBQWdDO0FBQUEscUJBQTVCQyxFQUE0QjtBQUFBLE1BQTVCQSxFQUE0Qix3QkFBdkIsRUFBdUI7QUFBQSxxQkFBbkJDLEVBQW1CO0FBQUEsTUFBbkJBLEVBQW1CLHdCQUFkLEVBQWM7O0FBQzFFLE1BQU1uQixLQUFLLEdBQUcsRUFBZDtBQUVBLE1BQU1vQixFQUFFLEdBQUd0QiwwREFBVSxDQUFDLFNBQUQsRUFBWUUsS0FBWixFQUFtQnFCLFNBQW5CLEVBQThCMUIsNENBQUssQ0FBQzJCLFlBQXBDLENBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHekIsMERBQVUsQ0FBQyxTQUFELEVBQVlFLEtBQVosRUFBbUJxQixTQUFuQixFQUE4QjFCLDRDQUFLLENBQUNDLFdBQXBDLENBQXJCO0FBQ0EsTUFBTTRCLEVBQUUsR0FBRzFCLDBEQUFVLENBQUMsS0FBRCxFQUFRRSxLQUFSLEVBQWVxQixTQUFmLEVBQTBCMUIsNENBQUssQ0FBQzhCLFVBQWhDLENBQXJCO0FBRUEsTUFBTUMsRUFBRSxHQUFHNUIsMERBQVUsQ0FBQyxpQkFBRCxFQUFvQixFQUFwQixFQUF3QnVCLFNBQXhCLEVBQW1DMUIsNENBQUssQ0FBQ2dDLFdBQXpDLENBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHOUIsMERBQVUsQ0FBQyxjQUFELEVBQWlCLEVBQWpCLEVBQXFCdUIsU0FBckIsRUFBZ0MxQiw0Q0FBSyxDQUFDZ0MsV0FBdEMsQ0FBckI7QUFFQSxNQUFNRSxHQUFHLEdBQUcvQiwwREFBVSxDQUFDaUIsRUFBRCxFQUFLZixLQUFMLEVBQVlxQixTQUFaLEVBQXVCMUIsNENBQUssQ0FBQzJCLFlBQTdCLENBQXRCO0FBQ0EsTUFBTVEsR0FBRyxHQUFHaEMsMERBQVUsQ0FBQ2tCLEVBQUQsRUFBS2hCLEtBQUwsRUFBWXFCLFNBQVosRUFBdUIxQiw0Q0FBSyxDQUFDQyxXQUE3QixDQUF0QjtBQUNBLE1BQU1tQyxHQUFHLEdBQUdqQywwREFBVSxDQUFDbUIsRUFBRCxFQUFLakIsS0FBTCxFQUFZcUIsU0FBWixFQUF1QjFCLDRDQUFLLENBQUM4QixVQUE3QixDQUF0QjtBQUVBLE1BQU1PLEdBQUcsR0FBR2xDLDBEQUFVLENBQUNvQixFQUFELEVBQUtsQixLQUFMLEVBQVlxQixTQUFaLEVBQXVCMUIsNENBQUssQ0FBQ0MsV0FBN0IsQ0FBdEI7QUFDQSxNQUFNcUMsR0FBRyxHQUFHbkMsMERBQVUsQ0FBQ3FCLEVBQUQsRUFBS25CLEtBQUwsRUFBWXFCLFNBQVosRUFBdUIxQiw0Q0FBSyxDQUFDOEIsVUFBN0IsQ0FBdEI7QUFFQSxTQUFPOUIsNENBQUssQ0FBQ3VDLElBQU4sa2FBRVlkLEVBRloscUJBRW9CRyxFQUZwQixxQkFFNEJDLEVBRjVCLG1aQUlQRSxFQUpPLHFCQUlDRyxHQUpELHFCQUlVQyxHQUpWLHFCQUltQkMsR0FKbkIsbVpBTVBILEVBTk8sd0NBTWVJLEdBTmYscUJBTXdCQyxHQU54QixxWUFBUDtBQVNILENBMUJEOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQSxJQUFNRSxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFO0FBQ0o7QUFDQTtBQUNBQywyQkFBdUIsRUFBRSxpQkFIckI7QUFJSkMsd0JBQW9CLEVBQUU7QUFKbEIsR0FETTtBQU9kQyxVQUFRLEVBQUU7QUFDTkMsT0FBRyxFQUFFLEtBREM7QUFFTkMsV0FBTyxFQUFFLFNBRkg7QUFHTkMsT0FBRyxFQUFFLEtBSEM7QUFJTkMsV0FBTyxFQUFFO0FBSkg7QUFQSSxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNDLGdCQUFULENBQTBCQyxZQUExQixFQUF3Q0MsVUFBeEMsRUFBb0Q7QUFDaEQsTUFBTUMsY0FBYyxHQUFHLElBQUlDLE1BQUosQ0FBV0gsWUFBWSxDQUFDSSxZQUF4QixFQUFzQ0MsSUFBdEMsQ0FBMkNKLFVBQTNDLEVBQXVELENBQXZELENBQXZCO0FBQ0EsTUFBTUssV0FBVyxHQUFHQyxNQUFNLENBQUMsSUFBSUosTUFBSixDQUFXSCxZQUFZLENBQUNNLFdBQXhCLEVBQXFDRCxJQUFyQyxDQUEwQ0osVUFBMUMsRUFBc0QsQ0FBdEQsQ0FBRCxDQUExQjtBQUVBLFNBQU87QUFDSEMsa0JBQWMsRUFBZEEsY0FERztBQUVISSxlQUFXLEVBQVhBO0FBRkcsR0FBUDtBQUlIOztBQUVELFNBQVM5RCxZQUFULEdBQXdCO0FBQUE7O0FBQ3BCLE1BQU1nRSxLQUFLO0FBQ1BDLFdBQU8sRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLDBEQUFRLENBQUNDLDRDQUFLLENBQUNmLE9BQVAsQ0FBbkI7QUFERiwwRkFFTlIsb0RBQVMsQ0FBQ0ksUUFBVixDQUFtQkcsR0FGYixFQUVtQmUsMERBQVEsQ0FBQ0MsNENBQUssQ0FBQ2hCLEdBQVAsQ0FGM0Isd0ZBR05QLG9EQUFTLENBQUNJLFFBQVYsQ0FBbUJFLE9BSGIsRUFHdUJnQiwwREFBUSxDQUFDQyw0Q0FBSyxDQUFDakIsT0FBUCxDQUgvQixVQUFYO0FBTUEsTUFBTWtCLFFBQVE7QUFDVkwsV0FBTyxFQUFFO0FBQ0xQLG9CQUFjLEVBQUVNLEtBQUssQ0FBQ0MsT0FBTixDQUFjekM7QUFEekI7QUFEQyw2RkFJVHNCLG9EQUFTLENBQUNJLFFBQVYsQ0FBbUJHLEdBSlYsRUFJZ0JFLGdCQUFnQixDQUN0Q2dCLCtEQUFlLENBQUNsQixHQURzQixFQUNqQlcsS0FBSyxDQUFDbEIsb0RBQVMsQ0FBQ0ksUUFBVixDQUFtQkcsR0FBcEIsQ0FEWSxDQUpoQywyRkFPVFAsb0RBQVMsQ0FBQ0ksUUFBVixDQUFtQkUsT0FQVixFQU9vQkcsZ0JBQWdCLENBQzFDZ0IsK0RBQWUsQ0FBQ25CLE9BRDBCLEVBQ2pCWSxLQUFLLENBQUNsQixvREFBUyxDQUFDSSxRQUFWLENBQW1CRSxPQUFwQixDQURZLENBUHBDLGFBQWQ7QUFZQSxTQUFPO0FBQ0hZLFNBQUssRUFBTEEsS0FERztBQUVITSxZQUFRLEVBQVJBO0FBRkcsR0FBUDtBQUlIOzs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUYsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUksU0FBUztBQUFBLFNBQUlDLHVEQUFZLENBQUNELFNBQUQsRUFBWSxNQUFaLENBQWhCO0FBQUEsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU3ZFLGVBQVQsQ0FBeUJGLFFBQXpCLEVBQW1DMkUsTUFBbkMsRUFBMkM7QUFDdkMsTUFBTUMsY0FBYyxHQUFHNUUsUUFBUSxDQUFDdUUsUUFBVCxDQUFrQkwsT0FBbEIsQ0FBMEJQLGNBQWpEO0FBQ0EsTUFBTWtCLFVBQVUsR0FBRzdFLFFBQVEsQ0FBQ3VFLFFBQVQsQ0FBa0J4QixvREFBUyxDQUFDSSxRQUFWLENBQW1CRyxHQUFyQyxDQUFuQjtBQUNBLE1BQU13QixjQUFjLEdBQUc5RSxRQUFRLENBQUN1RSxRQUFULENBQWtCeEIsb0RBQVMsQ0FBQ0ksUUFBVixDQUFtQkUsT0FBckMsQ0FBdkI7QUFFQSxNQUFNMEIsS0FBSyxHQUFHckQsa0VBQVcsQ0FBQztBQUN0QkMsTUFBRSxFQUFFaUQsY0FEa0I7QUFFdEJoRCxNQUFFLEVBQUVrRCxjQUFjLElBQUlBLGNBQWMsQ0FBQ25CLGNBRmY7QUFHdEI5QixNQUFFLEVBQUVnRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ2xCLGNBSFA7QUFJdEI3QixNQUFFLEVBQUVnRCxjQUFjLElBQUlFLE1BQU0sQ0FBQ0YsY0FBYyxDQUFDZixXQUFoQixDQUpOO0FBS3RCaEMsTUFBRSxFQUFFOEMsVUFBVSxJQUFJRyxNQUFNLENBQUNILFVBQVUsQ0FBQ2QsV0FBWixDQUxGO0FBTXRCWSxVQUFNLEVBQU5BO0FBTnNCLEdBQUQsQ0FBekI7QUFTQWhGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbUYsS0FBWjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Usb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDQyxVQUF6QyxFQUFxRDtBQUNqRCxNQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFFakIsTUFBTUMsV0FBVyxHQUFHZCw0Q0FBSyxDQUFDZixPQUExQjtBQUNBLE1BQU1oQyxXQUFXLEdBQUcyRCxTQUFTLENBQUNqQixLQUFWLENBQWdCQyxPQUFwQzs7QUFFQSxNQUFNbUIsVUFBVSxxQkFDVDlELFdBRFM7QUFFWkUsV0FBTyxFQUFFMEQ7QUFGRyxJQUFoQjs7QUFLQSxNQUFNRyxjQUFjLEdBQUduQixJQUFJLENBQUNvQixTQUFMLENBQWVGLFVBQWYsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakMsQ0FBdkI7O0FBRUEsTUFBSWxCLElBQUksQ0FBQ29CLFNBQUwsQ0FBZWhFLFdBQWYsRUFBNEIsSUFBNUIsRUFBa0MsQ0FBbEMsTUFBeUMrRCxjQUE3QyxFQUE2RDtBQUN6RDtBQUNBO0FBQ0g7O0FBRURFLDhEQUFTLENBQUNKLFdBQUQsRUFBY0UsY0FBZCxDQUFUO0FBQ0g7O0FBRUQsU0FBU0csbUJBQVQsQ0FDSUMsY0FESixFQUNvQkMsUUFEcEIsRUFDOEJDLGFBRDlCLEVBQzZDQyxpQkFEN0MsRUFDZ0VDLGNBRGhFLEVBRUU7QUFDRSxNQUFNQyxjQUFjLEdBQUd6Qiw0Q0FBSyxDQUFDcUIsUUFBUSxDQUFDSyxXQUFULEVBQUQsQ0FBNUI7QUFDQSxNQUFNdEMsVUFBVSxHQUFHZ0MsY0FBYyxDQUFDekIsS0FBZixDQUFxQjBCLFFBQXJCLENBQW5CO0FBRkYsOEJBSTBDRCxjQUFjLENBQUNuQixRQUp6RDtBQUFBLE1BSVVaLGNBSlYseUJBSVVBLGNBSlY7QUFBQSxNQUkwQkksV0FKMUIseUJBSTBCQSxXQUoxQjtBQU1FLE1BQUlrQyxRQUFRLEdBQUd2QyxVQUFmOztBQUVBLE1BQUltQyxpQkFBaUIsSUFBSWxDLGNBQWMsS0FBS2tDLGlCQUE1QyxFQUErRDtBQUMzREksWUFBUSxHQUFHQSxRQUFRLENBQUM1RSxPQUFULENBQWlCdUUsYUFBYSxDQUFDL0IsWUFBL0IsRUFBNkMsVUFBQ3FDLEdBQUQsRUFBTUMsS0FBTixFQUFhQyxLQUFiLEVBQW9CQyxHQUFwQjtBQUFBLHVCQUErQkYsS0FBL0IsU0FBdUNOLGlCQUF2QyxTQUEyRFEsR0FBM0Q7QUFBQSxLQUE3QyxDQUFYO0FBQ0g7O0FBRUQsTUFBSVAsY0FBYyxJQUFJL0IsV0FBVyxLQUFLK0IsY0FBdEMsRUFBc0Q7QUFDbERHLFlBQVEsR0FBR0EsUUFBUSxDQUFDNUUsT0FBVCxDQUFpQnVFLGFBQWEsQ0FBQzdCLFdBQS9CLEVBQTRDLFVBQUNtQyxHQUFELEVBQU1DLEtBQU4sRUFBYUMsS0FBYixFQUFvQkMsR0FBcEI7QUFBQSx1QkFBK0JGLEtBQS9CLFNBQXVDTCxjQUF2QyxTQUF3RE8sR0FBeEQ7QUFBQSxLQUE1QyxDQUFYO0FBQ0g7O0FBRUQsTUFBSTNDLFVBQVUsS0FBS3VDLFFBQW5CLEVBQTZCO0FBQ3pCO0FBQ0E7QUFDSDs7QUFFRFQsOERBQVMsQ0FBQ08sY0FBRCxFQUFpQkUsUUFBakIsQ0FBVDtBQUNIOztBQUVELFNBQVNLLG9CQUFULENBQThCWixjQUE5QixFQUE4Q0csaUJBQTlDLEVBQWlFQyxjQUFqRSxFQUFpRjtBQUM3RUwscUJBQW1CLENBQ2ZDLGNBRGUsRUFDQzNDLG9EQUFTLENBQUNJLFFBQVYsQ0FBbUJFLE9BRHBCLEVBQzZCbUIsK0RBQWUsQ0FBQ25CLE9BRDdDLEVBRWZ3QyxpQkFGZSxFQUVJQyxjQUZKLENBQW5CO0FBSUg7O0FBRUQsU0FBU1MsZ0JBQVQsQ0FBMEJiLGNBQTFCLEVBQTBDRyxpQkFBMUMsRUFBNkRDLGNBQTdELEVBQTZFO0FBQ3pFTCxxQkFBbUIsQ0FDZkMsY0FEZSxFQUNDM0Msb0RBQVMsQ0FBQ0ksUUFBVixDQUFtQkcsR0FEcEIsRUFDeUJrQiwrREFBZSxDQUFDbEIsR0FEekMsRUFFZnVDLGlCQUZlLEVBRUlDLGNBRkosQ0FBbkI7QUFJSDs7Ozs7Ozs7Ozs7Ozs7QUNoRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUtBLFNBQVMvRiwyQkFBVCxHQUF1QztBQUNuQyxNQUFJeUcsT0FBTyxHQUFHLEtBQWQ7QUFDQSxNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBQyxRQUFNLENBQUNDLElBQVAsQ0FBWXJDLDRDQUFaLEVBQW1Cc0MsT0FBbkIsQ0FBMkIsVUFBQUMsR0FBRyxFQUFJO0FBQzlCLFFBQU1DLFdBQVcsR0FBR0MscURBQVUsQ0FBQ3pDLDRDQUFLLENBQUN1QyxHQUFELENBQU4sQ0FBOUI7QUFDQUosUUFBSSxDQUFDSSxHQUFELENBQUosR0FBWTtBQUNSRyxVQUFJLEVBQUUxQyw0Q0FBSyxDQUFDdUMsR0FBRCxDQURIO0FBRVJJLGFBQU8sRUFBRUg7QUFGRCxLQUFaOztBQUtBLFFBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNkTixhQUFPLEdBQUcsSUFBVjtBQUNIO0FBQ0osR0FWRDs7QUFZQSxNQUFJQSxPQUFKLEVBQWE7QUFDVDdHLFdBQU8sQ0FBQ0MsR0FBUixDQUNJVyw0Q0FBSyxDQUFDRSxTQUFOLENBQWdCLG9DQUFoQixDQURKO0FBSUFpRyxVQUFNLENBQUNDLElBQVAsQ0FBWXJDLDRDQUFaLEVBQW1Cc0MsT0FBbkIsQ0FBMkIsVUFBQUMsR0FBRyxFQUFJO0FBQzlCbEgsYUFBTyxDQUFDQyxHQUFSLENBQVlpSCxHQUFaO0FBQ0FsSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCNkcsSUFBSSxDQUFDSSxHQUFELENBQUosQ0FBVUcsSUFBakM7QUFDQXJILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJTLDhFQUFjLENBQUNvRyxJQUFJLENBQUNJLEdBQUQsQ0FBSixDQUFVSSxPQUFYLENBQXpDO0FBQ0F0SCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFaO0FBQ0gsS0FMRDtBQU1IOztBQUVELFNBQU80RyxPQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDekNEO0FBQUE7QUFBTyxJQUFNVSxhQUFhLEdBQUczSCxhQUFBLEtBQXlCLGFBQS9DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBOztTQUVlNEgsWTs7Ozs7Ozt5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMwQkMsdURBQU0sQ0FBQyxDQUN6QjtBQUNJQyxrQkFBSSxFQUFFLE1BRFY7QUFFSTdGLGtCQUFJLEVBQUUsV0FGVjtBQUdJOEYscUJBQU8sRUFBRSw2QkFIYjtBQUlJQyxxQkFBTyxFQUFFLENBQ0x4RSxvREFBUyxDQUFDQyxNQUFWLENBQWlCRSxvQkFEWixFQUVMSCxvREFBUyxDQUFDQyxNQUFWLENBQWlCQyx1QkFGWjtBQUpiLGFBRHlCLENBQUQsQ0FEaEM7O0FBQUE7QUFDVXVFLG1CQURWO0FBQUEsNkNBYVdBLE9BYlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQWdCZUMsZ0I7Ozs7Ozs7eUVBQWYsa0JBQWdDQyxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUgsbUJBRFYsR0FDb0IsQ0FDWnhFLG9EQUFTLENBQUNJLFFBQVYsQ0FBbUJDLEdBRFAsRUFFWkwsb0RBQVMsQ0FBQ0ksUUFBVixDQUFtQkksT0FGUCxFQUdaUixvREFBUyxDQUFDSSxRQUFWLENBQW1CRSxPQUhQLEVBSVpOLG9EQUFTLENBQUNJLFFBQVYsQ0FBbUJHLEdBSlAsQ0FEcEI7QUFRSSxnQkFBSW9FLFNBQVMsS0FBSzNFLG9EQUFTLENBQUNDLE1BQVYsQ0FBaUJFLG9CQUFuQyxFQUF5RCxPQUFPcUUsT0FBTyxDQUFDLENBQUQsQ0FBZDtBQVI3RDtBQUFBLG1CQVUwQkgsdURBQU0sQ0FBQyxDQUN6QjtBQUNJQyxrQkFBSSxFQUFFLE1BRFY7QUFFSTdGLGtCQUFJLEVBQUUsVUFGVjtBQUdJOEYscUJBQU8sRUFBRSxzQkFIYjtBQUlJQyxxQkFBTyxFQUFQQTtBQUpKLGFBRHlCLENBQUQsQ0FWaEM7O0FBQUE7QUFVVUMsbUJBVlY7QUFBQSw4Q0FtQldBLE9BbkJYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FzQmVHLGM7Ozs7Ozs7eUVBQWYsa0JBQThCTCxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN5QkYsdURBQU0sQ0FBQyxDQUN4QjtBQUNJQyxrQkFBSSxFQUFFLE9BRFY7QUFFSTdGLGtCQUFJLEVBQUUsU0FGVjtBQUdJOEYscUJBQU8sRUFBUEE7QUFISixhQUR3QixDQUFELENBRC9COztBQUFBO0FBQ1VNLGtCQURWO0FBQUEsOENBU1dBLE1BVFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQyxzQkFBc0IsR0FBR3RJLE9BQU8sQ0FBQ3VJLEdBQVIsRUFBL0I7O0FBRUEsU0FBU0MsaUJBQVQsR0FBNkI7QUFDekIsTUFBTUMsZUFBZSxHQUFHZCw0REFBYSxHQUMvQmUsb0RBQU8sQ0FBQ0osc0JBQUQsRUFBeUIsd0JBQXpCLENBRHdCLEdBRS9CSSxvREFBTyxDQUFDSixzQkFBRCxFQUF5QixZQUF6QixDQUZiOztBQUlBLE1BQUksQ0FBQ2QscURBQVUsQ0FBQ2lCLGVBQUQsQ0FBZixFQUFrQztBQUM5QnJJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVyw0Q0FBSyxDQUFDRSxTQUFOLENBQWdCLHNDQUFoQixDQUFaLEVBQXFFb0gsc0JBQXJFO0FBQ0F0SSxXQUFPLENBQUMySSxJQUFSLENBQWEsQ0FBYjtBQUNIOztBQUVELE1BQU1DLFdBQVcsR0FBRzlELGdFQUFRLENBQUMyRCxlQUFELENBQTVCO0FBQ0EsTUFBTUksYUFBYSxHQUFHakUsSUFBSSxDQUFDQyxLQUFMLENBQVcrRCxXQUFYLENBQXRCO0FBRUEsTUFBTUUsT0FBTyxHQUFHRCxhQUFhLENBQUM1RyxJQUE5Qjs7QUFFQSxNQUFJLENBQUM2RyxPQUFMLEVBQWM7QUFDVjFJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaLEVBQW9EaUksc0JBQXBEO0FBQ0F0SSxXQUFPLENBQUMySSxJQUFSLENBQWEsQ0FBYjtBQUNIOztBQUVELFNBQU9FLGFBQWEsQ0FBQzVHLElBQXJCO0FBQ0g7O0FBRUQsSUFBTThHLGVBQWUsR0FBRztBQUNwQjtBQUNBL0UsU0FBTyxFQUFFMEUsb0RBQU8sQ0FBQ0osc0JBQUQsRUFBeUIsZ0JBQXpCLENBRkk7QUFHcEJ4RSxTQUFPLEVBQUU0RSxvREFBTyxDQUFDSixzQkFBRCxFQUF5Qiw0QkFBekIsQ0FISTtBQUlwQnZFLEtBQUcsRUFBRTJFLG9EQUFPLENBQUNKLHNCQUFELGtCQUFrQ0UsaUJBQWlCLEVBQW5EO0FBSlEsQ0FBeEI7QUFPQSxJQUFNUSxnQkFBZ0IsR0FBRztBQUNyQjtBQUNBaEYsU0FBTyxFQUFFMEUsb0RBQU8sQ0FBQ0osc0JBQUQsRUFBeUIsNEJBQXpCLENBRks7QUFHckJ4RSxTQUFPLEVBQUU0RSxvREFBTyxDQUFDSixzQkFBRCxFQUF5Qiw0QkFBekIsQ0FISztBQUlyQnZFLEtBQUcsRUFBRTJFLG9EQUFPLENBQUNKLHNCQUFELEVBQXlCLCtCQUF6QjtBQUpTLENBQXpCO0FBT0EsSUFBTXZELEtBQUssR0FBRzRDLDREQUFhLEdBQUdxQixnQkFBSCxHQUFzQkQsZUFBakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQSxJQUFNRSxxQkFBcUIsR0FBRztBQUMxQjNFLGNBQVksY0FBRSxnR0FBRjtBQUFBO0FBQUEsSUFEYztBQUUxQkUsYUFBVyxjQUFFLGtHQUFGO0FBQUE7QUFBQTtBQUZlLENBQTlCO0FBS0EsSUFBTTBFLGlCQUFpQixHQUFHO0FBQ3RCNUUsY0FBWSxjQUFFLHVHQUFGO0FBQUE7QUFBQSxJQURVO0FBRXRCRSxhQUFXLGNBQUUsNkdBQUY7QUFBQTtBQUFBO0FBRlcsQ0FBMUI7QUFLQSxJQUFNUyxlQUFlLEdBQUc7QUFDcEJuQixTQUFPLEVBQUVtRixxQkFEVztBQUVwQmxGLEtBQUcsRUFBRW1GO0FBRmUsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1DLGFBQWEsR0FBRyxhQUF0Qjs7QUFFQSxTQUFTbEQsU0FBVCxDQUFtQm1ELFFBQW5CLEVBQTZCQyxJQUE3QixFQUFtQztBQUMvQixNQUFJO0FBQ0FDLDREQUFhLENBQUNGLFFBQUQsRUFBV0MsSUFBWCxDQUFiO0FBQ0gsR0FGRCxDQUVFLE9BQU9FLEtBQVAsRUFBYztBQUNabkosV0FBTyxDQUFDQyxHQUFSLENBQVk4SSxhQUFaLEVBQTJCSSxLQUEzQjtBQUNILEdBTDhCLENBTy9COztBQUNIOztBQUVELFNBQVNDLGtCQUFULEdBQThCO0FBQzFCcEosU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBQ0E7QUFDQTs7U0FFZW9KLHFCOzs7Ozs7O3lFQUFmLGlCQUFxQ2hKLFFBQXJDLEVBQStDMkYsUUFBL0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQzhCZ0Msa0VBQWMsQ0FBQyxnQ0FBRCxDQUQ1Qzs7QUFBQTtBQUFBO0FBQ1lsRyxtQkFEWixRQUNZQSxPQURaO0FBQUEsMEJBR1lrRSxRQUhaO0FBQUEsNENBSVM1QywwREFBUyxDQUFDSSxRQUFWLENBQW1CSSxPQUo1Qix1QkFRU1IsMERBQVMsQ0FBQ0ksUUFBVixDQUFtQkUsT0FSNUIsdUJBWVNOLDBEQUFTLENBQUNJLFFBQVYsQ0FBbUJHLEdBWjVCLHdCQWdCU1AsMERBQVMsQ0FBQ0ksUUFBVixDQUFtQkMsR0FoQjVCO0FBQUE7O0FBQUE7QUFLUTZCLHFHQUFvQixDQUFDakYsUUFBRCxFQUFXeUIsT0FBWCxDQUFwQjtBQUxSOztBQUFBO0FBU1E2RSxxR0FBb0IsQ0FBQ3RHLFFBQUQsRUFBV3lCLE9BQVgsQ0FBcEI7QUFUUjs7QUFBQTtBQWFROEUsaUdBQWdCLENBQUN2RyxRQUFELEVBQVd5QixPQUFYLENBQWhCO0FBYlI7O0FBQUE7QUFpQlF3RCxxR0FBb0IsQ0FBQ2pGLFFBQUQsRUFBV3lCLE9BQVgsQ0FBcEI7QUFDQTZFLHFHQUFvQixDQUFDdEcsUUFBRCxFQUFXeUIsT0FBWCxDQUFwQjtBQUNBOEUsaUdBQWdCLENBQUN2RyxRQUFELEVBQVd5QixPQUFYLENBQWhCO0FBbkJSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0F5QmV3SCxrQjs7Ozs7Ozt5RUFBZixrQkFBa0NqSixRQUFsQyxFQUE0QzJGLFFBQTVDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQ2dDLGtFQUFjLENBQUMsNkJBQUQsQ0FEekQ7O0FBQUE7QUFBQTtBQUNxQjVELHVCQURyQixTQUNZdEMsT0FEWjtBQUFBLDJCQUVZa0UsUUFGWjtBQUFBLDhDQUdTNUMsMERBQVMsQ0FBQ0ksUUFBVixDQUFtQkUsT0FINUIsd0JBT1NOLDBEQUFTLENBQUNJLFFBQVYsQ0FBbUJHLEdBUDVCLHdCQVdTUCwwREFBUyxDQUFDSSxRQUFWLENBQW1CQyxHQVg1QjtBQUFBOztBQUFBO0FBSVFrRCxxR0FBb0IsQ0FBQ3RHLFFBQUQsRUFBVyxJQUFYLEVBQWlCK0QsV0FBakIsQ0FBcEI7QUFKUjs7QUFBQTtBQVFRd0MsaUdBQWdCLENBQUN2RyxRQUFELEVBQVcsSUFBWCxFQUFpQitELFdBQWpCLENBQWhCO0FBUlI7O0FBQUE7QUFZUXVDLHFHQUFvQixDQUFDdEcsUUFBRCxFQUFXLElBQVgsRUFBaUIrRCxXQUFqQixDQUFwQjtBQUNBd0MsaUdBQWdCLENBQUN2RyxRQUFELEVBQVcsSUFBWCxFQUFpQitELFdBQWpCLENBQWhCO0FBYlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQW1CZTVELGlCOzs7Ozs7O3lFQUFmLGtCQUFpQ0gsUUFBakM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2dDbUgsZ0VBQVksRUFENUM7O0FBQUE7QUFBQTtBQUNZTyxxQkFEWixTQUNZQSxTQURaO0FBQUE7QUFBQSxtQkFFK0JELG9FQUFnQixDQUFDQyxTQUFELENBRi9DOztBQUFBO0FBQUE7QUFFWS9CLG9CQUZaLFNBRVlBLFFBRlo7QUFBQSwyQkFJWStCLFNBSlo7QUFBQSw4Q0FLUzNFLDBEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLHVCQUwxQix5QkFTU0YsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsb0JBVDFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQU1jOEYscUJBQXFCLENBQUNoSixRQUFELEVBQVcyRixRQUFYLENBTm5DOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQVVjc0Qsa0JBQWtCLENBQUNqSixRQUFELEVBQVcyRixRQUFYLENBVmhDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBLG9FOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9zcmMvQXBwJztcblxucHJvY2Vzcy5lbnYuUk5TRU1VUF9DT01NQU5EID0gJ3RydWUnO1xuXG5BcHAoKTtcbiIsImltcG9ydCB7IHJlbmRlckZpbGVzSW5mbyB9IGZyb20gJy4vdG9vbHMvZmlsZXMvcmVuZGVyRmlsZXNJbmZvJztcbmltcG9ydCB7IGdldEZpbGVzSW5mbyB9IGZyb20gJy4vdG9vbHMvZmlsZXMvZ2V0RmlsZXNJbmZvJztcbmltcG9ydCB7IHZhbGlkYXRlSW1wb3J0YW50RmlsZXNFeGlzdCB9IGZyb20gJy4vdG9vbHMvZmlsZXMvdmFsaWRhdGVGaWxlcyc7XG5cbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL3Rvb2xzL2NvbnNvbGUvbG9nbyc7XG5cbmltcG9ydCB7IHVwZGF0ZVN3aXRjaENhc2VzIH0gZnJvbSAnLi91cGRhdGVTd2l0Y2hDYXNlcyc7XG5cblxuYXN5bmMgZnVuY3Rpb24gQXBwKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coTG9nbyk7XG5cbiAgICAvKiogQ2xvc2UgYXBwbGljYXRpb24gaWYgcmVxdWlyZWQgZmlsZXMgbm90IGZvdW5kICovXG4gICAgY29uc3QgaXNOZWVkVG9FeGl0ID0gdmFsaWRhdGVJbXBvcnRhbnRGaWxlc0V4aXN0KCk7XG4gICAgaWYgKGlzTmVlZFRvRXhpdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZmlsZUluZm8gPSBnZXRGaWxlc0luZm8oKTtcbiAgICByZW5kZXJGaWxlc0luZm8oZmlsZUluZm8sICdCZWZvcmUnKTtcblxuICAgIGF3YWl0IHVwZGF0ZVN3aXRjaENhc2VzKGZpbGVJbmZvKTtcblxuICAgIGNvbnN0IGFmdGVyRmlsZUluZm8gPSBnZXRGaWxlc0luZm8oKTtcbiAgICByZW5kZXJGaWxlc0luZm8oYWZ0ZXJGaWxlSW5mbywgJ0FmdGVyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmZ1bmN0aW9uIGNvbG9yQnlCb29sZWFuKGlucHV0KSB7XG4gICAgaWYgKGlucHV0KSByZXR1cm4gY2hhbGsuZ3JlZW5CcmlnaHQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNoYWxrLnJlZEJyaWdodChpbnB1dCk7XG59XG5cbmV4cG9ydCB7XG4gICAgY29sb3JCeUJvb2xlYW4sXG59O1xuIiwiZnVuY3Rpb24gTGF5b3V0TGluZShzdHIgPSAnJywgd2lkdGggPSAxNSwgZmlsbCA9ICcgJywgY29sb3IgPSBhID0+IGEpIHtcbiAgICBsZXQgb3V0U3RyID0gJyc7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIHdoaWxlIChjb3VudCA8IHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaGFyID0gc3RyW2NvdW50XSB8fCBmaWxsO1xuICAgICAgICBvdXRTdHIgPSBvdXRTdHIuY29uY2F0KGN1cnJlbnRDaGFyKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICB9XG5cbiAgICBpZiAoc3RyLmxlbmd0aCA+IHdpZHRoKSBvdXRTdHIgPSBvdXRTdHIucmVwbGFjZSgvLiQvLCAn4oCmJyk7XG5cbiAgICByZXR1cm4gY29sb3Iob3V0U3RyKTtcbn1cblxuZXhwb3J0IHtcbiAgICBMYXlvdXRMaW5lLFxufTtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgcGFja2FnZUZpbGUgZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuY29uc3QgTG9nbyA9IGNoYWxrLm1hZ2VudGFCcmlnaHQoYCR7cGFja2FnZUZpbGUubmFtZX0gJHtwYWNrYWdlRmlsZS52ZXJzaW9ufWApO1xuXG5leHBvcnQge1xuICAgIExvZ28sXG59O1xuIiwiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IExheW91dExpbmUgfSBmcm9tICcuL2xheW91dCc7XG5cbmNvbnN0IHJlbmRlclRhYmxlID0gKHsgbTEgPSAnJywgbTIgPSAnJywgbTMgPSAnJywgbTQgPSAnJywgbTUgPSAnJyB9ID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IDExO1xuXG4gICAgY29uc3QgaDEgPSBMYXlvdXRMaW5lKCdQYWNrYWdlJywgd2lkdGgsIHVuZGVmaW5lZCwgY2hhbGsueWVsbG93QnJpZ2h0KTtcbiAgICBjb25zdCBoMiA9IExheW91dExpbmUoJ0FuZHJvaWQnLCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay5ncmVlbkJyaWdodCk7XG4gICAgY29uc3QgaDMgPSBMYXlvdXRMaW5lKCdpT1MnLCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay5jeWFuQnJpZ2h0KTtcblxuICAgIGNvbnN0IHIxID0gTGF5b3V0TGluZSgnUHJvamVjdCBWZXJzaW9uJywgMTYsIHVuZGVmaW5lZCwgY2hhbGsud2hpdGVCcmlnaHQpO1xuICAgIGNvbnN0IHIyID0gTGF5b3V0TGluZSgnQnVpbGQgTnVtYmVyJywgMTYsIHVuZGVmaW5lZCwgY2hhbGsud2hpdGVCcmlnaHQpO1xuXG4gICAgY29uc3QgdjExID0gTGF5b3V0TGluZShtMSwgd2lkdGgsIHVuZGVmaW5lZCwgY2hhbGsueWVsbG93QnJpZ2h0KTtcbiAgICBjb25zdCB2MTIgPSBMYXlvdXRMaW5lKG0yLCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay5ncmVlbkJyaWdodCk7XG4gICAgY29uc3QgdjEzID0gTGF5b3V0TGluZShtMywgd2lkdGgsIHVuZGVmaW5lZCwgY2hhbGsuY3lhbkJyaWdodCk7XG5cbiAgICBjb25zdCB2MjIgPSBMYXlvdXRMaW5lKG00LCB3aWR0aCwgdW5kZWZpbmVkLCBjaGFsay5ncmVlbkJyaWdodCk7XG4gICAgY29uc3QgdjIzID0gTGF5b3V0TGluZShtNSwgd2lkdGgsIHVuZGVmaW5lZCwgY2hhbGsuY3lhbkJyaWdodCk7XG5cbiAgICByZXR1cm4gY2hhbGsuZ3JheShgXG7ilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilKzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilKzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilKzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbuKUgiAgICAgICAgICAgICAgICAgIOKUgiAke2gxfSDilIIgJHtoMn0g4pSCICR7aDN9IOKUglxu4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS84pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS84pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS84pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG7ilIIgJHtyMX0g4pSCICR7djExfSDilIIgJHt2MTJ9IOKUgiAke3YxM30g4pSCXG7ilJzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilLzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilKRcbuKUgiAke3IyfSDilIIgLSAgICAgICAgICAg4pSCICR7djIyfSDilIIgJHt2MjN9IOKUglxu4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS04pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS04pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS04pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG5gKTtcbn07XG5cbmV4cG9ydCB7XG4gICAgcmVuZGVyVGFibGUsXG59O1xuIiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFVQREFURToge1xuICAgICAgICAvLyBBTEw6ICdBbGwnLFxuICAgICAgICAvLyBQQUNLQUdFX1ZFUlNJT05fVkFSSUFOVDogJ1BhY2thZ2UgVmVyc2lvbicsXG4gICAgICAgIFBST0pFQ1RfVkVSU0lPTl9WQVJJQU5UOiAnUHJvamVjdCBWZXJzaW9uJyxcbiAgICAgICAgQlVJTERfTlVNQkVSX1ZBUklBTlQ6ICdCdWlsZCBOdW1iZXInLFxuICAgIH0sXG4gICAgUExBVEZPUk06IHtcbiAgICAgICAgQUxMOiAnQWxsJyxcbiAgICAgICAgQU5EUk9JRDogJ0FuZHJvaWQnLFxuICAgICAgICBJT1M6ICdpT1MnLFxuICAgICAgICBQQUNLQUdFOiAnUGFja2FnZScsXG4gICAgfSxcbn07XG5cbmV4cG9ydCB7XG4gICAgQ09OU1RBTlRTLFxufTtcbiIsImltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTRUFSQ0hfUEFUVEVSTlMgfSBmcm9tICcuLi9zZWFyY2hQYXR0ZXJucyc7XG5pbXBvcnQgeyBQQVRIUyB9IGZyb20gJy4uL3BhdGhzJztcblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICcuL3JlYWRGaWxlJztcblxuZnVuY3Rpb24gZ2V0TmF0aXZlVmVyc2lvbihpbnB1dFBhdHRlcm4sIHNvdXJjZUZpbGUpIHtcbiAgICBjb25zdCBwcm9qZWN0VmVyc2lvbiA9IG5ldyBSZWdFeHAoaW5wdXRQYXR0ZXJuLmJ1aWxkVmVyc2lvbikuZXhlYyhzb3VyY2VGaWxlKVsyXTtcbiAgICBjb25zdCBidWlsZE51bWJlciA9IE51bWJlcihuZXcgUmVnRXhwKGlucHV0UGF0dGVybi5idWlsZE51bWJlcikuZXhlYyhzb3VyY2VGaWxlKVsyXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0VmVyc2lvbixcbiAgICAgICAgYnVpbGROdW1iZXIsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZXNJbmZvKCkge1xuICAgIGNvbnN0IGZpbGVzID0ge1xuICAgICAgICBQYWNrYWdlOiBKU09OLnBhcnNlKHJlYWRGaWxlKFBBVEhTLlBBQ0tBR0UpKSxcbiAgICAgICAgW0NPTlNUQU5UUy5QTEFURk9STS5JT1NdOiByZWFkRmlsZShQQVRIUy5JT1MpLFxuICAgICAgICBbQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSURdOiByZWFkRmlsZShQQVRIUy5BTkRST0lEKSxcbiAgICB9O1xuXG4gICAgY29uc3QgdmVyc2lvbnMgPSB7XG4gICAgICAgIFBhY2thZ2U6IHtcbiAgICAgICAgICAgIHByb2plY3RWZXJzaW9uOiBmaWxlcy5QYWNrYWdlLnZlcnNpb24sXG4gICAgICAgIH0sXG4gICAgICAgIFtDT05TVEFOVFMuUExBVEZPUk0uSU9TXTogZ2V0TmF0aXZlVmVyc2lvbihcbiAgICAgICAgICAgIFNFQVJDSF9QQVRURVJOUy5JT1MsIGZpbGVzW0NPTlNUQU5UUy5QTEFURk9STS5JT1NdLFxuICAgICAgICApLFxuICAgICAgICBbQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSURdOiBnZXROYXRpdmVWZXJzaW9uKFxuICAgICAgICAgICAgU0VBUkNIX1BBVFRFUk5TLkFORFJPSUQsIGZpbGVzW0NPTlNUQU5UUy5QTEFURk9STS5BTkRST0lEXSxcbiAgICAgICAgKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZXMsXG4gICAgICAgIHZlcnNpb25zLFxuICAgIH07XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0RmlsZXNJbmZvLFxufTtcbiIsImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGNvbnN0IHJlYWRGaWxlID0gaW5wdXRQYXRoID0+IHJlYWRGaWxlU3luYyhpbnB1dFBhdGgsICd1dGY4Jyk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgcmVuZGVyVGFibGUgfSBmcm9tICcuLi9jb25zb2xlL3RhYmxlJztcblxuZnVuY3Rpb24gcmVuZGVyRmlsZXNJbmZvKGZpbGVJbmZvLCBoZWFkZXIpIHtcbiAgICBjb25zdCBwYWNrYWdlVmVyc2lvbiA9IGZpbGVJbmZvLnZlcnNpb25zLlBhY2thZ2UucHJvamVjdFZlcnNpb247XG4gICAgY29uc3QgaU9TVmVyc2lvbiA9IGZpbGVJbmZvLnZlcnNpb25zW0NPTlNUQU5UUy5QTEFURk9STS5JT1NdO1xuICAgIGNvbnN0IGFuZHJvaWRWZXJzaW9uID0gZmlsZUluZm8udmVyc2lvbnNbQ09OU1RBTlRTLlBMQVRGT1JNLkFORFJPSURdO1xuXG4gICAgY29uc3QgdGFibGUgPSByZW5kZXJUYWJsZSh7XG4gICAgICAgIG0xOiBwYWNrYWdlVmVyc2lvbixcbiAgICAgICAgbTI6IGFuZHJvaWRWZXJzaW9uICYmIGFuZHJvaWRWZXJzaW9uLnByb2plY3RWZXJzaW9uLFxuICAgICAgICBtMzogaU9TVmVyc2lvbiAmJiBpT1NWZXJzaW9uLnByb2plY3RWZXJzaW9uLFxuICAgICAgICBtNDogYW5kcm9pZFZlcnNpb24gJiYgU3RyaW5nKGFuZHJvaWRWZXJzaW9uLmJ1aWxkTnVtYmVyKSxcbiAgICAgICAgbTU6IGlPU1ZlcnNpb24gJiYgU3RyaW5nKGlPU1ZlcnNpb24uYnVpbGROdW1iZXIpLFxuICAgICAgICBoZWFkZXIsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh0YWJsZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgcmVuZGVyRmlsZXNJbmZvLFxufTtcbiIsImltcG9ydCB7IFBBVEhTIH0gZnJvbSAnLi4vcGF0aHMnO1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnLi4vd3JpdGVGaWxlJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTRUFSQ0hfUEFUVEVSTlMgfSBmcm9tICcuLi9zZWFyY2hQYXR0ZXJucyc7XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2VWZXJzaW9uKGZpbGVzSW5mbywgbmV3VmVyc2lvbikge1xuICAgIGlmICghbmV3VmVyc2lvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgcGFja2FnZVBhdGggPSBQQVRIUy5QQUNLQUdFO1xuICAgIGNvbnN0IHBhY2thZ2VGaWxlID0gZmlsZXNJbmZvLmZpbGVzLlBhY2thZ2U7XG5cbiAgICBjb25zdCBuZXdQYWNrYWdlID0ge1xuICAgICAgICAuLi5wYWNrYWdlRmlsZSxcbiAgICAgICAgdmVyc2lvbjogbmV3VmVyc2lvbixcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3UGFja2FnZUZpbGUgPSBKU09OLnN0cmluZ2lmeShuZXdQYWNrYWdlLCBudWxsLCAyKTtcblxuICAgIGlmIChKU09OLnN0cmluZ2lmeShwYWNrYWdlRmlsZSwgbnVsbCwgMikgPT09IG5ld1BhY2thZ2VGaWxlKSB7XG4gICAgICAgIC8vIG5vV3JpdGVGaWxlTWVzc2FnZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3JpdGVGaWxlKHBhY2thZ2VQYXRoLCBuZXdQYWNrYWdlRmlsZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU5hdGl2ZVZlcnNpb24oXG4gICAgc291cmNlRmlsZURhdGEsIHBsYXRmb3JtLCBzZWFyY2hQYXR0ZXJuLCBuZXdQcm9qZWN0VmVyc2lvbiwgbmV3QnVpbGROdW1iZXIsXG4pIHtcbiAgICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IFBBVEhTW3BsYXRmb3JtLnRvVXBwZXJDYXNlKCldO1xuICAgIGNvbnN0IHNvdXJjZUZpbGUgPSBzb3VyY2VGaWxlRGF0YS5maWxlc1twbGF0Zm9ybV07XG5cbiAgICBjb25zdCB7IHByb2plY3RWZXJzaW9uLCBidWlsZE51bWJlciB9ID0gc291cmNlRmlsZURhdGEudmVyc2lvbnM7XG5cbiAgICBsZXQgZmlsZURhdGEgPSBzb3VyY2VGaWxlO1xuXG4gICAgaWYgKG5ld1Byb2plY3RWZXJzaW9uICYmIHByb2plY3RWZXJzaW9uICE9PSBuZXdQcm9qZWN0VmVyc2lvbikge1xuICAgICAgICBmaWxlRGF0YSA9IGZpbGVEYXRhLnJlcGxhY2Uoc2VhcmNoUGF0dGVybi5idWlsZFZlcnNpb24sIChhbGwsIHN0YXJ0LCBmb3VuZCwgZW5kKSA9PiBgJHtzdGFydH0ke25ld1Byb2plY3RWZXJzaW9ufSR7ZW5kfWApO1xuICAgIH1cblxuICAgIGlmIChuZXdCdWlsZE51bWJlciAmJiBidWlsZE51bWJlciAhPT0gbmV3QnVpbGROdW1iZXIpIHtcbiAgICAgICAgZmlsZURhdGEgPSBmaWxlRGF0YS5yZXBsYWNlKHNlYXJjaFBhdHRlcm4uYnVpbGROdW1iZXIsIChhbGwsIHN0YXJ0LCBmb3VuZCwgZW5kKSA9PiBgJHtzdGFydH0ke25ld0J1aWxkTnVtYmVyfSR7ZW5kfWApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2VGaWxlID09PSBmaWxlRGF0YSkge1xuICAgICAgICAvLyBub1dyaXRlRmlsZU1lc3NhZ2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyaXRlRmlsZShzb3VyY2VGaWxlUGF0aCwgZmlsZURhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBbmRyb2lkVmVyc2lvbihzb3VyY2VGaWxlRGF0YSwgbmV3UHJvamVjdFZlcnNpb24sIG5ld0J1aWxkTnVtYmVyKSB7XG4gICAgdXBkYXRlTmF0aXZlVmVyc2lvbihcbiAgICAgICAgc291cmNlRmlsZURhdGEsIENPTlNUQU5UUy5QTEFURk9STS5BTkRST0lELCBTRUFSQ0hfUEFUVEVSTlMuQU5EUk9JRCxcbiAgICAgICAgbmV3UHJvamVjdFZlcnNpb24sIG5ld0J1aWxkTnVtYmVyLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUlvc1ZlcnNpb24oc291cmNlRmlsZURhdGEsIG5ld1Byb2plY3RWZXJzaW9uLCBuZXdCdWlsZE51bWJlcikge1xuICAgIHVwZGF0ZU5hdGl2ZVZlcnNpb24oXG4gICAgICAgIHNvdXJjZUZpbGVEYXRhLCBDT05TVEFOVFMuUExBVEZPUk0uSU9TLCBTRUFSQ0hfUEFUVEVSTlMuSU9TLFxuICAgICAgICBuZXdQcm9qZWN0VmVyc2lvbiwgbmV3QnVpbGROdW1iZXIsXG4gICAgKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1cGRhdGVQYWNrYWdlVmVyc2lvbixcbiAgICB1cGRhdGVBbmRyb2lkVmVyc2lvbixcbiAgICB1cGRhdGVJb3NWZXJzaW9uLFxufTtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuXG5pbXBvcnQgeyBQQVRIUyB9IGZyb20gJy4uL3BhdGhzJztcbmltcG9ydCB7IGNvbG9yQnlCb29sZWFuIH0gZnJvbSAnLi4vY29uc29sZS9jb2xvckJ5Qm9vbGVhbic7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYW55IHJlcXVpcmVkIGZpbGUgaW4gYFBBVEhTYCBub3QgZXhpc3RcbiAqIGFuZCBzaG93IHdhcm5pbmcgaW4gY29uc29sZS5cbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbXBvcnRhbnRGaWxlc0V4aXN0KCkge1xuICAgIGxldCBpc0Vycm9yID0gZmFsc2U7XG4gICAgY29uc3QgbWV0YSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoUEFUSFMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgaXNGaWxlRXhpc3QgPSBleGlzdHNTeW5jKFBBVEhTW2tleV0pO1xuICAgICAgICBtZXRhW2tleV0gPSB7XG4gICAgICAgICAgICBwYXRoOiBQQVRIU1trZXldLFxuICAgICAgICAgICAgaXNGb3VuZDogaXNGaWxlRXhpc3QsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFpc0ZpbGVFeGlzdCkge1xuICAgICAgICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgY2hhbGsucmVkQnJpZ2h0KCdbRXJyb3JdIFNvbWUgb2YgZmlsZXMgbm90IGZvdW5kOlxcbicpLFxuICAgICAgICApO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKFBBVEhTKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+KAkyBwYXRoOicsIG1ldGFba2V5XS5wYXRoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfigJMgaXMgZm91bmQ6JywgY29sb3JCeUJvb2xlYW4obWV0YVtrZXldLmlzRm91bmQpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRXJyb3I7XG59XG5cbmV4cG9ydCB7XG4gICAgdmFsaWRhdGVJbXBvcnRhbnRGaWxlc0V4aXN0LFxufTtcbiIsImV4cG9ydCBjb25zdCBpc0RldmVsb3BtZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG4iLCJpbXBvcnQgeyBwcm9tcHQgfSBmcm9tICdpbnF1aXJlcic7XG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFza0Fib3V0VHlwZSgpIHtcbiAgICBjb25zdCBhbnN3ZXJzID0gYXdhaXQgcHJvbXB0KFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZUZvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnV2hhdCBkbyB5b3Ugd2FudCB0byB1cGRhdGU/JyxcbiAgICAgICAgICAgIGNob2ljZXM6IFtcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuVVBEQVRFLkJVSUxEX05VTUJFUl9WQVJJQU5ULFxuICAgICAgICAgICAgICAgIENPTlNUQU5UUy5VUERBVEUuUFJPSkVDVF9WRVJTSU9OX1ZBUklBTlQsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIGFuc3dlcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFza0Fib3V0UGxhdGZvcm0odXBkYXRlRm9yKSB7XG4gICAgY29uc3QgY2hvaWNlcyA9IFtcbiAgICAgICAgQ09OU1RBTlRTLlBMQVRGT1JNLkFMTCxcbiAgICAgICAgQ09OU1RBTlRTLlBMQVRGT1JNLlBBQ0tBR0UsXG4gICAgICAgIENPTlNUQU5UUy5QTEFURk9STS5BTkRST0lELFxuICAgICAgICBDT05TVEFOVFMuUExBVEZPUk0uSU9TLFxuICAgIF07XG5cbiAgICBpZiAodXBkYXRlRm9yID09PSBDT05TVEFOVFMuVVBEQVRFLkJVSUxEX05VTUJFUl9WQVJJQU5UKSBkZWxldGUgY2hvaWNlc1sxXTtcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBwcm9tcHQoW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICBuYW1lOiAncGxhdGZvcm0nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Nob29zZSB0aGUgcGxhdGZvcm06JyxcbiAgICAgICAgICAgIGNob2ljZXMsXG4gICAgICAgIH0sXG4gICAgXSk7XG5cbiAgICByZXR1cm4gYW5zd2Vycztcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXNrVmVyc2lvblRleHQobWVzc2FnZSkge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IHByb21wdChbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9LFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIGFuc3dlcjtcbn1cblxuZXhwb3J0IHtcbiAgICBhc2tWZXJzaW9uVGV4dCxcbiAgICBhc2tBYm91dFR5cGUsXG4gICAgYXNrQWJvdXRQbGF0Zm9ybSxcbn07XG4iLCJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICcuL2ZpbGVzL3JlYWRGaWxlJztcbmltcG9ydCB7IGlzRGV2ZWxvcG1lbnQgfSBmcm9tICcuL2lzRGV2ZWxvcG1lbnQnO1xuXG5jb25zdCBDVVJSRU5UX0RJUkVDVE9SWV9QQVRIID0gcHJvY2Vzcy5jd2QoKTtcblxuZnVuY3Rpb24gZ2V0QXBwUHJvamVjdE5hbWUoKSB7XG4gICAgY29uc3QgYXBwSnNvbkZpbGVQYXRoID0gaXNEZXZlbG9wbWVudFxuICAgICAgICA/IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgJy4vc3JjL3NvdXJjZXMvYXBwLmpzb24nKVxuICAgICAgICA6IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgJy4vYXBwLmpzb24nKTtcblxuICAgIGlmICghZXhpc3RzU3luYyhhcHBKc29uRmlsZVBhdGgpKSB7IFxuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWRCcmlnaHQoJ1tybnNlbXVwXSBGaWxlIGFwcC5qc29uIG5vdCBmb3VuZCBpbicpLCBDVVJSRU5UX0RJUkVDVE9SWV9QQVRIKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcEpzb25GaWxlID0gcmVhZEZpbGUoYXBwSnNvbkZpbGVQYXRoKTtcbiAgICBjb25zdCBhcHBKc29uT2JqZWN0ID0gSlNPTi5wYXJzZShhcHBKc29uRmlsZSk7XG5cbiAgICBjb25zdCBhcHBOYW1lID0gYXBwSnNvbk9iamVjdC5uYW1lO1xuXG4gICAgaWYgKCFhcHBOYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHAgbmFtZSBub3QgZm91bmQgaW4gYXBwLmpzb24gZnJvbSAnLCBDVVJSRU5UX0RJUkVDVE9SWV9QQVRIKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cblxuICAgIHJldHVybiBhcHBKc29uT2JqZWN0Lm5hbWU7XG59XG5cbmNvbnN0IHByb2R1Y3Rpb25QYXRocyA9IHtcbiAgICAvKiogRk9SIFBST0RVQ1RJT04gKi9cbiAgICBQQUNLQUdFOiByZXNvbHZlKENVUlJFTlRfRElSRUNUT1JZX1BBVEgsICcuL3BhY2thZ2UuanNvbicpLFxuICAgIEFORFJPSUQ6IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgJy4vYW5kcm9pZC9hcHAvYnVpbGQuZ3JhZGxlJyksXG4gICAgSU9TOiByZXNvbHZlKENVUlJFTlRfRElSRUNUT1JZX1BBVEgsIGAuL2lvcy8ke2dldEFwcFByb2plY3ROYW1lKCl9Lnhjb2RlcHJvai9wcm9qZWN0LnBieHByb2pgKSxcbn07XG5cbmNvbnN0IGRldmVsb3BtZW50UGF0aHMgPSB7XG4gICAgLyoqIEZPUiBERVZFTE9QTUVOVCAqL1xuICAgIFBBQ0tBR0U6IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgJy4vc3JjL3NvdXJjZXMvcGFja2FnZS5qc29uJyksXG4gICAgQU5EUk9JRDogcmVzb2x2ZShDVVJSRU5UX0RJUkVDVE9SWV9QQVRILCAnLi9zcmMvc291cmNlcy9idWlsZC5ncmFkbGUnKSxcbiAgICBJT1M6IHJlc29sdmUoQ1VSUkVOVF9ESVJFQ1RPUllfUEFUSCwgJy4vc3JjL3NvdXJjZXMvcHJvamVjdC5wYnhwcm9qJyksXG59O1xuXG5jb25zdCBQQVRIUyA9IGlzRGV2ZWxvcG1lbnQgPyBkZXZlbG9wbWVudFBhdGhzIDogcHJvZHVjdGlvblBhdGhzO1xuXG5leHBvcnQge1xuICAgIFBBVEhTLFxufTtcbiIsImNvbnN0IGFuZHJvaWRTZWFyY2hQYXR0ZXJucyA9IHtcbiAgICBidWlsZFZlcnNpb246IC8oXlxccyp2ZXJzaW9uTmFtZSBcIikoPzxidWlsZFZlcnNpb24+LiopKFwiJCkvZ20sXG4gICAgYnVpbGROdW1iZXI6IC8oXlxccyp2ZXJzaW9uQ29kZSApKD88YnVpbGROdW1iZXI+XFxkKikoJCkvZ20sXG59O1xuXG5jb25zdCBpb3NTZWFyY2hQYXR0ZXJucyA9IHtcbiAgICBidWlsZFZlcnNpb246IC8oXlxccypNQVJLRVRJTkdfVkVSU0lPTiA9ICkoPzxidWlsZFZlcnNpb24+LiopKDskKS9nbSxcbiAgICBidWlsZE51bWJlcjogLyheXFxzKkNVUlJFTlRfUFJPSkVDVF9WRVJTSU9OID0gKSg/PGJ1aWxkTnVtYmVyPi4qKSg7JCkvZ20sXG59O1xuXG5jb25zdCBTRUFSQ0hfUEFUVEVSTlMgPSB7XG4gICAgQU5EUk9JRDogYW5kcm9pZFNlYXJjaFBhdHRlcm5zLFxuICAgIElPUzogaW9zU2VhcmNoUGF0dGVybnMsXG59O1xuXG5leHBvcnQge1xuICAgIFNFQVJDSF9QQVRURVJOUyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuXG5jb25zdCBjb25zb2xlUHJlZml4ID0gJ1t3cml0ZUZpbGVdJztcblxuZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgd3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coY29uc29sZVByZWZpeCwgZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKGAke2NvbnNvbGVQcmVmaXh9IGZpbGUgdXBkYXRlZDpgLCBmaWxlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIG5vV3JpdGVGaWxlTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZygnTk8gQ0hBTkdFUycpO1xufVxuXG5leHBvcnQge1xuICAgIHdyaXRlRmlsZSxcbiAgICBub1dyaXRlRmlsZU1lc3NhZ2UsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZGVmYXVsdC1jYXNlICovXG5pbXBvcnQgeyBhc2tWZXJzaW9uVGV4dCwgYXNrQWJvdXRUeXBlLCBhc2tBYm91dFBsYXRmb3JtIH0gZnJvbSAnLi90b29scy9tZW51JztcbmltcG9ydCB7IHVwZGF0ZVBhY2thZ2VWZXJzaW9uLCB1cGRhdGVBbmRyb2lkVmVyc2lvbiwgdXBkYXRlSW9zVmVyc2lvbiB9IGZyb20gJy4vdG9vbHMvZmlsZXMvdXBkYXRlRmlsZXNJbmZvJztcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4vdG9vbHMvY29uc3RhbnRzJztcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFZlcnNpb25zKGZpbGVJbmZvLCBwbGF0Zm9ybSkge1xuICAgIGNvbnN0IHsgdmVyc2lvbiB9ID0gYXdhaXQgYXNrVmVyc2lvblRleHQoJ0lucHV0IHRoZSBuZXcgUHJvamVjdCBWZXJzaW9uOicpO1xuXG4gICAgc3dpdGNoIChwbGF0Zm9ybSkge1xuICAgIGNhc2UgQ09OU1RBTlRTLlBMQVRGT1JNLlBBQ0tBR0U6IHtcbiAgICAgICAgdXBkYXRlUGFja2FnZVZlcnNpb24oZmlsZUluZm8sIHZlcnNpb24pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDT05TVEFOVFMuUExBVEZPUk0uQU5EUk9JRDoge1xuICAgICAgICB1cGRhdGVBbmRyb2lkVmVyc2lvbihmaWxlSW5mbywgdmVyc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENPTlNUQU5UUy5QTEFURk9STS5JT1M6IHtcbiAgICAgICAgdXBkYXRlSW9zVmVyc2lvbihmaWxlSW5mbywgdmVyc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENPTlNUQU5UUy5QTEFURk9STS5BTEw6IHtcbiAgICAgICAgdXBkYXRlUGFja2FnZVZlcnNpb24oZmlsZUluZm8sIHZlcnNpb24pO1xuICAgICAgICB1cGRhdGVBbmRyb2lkVmVyc2lvbihmaWxlSW5mbywgdmVyc2lvbik7XG4gICAgICAgIHVwZGF0ZUlvc1ZlcnNpb24oZmlsZUluZm8sIHZlcnNpb24pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVCdWlsZE51bWJlcnMoZmlsZUluZm8sIHBsYXRmb3JtKSB7XG4gICAgY29uc3QgeyB2ZXJzaW9uOiBidWlsZE51bWJlciB9ID0gYXdhaXQgYXNrVmVyc2lvblRleHQoJ0lucHV0IHRoZSBuZXcgQnVpbGQgTnVtYmVyOicpO1xuICAgIHN3aXRjaCAocGxhdGZvcm0pIHtcbiAgICBjYXNlIENPTlNUQU5UUy5QTEFURk9STS5BTkRST0lEOiB7XG4gICAgICAgIHVwZGF0ZUFuZHJvaWRWZXJzaW9uKGZpbGVJbmZvLCBudWxsLCBidWlsZE51bWJlcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENPTlNUQU5UUy5QTEFURk9STS5JT1M6IHtcbiAgICAgICAgdXBkYXRlSW9zVmVyc2lvbihmaWxlSW5mbywgbnVsbCwgYnVpbGROdW1iZXIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDT05TVEFOVFMuUExBVEZPUk0uQUxMOiB7XG4gICAgICAgIHVwZGF0ZUFuZHJvaWRWZXJzaW9uKGZpbGVJbmZvLCBudWxsLCBidWlsZE51bWJlcik7XG4gICAgICAgIHVwZGF0ZUlvc1ZlcnNpb24oZmlsZUluZm8sIG51bGwsIGJ1aWxkTnVtYmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3dpdGNoQ2FzZXMoZmlsZUluZm8pIHtcbiAgICBjb25zdCB7IHVwZGF0ZUZvciB9ID0gYXdhaXQgYXNrQWJvdXRUeXBlKCk7XG4gICAgY29uc3QgeyBwbGF0Zm9ybSB9ID0gYXdhaXQgYXNrQWJvdXRQbGF0Zm9ybSh1cGRhdGVGb3IpO1xuXG4gICAgc3dpdGNoICh1cGRhdGVGb3IpIHtcbiAgICBjYXNlIENPTlNUQU5UUy5VUERBVEUuUFJPSkVDVF9WRVJTSU9OX1ZBUklBTlQ6IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlUHJvamVjdFZlcnNpb25zKGZpbGVJbmZvLCBwbGF0Zm9ybSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENPTlNUQU5UUy5VUERBVEUuQlVJTERfTlVNQkVSX1ZBUklBTlQ6IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlQnVpbGROdW1iZXJzKGZpbGVJbmZvLCBwbGF0Zm9ybSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgdXBkYXRlU3dpdGNoQ2FzZXMsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=