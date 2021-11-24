import { ViewStyle, TextStyle, StyleSheet } from 'react-native';

interface Style {
  container: ViewStyle;
  buttonStyle: ViewStyle;
  titleTextStyle: TextStyle;
  buttonTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {},
  buttonStyle: {},
  titleTextStyle: {},
  buttonTextStyle: {},
});
