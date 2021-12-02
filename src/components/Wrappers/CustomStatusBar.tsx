import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const CustomStatusBars = (props: any) => {
  console.log('FocusAwareStatusBar render.....');

  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  return (
    <StatusBar
      translucent={true}
      barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      backgroundColor={'transparent'}
      {...props}
    />
  );
};

export const CustomStatusBar = memo(CustomStatusBars);
