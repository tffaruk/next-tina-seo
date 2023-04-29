"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _head = _interopRequireDefault(require("next/head"));
var _router = require("next/router");
var _config = _interopRequireDefault(require("../config.json"));
var _textConverter = require("../textConverter");
var _react = _interopRequireDefault(require("react"));
var __jsx = _react.createElement;
var NextTinaSeo = function NextTinaSeo(_ref) {
  var title = _ref.title,
    meta_title = _ref.meta_title,
    description = _ref.description,
    image = _ref.image,
    noindex = _ref.noindex,
    canonical = _ref.canonical;
  var _config$metadata = _config["default"].metadata,
    meta_image = _config$metadata.meta_image,
    meta_author = _config$metadata.meta_author,
    meta_description = _config$metadata.meta_description;
  var base_url = _config["default"].site.base_url;
  var router = (0, _router.useRouter)();
  return __jsx(
    _head["default"],
    null,
    __jsx(
      "title",
      null,
      (0, _textConverter.plainify)(
        meta_title ? meta_title : title ? title : _config["default"].site.title
      )
    ),
    canonical &&
      __jsx("link", {
        rel: "canonical",
        href: canonical,
        itemProp: "url",
      }),
    noindex &&
      __jsx("meta", {
        name: "robots",
        content: "noindex,nofollow",
      }),
    __jsx("meta", {
      name: "description",
      content: (0, _textConverter.plainify)(
        description ? description : meta_description
      ),
    }),
    __jsx("meta", {
      name: "author",
      content: meta_author,
    }),
    __jsx("meta", {
      property: "og:title",
      content: title,
    }),
    __jsx("meta", {
      property: "og:description",
      content: (0, _textConverter.plainify)(
        description ? description : meta_description
      ),
    }),
    __jsx("meta", {
      property: "og:type",
      content: "website",
    }),
    __jsx("meta", {
      property: "og:url",
      content: "".concat(base_url, "/").concat(router.asPath.replace("/", "")),
    }),
    __jsx("meta", {
      name: "twitter:title",
      content: title,
    }),
    __jsx("meta", {
      name: "twitter:description",
      content: (0, _textConverter.plainify)(
        description ? description : meta_description
      ),
    }),
    __jsx("meta", {
      property: "og:image",
      content: "".concat(base_url).concat(image ? image : meta_image),
    }),
    __jsx("meta", {
      name: "twitter:image",
      content: "".concat(base_url).concat(image ? image : meta_image),
    }),
    __jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image",
    })
  );
};
var _default = NextTinaSeo;
exports["default"] = _default;
