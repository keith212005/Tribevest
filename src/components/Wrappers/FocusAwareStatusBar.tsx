import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

export const FocusAwareStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  console.log('sdfasdsadsfdsa>>>>', isFocused, props.statusBarBackgroundColor);

  return isFocused ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['red', 'white']}
    >
      <StatusBar
        translucent={true}
        showHideTransition={false}
        backgroundColor={'transparent'}
        {...props}
        {...props.statusBarProps}
      />
    </LinearGradient>
  ) : null;
};
