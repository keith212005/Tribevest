import { ViewStyle, StyleSheet } from 'react-native';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    // flex: 1,
    paddingTop: 20,
  },
});
