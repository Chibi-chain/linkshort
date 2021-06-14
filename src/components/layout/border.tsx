import _ from 'lodash';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../colors-provider';
import { ColorType } from '../types';

export const Border: React.FC<BorderType> = ({
   children,
   type,
   role = 'black',
   lineWidth,
   radius,
   borderTopLeftRadius,
   borderTopRightRadius,
   borderBottomLeftRadius,
   borderBottomRightRadius,
   topWidth,
   bottomWidth,
   leftWidth,
   rightWidth,
   opacity,
   grow,
}) => {
   const { colors } = useTheme();

   const style = StyleSheet.create({
      border: {
         borderColor: colors[role],
         borderWidth: lineWidth,
         borderStyle: type || 'solid',
         borderRadius: radius,
         borderTopLeftRadius: borderTopLeftRadius,
         borderTopRightRadius: borderTopRightRadius,
         borderBottomLeftRadius: borderBottomLeftRadius,
         borderBottomRightRadius: borderBottomRightRadius,
         borderTopWidth: topWidth,
         borderBottomWidth: bottomWidth,
         borderLeftWidth: leftWidth,
         borderRightWidth: rightWidth,
         opacity,
         flexGrow: grow,
         overflow: 'hidden',
      },
   });
   return <View style={style.border}>{children}</View>;
};

type BorderType = {
   type?: 'solid' | 'dashed';
   grow?: number;
   radius?: number;
   borderTopLeftRadius?: number;
   borderTopRightRadius?: number;
   borderBottomLeftRadius?: number;
   borderBottomRightRadius?: number;
   opacity?: number;
   lineWidth?: number;
   role?: ColorType;
   topWidth?: number;
   bottomWidth?: number;
   leftWidth?: number;
   rightWidth?: number;
   children?: JSX.Element | JSX.Element[] | string;
};