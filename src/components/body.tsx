import React from 'react';
import {View} from 'react-native';
import { TableProps } from '../interfaces';



function Body({children, style, widths, ...rest}: TableProps) {
  return (
    <View {...rest} style={[{ padding: 12 }, style]}>
      {React.Children.map(children, child => {
        return React.cloneElement(child as React.ReactElement<any>, {
          widths,
        });
      })}
    </View>
  );
}

export default Body;
