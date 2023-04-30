"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _head = _interopRequireDefault(require("next/head"));
var _router = require("next/router");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { useRouter } from "next/router";

var NextTinaSeo = function NextTinaSeo(_ref) {
  var title = _ref.title,
    meta_title = _ref.meta_title,
    meta_author = _ref.meta_author,
    meta_image = _ref.meta_image,
    description = _ref.description,
    image = _ref.image,
    noindex = _ref.noindex,
    canonical = _ref.canonical,
    base_url = _ref.base_url;
  var router = (0, _router.useRouter)();
  return /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, meta_title ? meta_title : title), canonical && /*#__PURE__*/_react["default"].createElement("link", {
    rel: "canonical",
    href: canonical,
    itemProp: "url"
  }), noindex && /*#__PURE__*/_react["default"].createElement("meta", {
    name: "robots",
    content: "noindex,nofollow"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "author",
    content: meta_author
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:title",
    content: meta_title ? meta_title : title
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:url",
    content: "".concat(base_url, "/").concat(router === null || router === void 0 ? void 0 : router.asPath.replace("/", ""))
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "twitter:title",
    content: meta_title ? meta_title : title
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:image",
    content: "".concat(base_url).concat(image ? image : meta_image)
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "twitter:image",
    content: "".concat(base_url).concat(image ? image : meta_image)
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }));
};
var _default = NextTinaSeo;
exports["default"] = _default;