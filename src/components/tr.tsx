import React from 'react';
import { View } from 'react-native';
import { TableProps } from '../interfaces';

function Tr({ children, style, widths, ...rest }: TableProps) {

    return (
      <View style={[{flexDirection: "row"} , style]} {...rest}>
        {React.Children.map(children, (child, idx) => {
          
          return React.cloneElement(child as React.ReactElement<any>, {
            width: widths[idx]
          })

        })}
      </View>

    );
  }
  
  export default Tr;