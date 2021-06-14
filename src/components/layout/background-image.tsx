import React from 'react';
import { Box } from '..';
import { ImageBackground, StyleSheet } from 'react-native';
import { ColorType } from '../types';

export const BackgroundImage: React.FC<BackgroundImageType> = (props) => {
   const {
      source,
      overflow,
      resizeMode,
      height,
      width,
      children,
      role,
      opacity,
      aspectRatio
   } = props;
   const styles = StyleSheet.create({
      image: {
         flex: 1,
         width: '100%',
         height: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         opacity,
         aspectRatio
      },
   });
   return (
      <Box
         position={'relative'}
         overflow={overflow}
         width={width}
         height={height}
         role={role}
      >
         <ImageBackground
            source={source}
            style={[styles.image]}
            resizeMode={resizeMode || 'stretch'}
         >
            {children}
         </ImageBackground>
      </Box>
   );
};

type BackgroundImageType = {
   source: any;
   overflow?: 'hidden' | 'scroll' | 'visible';
   resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
   role?: ColorType;
   opacity?: number;
   width?: string | number;
   height?: string | number;
   children?: JSX.Element | JSX.Element[] | string;
   aspectRatio?: number;
};