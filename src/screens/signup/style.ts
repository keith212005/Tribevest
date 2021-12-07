import { responsiveHeight } from '@resources';
import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  body: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    marginTop: responsiveHeight(-4),
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 40,
    borderWidth: 1,
  },
});
