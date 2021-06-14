import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Box, Stack } from '../layout';
import { Text } from './text';

export const Input: React.FC<Props> = ({ label, width = '100%', value, type, underLine, onChangeText, placeholder, keyboardType }) => {
   const styles = StyleSheet.create({
      input: {
         width: width,
         fontSize: 17,
         fontWeight: '600',
         color: '#000000',
         lineHeight: 20
      }
   })

   return (
      <Stack size={3}>
         {
            label && <Text size={15} lineHeight={18} weight={'600'} opacity={0.4} role={'black'} width={width}>{label}</Text>
         }
         <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onChangeText && onChangeText(text)}
            secureTextEntry={type === 'password' ? true : false}
            keyboardType={keyboardType}
         />
         {
            underLine && <Box width={width} height={1} role={'black'} />
         }
      </Stack>
   )
}


interface Props {
   type?: 'default' | 'password';
   label?: string;
   width?: number | string;
   underLine?: boolean;
   placeholder?: string;
   onChangeText?: Function;
   value?: string;
   keyboardType?:
   | 'default'
   | 'number-pad'
   | 'decimal-pad'
   | 'numeric'
   | 'email-address'
   | 'phone-pad';
}