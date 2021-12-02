import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const FocusAwareStatusBar = (props: any) => {
  const isFocused = useIsFocused();

  const insets = useSafeAreaInsets();
  console.log('FocusAwareStatusBar render.....');

  return isFocused ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={props.statusBarBackgroundColor}
    >
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        {...props}
        {...props.statusBarProps}
      />
    </LinearGradient>
  ) : null;
};
