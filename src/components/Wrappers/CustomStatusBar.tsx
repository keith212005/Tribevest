/* eslint-disable no-undef */
import { useTheme } from '@react-navigation/native';
import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const CustomStatusBars = (props: any) => {
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as CustomTheme;
  return (
    <StatusBar
      translucent={true}
      barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      backgroundColor={isDarkTheme ? colors.card : 'transparent'}
      {...props}
    />
  );
};

export const CustomStatusBar = memo(CustomStatusBars);
