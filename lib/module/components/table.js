function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View } from 'react-native';
function Table(_ref) {
  let {
    children,
    style,
    widths,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: style
  }), React.Children.map(children, child => {
    return /*#__PURE__*/React.cloneElement(child, {
      widths: widths !== null && widths !== void 0 && widths.length ? widths : []
    });
  }));
}
export default Table;
//# sourceMappingURL=table.js.map