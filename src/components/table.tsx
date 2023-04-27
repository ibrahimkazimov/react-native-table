import React from 'react';
import {View} from 'react-native';
import { TableProps } from '../interfaces';



function Table({children, style, widths, ...rest}: TableProps) {
  return (
    <View {...rest} style={style}>
      {React.Children.map(children, child => {
        return React.cloneElement(child as React.ReactElement<any>, {
          widths: widths?.length ? widths : [],
        });
      })}
    </View>
  );
}

export default Table;
