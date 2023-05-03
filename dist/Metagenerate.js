"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metaData = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _meta = require("../utils/meta");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var metaData = (0, _meta.metaGenerator)();
exports.metaData = metaData;
function MetaGenerator() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("title", null, "title"));
}
var _default = MetaGenerator;
exports["default"] = _default;