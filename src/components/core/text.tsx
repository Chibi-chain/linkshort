import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../colors-provider';
import _ from 'lodash';
import { ColorType } from '../types';

export const Text: React.FC<TextType> = ({
   role,
   underline,
   textAlign,
   numberOfLines,
   height,
   width,
   opacity,
   children,
   weight,
   size,
   lineHeight
}) => {
   const { colors } = useTheme();
   const styles = StyleSheet.create({
      shape: {
         width: width || 'auto',
         height: height || 'auto',
         textAlign: textAlign || 'left',
         flexShrink: 1,
      },
      text: {
         color: colors[role || 'primary'],
         fontWeight: weight ? weight : '500',
         fontSize: size,
         lineHeight: lineHeight,
         textDecorationLine: underline ? 'underline' : undefined,
         opacity,
      },
   });

   return (
      <RNText numberOfLines={numberOfLines} style={[styles.shape, styles.text]}>
         {children}
      </RNText>
   );
};

type TextType = {
   role?: ColorType;
   size: number;
   lineHeight?: number;
   weight?: '300' | '400' | '500' | '600' | '700' | '800';
   bold?: boolean;
   textAlign?: 'center' | 'left' | 'right';
   numberOfLines?: number;
   width?: string | number;
   height?: string | number;
   children?: JSX.Element | JSX.Element[] | string;
   underline?: boolean;
   opacity?: number;
};