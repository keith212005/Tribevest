import { scale } from '@resources';
import { ViewStyle, StyleSheet } from 'react-native';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: scale(20),
  },
});
