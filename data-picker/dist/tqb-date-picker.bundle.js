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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _Factory = __webpack_require__(2);

var _Factory2 = _interopRequireDefault(_Factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jquery 是 date-picker 的依赖
(0, _jquery2.default)("body").on("click", ".tqb-date-picker-input", function (event) {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.dataset.start);
    // 获得的是一个JQ节点  不再是一个HTML了
    var target = (0, _jquery2.default)(event.currentTarget);
    console.log(target);
    // 可以获得所有的data-值
    var options = target.data();
    console.log(options);
    // Factory 用的太大了 如果别的地方也要用Factory的概念？ 打包时会有命名空间
    var picker = _Factory2.default.createDatePicker(target, options);
    // let target = $(event.currentTarget);
});

// 事件冒泡
// 事件注册掉到外层  好处是  可以实现多次调用

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DatePicker = __webpack_require__(3);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _RangeDatePicker = __webpack_require__(4);

var _RangeDatePicker2 = _interopRequireDefault(_RangeDatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 类  抽象类  提供生产类的功能， 满足多情况使用的需求
// webpack 最本质是  根据  import的顺序  将JS文件组织起来的算法
exports.default = {
    createDatePicker: function createDatePicker(el, options) {
        if ("scattered" in options) {
            return new _DatePicker2.default(el, options);
        } else {
            return new _RangeDatePicker2.default(el, options);
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatePicker = function DatePicker(el, options) {
    _classCallCheck(this, DatePicker);

    console.log("DatePicker");
};

exports.default = DatePicker;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RangeDatePicker = function RangeDatePicker(el, options) {
    _classCallCheck(this, RangeDatePicker);

    console.log("RangeDatePicker");
};

exports.default = RangeDatePicker;

/***/ })
/******/ ]);