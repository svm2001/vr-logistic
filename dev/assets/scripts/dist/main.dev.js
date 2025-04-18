"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = main;

var _lazyload = _interopRequireDefault(require("./modules/lazyload"));

var _modal = _interopRequireDefault(require("./modules/modal"));

var _validate = _interopRequireDefault(require("./modules/validate"));

var _phoneMask = _interopRequireDefault(require("./modules/phoneMask"));

var _header = _interopRequireDefault(require("./modules/header"));

var _smoothScrolling = _interopRequireDefault(require("./modules/smoothScrolling"));

var _lazyBlocks = _interopRequireDefault(require("./modules/lazy-blocks"));

var _accordion = _interopRequireDefault(require("./modules/accordion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import preloader from 'preloader-js'
function main() {
  (0, _lazyBlocks["default"])();
  (0, _lazyload["default"])();
  (0, _modal["default"])();
  (0, _header["default"])();
  (0, _validate["default"])();
  (0, _phoneMask["default"])();
  (0, _smoothScrolling["default"])();
  (0, _accordion["default"])(); // setTimeout(() => preloader.hide(), 0)
}