"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function generateMetaTags(title, description, image) {
  var metaTags = [{
    property: "og:title",
    content: title
  }, {
    property: "og:description",
    content: description
  }, {
    property: "og:image",
    content: image
  }, {
    name: "twitter:title",
    content: title
  }, {
    name: "twitter:description",
    content: description
  }, {
    name: "twitter:image",
    content: image
  }];
  return metaTags.map(function (tag, index) {
    return /*#__PURE__*/React.createElement("meta", _extends({
      key: index
    }, tag));
  });
}
var _default = generateMetaTags;
exports["default"] = _default;