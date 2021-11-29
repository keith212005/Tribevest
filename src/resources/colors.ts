/* eslint-disable camelcase */
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const color = {
  white: '#FFFFFF',
  black: '#000000',
  lightBlack: '#202123',
  borderGray: 'rgba(255,255,255,0.2)',
  unfocusBorder: 'rgba(23, 28, 68, 0.2)',
  primaryColor: '#6A79F7',
  textPrimaryColor: '#757575',
  errorColor: '#eb5a64',
  placeHolderColor: 'rgba(23, 28, 68, 0.5)',
  blue: '#197FE7',
  orange: 'orange',
  whiteOpacity: 'rgba(255, 255, 255, 0.8)',
  unfocusBorder_opacity_low: 'rgba(23, 28, 68, 0.1)',
  grey: '#DCDCDC',
  darkGrey: '#4d4d4d',
  BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.5)',
  hot_red: '#db3236',
  green: '#32CD32',
  lightBackground: '#273143',
  primaryGradiant: ['#189EFF', '#1846FF'],
  greenGradient: ['#23C26F', '#23BEC2'],
  transparent: 'rgba(0, 0, 0, 0)',
  lightText: '#828A92',
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
