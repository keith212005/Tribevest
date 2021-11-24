import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { responsiveWidth, responsiveHeight } from '@resources';

interface Style {
  container: ViewStyle;
  darkThemeContainer: ViewStyle;
  pressableContainer: ViewStyle;
  themeName: TextStyle;
  gradientReactangle: ViewStyle;
}

type CreateStyles = <T extends any>(styles: T) => T;

export const createStyles: CreateStyles = StyleSheet.create;

export default createStyles<Style>({
  container: {
    flex: 1,
  },
  darkThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  pressableContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeName: {
    flex: 4,
    paddingLeft: 20,
  },
  gradientReactangle: {
    width: responsiveWidth(40),
    height: responsiveHeight(3),
    borderRadius: 2,
    flex: 5,
  },
});
