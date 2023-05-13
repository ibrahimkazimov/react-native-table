function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View } from 'react-native';
function Tr(_ref) {
  let {
    children,
    style,
    widths,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      flexDirection: "row"
    }, style]
  }, rest), React.Children.map(children, (child, idx) => {
    return /*#__PURE__*/React.cloneElement(child, {
      width: widths[idx]
    });
  }));
}
export default Tr;
//# sourceMappingURL=tr.js.map