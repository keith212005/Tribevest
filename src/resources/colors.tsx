/* eslint-disable camelcase */
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const color = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#32D291',
  borderGray: 'rgba(255,255,255,0.2)',
  unfocusBorder: 'rgba(23, 28, 68, 0.2)',
  primaryColor: '#322d74',
  textPrimaryColor: '#757575',
  placeHolderColor: 'rgba(23, 28, 68, 0.5)',
  unfocusBorder_opacity_low: 'rgba(23, 28, 68, 0.1)',
  grey: '#DCDCDC',
  darkGray: '#4d4d4d',
  primaryGradiant: ['#189EFF', '#1846FF'],
  bluePrimary: '#1846FF',
  background: '#2C2C2C',
  red: 'red',
  orange: 'orange',
};

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...color,
    background: '#1B2531',
    card: '#273143',
  },
};

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...color,
  },
};