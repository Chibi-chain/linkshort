import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../colors-provider';
import _ from 'lodash';

export const Spacing: React.FC<BoxType> = (props) => {
   const {
      grow,
      m,
      mh,
      mv,
      ml,
      mr,
      mt,
      mb,
      p,
      ph,
      pv,
      pl,
      pr,
      pt,
      pb,
      children,
   } = props;
   const { baseSpace } = useTheme();

   const styles = StyleSheet.create({
      container: {
         flexGrow: grow,
      },
      margin: {
         margin: _.isNumber(m) ? m * baseSpace : m,
         marginHorizontal: _.isNumber(mh) ? mh * baseSpace : mh,
         marginVertical: _.isNumber(mv) ? mv * baseSpace : mv,
         marginLeft: _.isNumber(ml) ? ml * baseSpace : ml,
         marginRight: _.isNumber(mr) ? mr * baseSpace : mr,
         marginTop: _.isNumber(mt) ? mt * baseSpace : mt,
         marginBottom: _.isNumber(mb) ? mb * baseSpace : mb,
      },
      padding: {
         padding: _.isNumber(p) ? p * baseSpace : p,
         paddingHorizontal: _.isNumber(ph) ? ph * baseSpace : ph,
         paddingVertical: _.isNumber(pv) ? pv * baseSpace : pv,
         paddingLeft: _.isNumber(pl) ? pl * baseSpace : pl,
         paddingRight: _.isNumber(pr) ? pr * baseSpace : pr,
         paddingTop: _.isNumber(pt) ? pt * baseSpace : pt,
         paddingBottom: _.isNumber(pb) ? pb * baseSpace : pb,
      },
   });

   return (
      <View style={[styles.container, styles.margin, styles.padding]}>
         {children}
      </View>
   );
};

type BoxType = {
   grow?: number;
   m?: string | number;
   mh?: string | number;
   mv?: string | number;
   ml?: string | number;
   mr?: string | number;
   mt?: string | number;
   mb?: string | number;
   p?: string | number;
   ph?: string | number;
   pv?: string | number;
   pl?: string | number;
   pr?: string | number;
   pt?: string | number;
   pb?: string | number;
   children?: JSX.Element | JSX.Element[] | string | any;
};