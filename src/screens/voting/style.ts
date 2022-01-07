import { fonts, moderateScale, responsiveWidth } from '@resources';
import { ViewStyle, StyleSheet } from 'react-native';
import { fontScale } from 'react-native-utils-scale';

interface Style {
  container: ViewStyle;
  newButtonContainer: ViewStyle;
  newButtonExtraStyle: ViewStyle;
  newButtonTitleStyle: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {},
  newButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  newButtonExtraStyle: {
    width: responsiveWidth(22),
    height: moderateScale(32),
    alignSelf: 'center',
  },
  newButtonTitleStyle: {
    fontFamily: fonts.NUNITO_REGULAR,
    fontSize: fontScale(12),
    color: 'white',
    marginLeft: 2,
  },
});
