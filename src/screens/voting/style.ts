import { fonts, moderateScale, responsiveWidth } from '@resources';
import { ViewStyle, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
    fontSize: RFValue(12),
    color: 'white',
    marginLeft: 2,
  },
});
