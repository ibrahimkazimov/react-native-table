function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View } from 'react-native';
function Td(_ref) {
  let {
    children,
    style,
    width,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [{
      width
    }, style]
  }), children);
}
export default Td;
//# sourceMappingURL=td.js.map