"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _generateMetaTags = _interopRequireDefault(require("./utils/generateMetaTags"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MetaGenerator(props) {
  var title = props.title,
    description = props.description,
    image = props.image;
  var metaTags = (0, _generateMetaTags["default"])(title, description, image);
  return /*#__PURE__*/React.createElement(React.Fragment, null, metaTags);
}
var _default = MetaGenerator;
exports["default"] = _default;