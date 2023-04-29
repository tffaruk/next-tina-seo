"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _textConverter = require("@lib/utils/textConverter");
var _head = _interopRequireDefault(require("next/head"));
var _react = _interopRequireDefault(require("react"));
var __jsx = _react["default"].createElement;
var NextTinaSeo = function NextTinaSeo(_ref) {
  var title = _ref.title,
    meta_title = _ref.meta_title,
    description = _ref.description,
    image = _ref.image,
    noindex = _ref.noindex,
    canonical = _ref.canonical,
    base_url = _ref.base_url;
  return __jsx(_head["default"], null, __jsx("title", null, (0, _textConverter.plainify)(meta_title ? meta_title : title ? title : config.site.title)), canonical && __jsx("link", {
    rel: "canonical",
    href: canonical,
    itemProp: "url"
  }), noindex && __jsx("meta", {
    name: "robots",
    content: "noindex,nofollow"
  }), __jsx("meta", {
    property: "og:title",
    content: (0, _textConverter.plainify)(meta_title ? meta_title : title ? title : config.site.title)
  }), __jsx("meta", {
    name: "twitter:title",
    content: (0, _textConverter.plainify)(meta_title ? meta_title : title ? title : config.site.title)
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }));
};
var _default = NextTinaSeo;
exports["default"] = _default;