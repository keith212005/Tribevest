/* eslint-disable no-undef */
import React from 'react';
import { StatusBar } from 'react-native';

// THIRD PARTY IMPORTS
import { useIsFocused, useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const FocusAwareStatusBar = (props: any) => {
  const isFocused = useIsFocused();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  console.log('FocusAwareStatusBar render');

  return isFocused ? (
    <StatusBar
      translucent={true}
      showHideTransition={false}
      barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      backgroundColor={isDarkTheme ? colors.card : colors.white}
      {...props}
      {...props.statusBarProps}
    />
  ) : null;
};
