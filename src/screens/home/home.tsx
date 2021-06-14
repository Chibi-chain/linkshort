import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Text,
  Box,
  Spacing,
} from '../../components';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC<any> = ({ route }) => {
  return (
    <Box flex={1} role={'white100'}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Spacing ph={4} pv={40}>
            <Box
              position={'relative'}
              flex={1}
              top={50}
              width={300}
              role={'white100'}
              justifyContent={'center'}
              alignItems={'center'}
            >

              <Box
                position={'absolute'}
                top={150}
                alignItems={'center'}
                justifyContent={'center'}
                zIndex={10}
              >
              </Box>
              <Box
                position={'absolute'}
                top={190}
                alignItems={'center'}
                justifyContent={'center'}
                zIndex={10}
              >
              </Box>

              <Box position={'absolute'} top={280} zIndex={10}>
                <Spacing pr={3} pl={3} pt={3}>
                </Spacing>
              </Box>
            </Box>
          </Spacing>
        </Box>
      </SafeAreaView>
    </Box>
  );
};
