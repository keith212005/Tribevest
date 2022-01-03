import { fonts, moderateScale, responsiveWidth } from '@resources';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  dropDownContainerStyle: {
    width: responsiveWidth(90),
    marginLeft: 20,
    marginTop: 8,
  },
  newButtonExtraStyle: {
    width: responsiveWidth(22),
    height: moderateScale(32),
    alignSelf: 'center',
    marginRight: 10,
  },
  newButtonTitleStyle: {
    fontFamily: fonts.NUNITO_REGULAR,
    fontSize: RFValue(12),
    marginLeft: 2,
  },
  TribeVestAccountContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 24,
  },
});
