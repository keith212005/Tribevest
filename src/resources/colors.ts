/* eslint-disable camelcase */
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const color: any = {
  white: '#FFFFFF',
  black: '#000000',
  lightBlack: '#202123',
  borderGray: '#CAD2DA',
  unfocusBorder: 'rgba(23, 28, 68, 0.2)',
  primaryColor: '#189EFF',
  textPrimaryColor: '#757575',
  errorColor: '#eb5a64',
  placeHolderColor: 'rgba(23, 28, 68, 0.5)',
  blue: '#197FE7',
  selectedBackgroundBlue: '#E0EFFF',
  orange: 'orange',
  whiteOpacity: 'rgba(255, 255, 255, 0.3)',
  whiteOpacityDark: 'rgba(255, 255, 255, 0.7)',
  unfocusBorder_opacity_low: 'rgba(23, 28, 68, 0.1)',
  grey: '#DCDCDC',
  darkGrey: '#4d4d4d',
  BLACK_TRANSPARENT: 'rgba(0, 0, 0, 0.5)',
  error: '#FF6865',
  error_text: '#FF3940',
  error_background: '#FFF0F0',
  error_light: '#FDDEDE',
  green: '#32CD32',
  lightBackground: '#273143',
  primaryGradiant: ['#189EFF', '#1846FF'],
  whiteGradient: ['white', 'white'],
  greenGradient: ['#23C26F', '#23BEC2'],
  transparentGradient: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
  transparent: 'rgba(0, 0, 0, 0)',
  lightText: '#828A92',
  inputBackgroundColor: '#F1F5F9',
  green_text: '#32D291',
  light_green_background: '#D8F7EA',
  purple_text: '#9140FF',
  purple_background: '#ECEAFF',
  orange_text: '#FF9B5F',
  orange_background: '#FFF0E5',
  light_blue_background: '#E5F7FF',
  cardBackgroundGradient: ['#23C26F', '#23BEC2'],
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
