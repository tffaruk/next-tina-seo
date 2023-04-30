"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _router = require("next/router");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = function router() {
  var router = (0, _router.useRouter)();
  return router;
};
var _default = router;
exports["default"] = _default;