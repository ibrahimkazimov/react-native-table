import React from 'react';
import { View } from 'react-native';
import { TableProps } from '../interfaces';


function Td({ children, style, width, ...rest }: TableProps) {
    return (
      <View {...rest} style={[{ width }, style]}>
        {children}
      </View>

    );
  }
  
  export default Td;