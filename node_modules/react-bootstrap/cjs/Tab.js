"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _TabContainer = _interopRequireDefault(require("./TabContainer"));
var _TabContent = _interopRequireDefault(require("./TabContent"));
var _TabPane = _interopRequireDefault(require("./TabPane"));
const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
};
var _default = exports.default = Object.assign(Tab, {
  Container: _TabContainer.default,
  Content: _TabContent.default,
  Pane: _TabPane.default
});
module.exports = exports.default;