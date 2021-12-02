import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  gradientContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  gradientContainer: {
    flex: 8,
    padding: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
