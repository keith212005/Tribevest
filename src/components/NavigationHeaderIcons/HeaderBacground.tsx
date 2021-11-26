/* eslint-disable no-undef */
import { useTheme } from '@react-navigation/native';
import React from 'react';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

export const HeaderBackground = () => {
  const { colors } = useTheme() as unknown as CustomTheme;

  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const color = isDarkTheme
    ? [colors.card, colors.card]
    : [colors.white, colors.white];

  return (
    <LinearGradient
      colors={color}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
};
