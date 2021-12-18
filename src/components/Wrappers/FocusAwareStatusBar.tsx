import React from 'react';
import { StatusBar } from 'react-native';

// THIRD PARTY IMPORTS
import { useIsFocused } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const FocusAwareStatusBar = (props: any) => {
  const isFocused = useIsFocused();

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
