import { fonts, moderateScale, responsiveWidth } from '@resources';
import { StyleSheet } from 'react-native';

import { fontScale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  dropDownContainerStyle: {
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
    fontSize: fontScale(12),
    marginLeft: 2,
  },
  TribeVestAccountContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 24,
  },
});
