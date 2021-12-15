/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { responsiveWidth, useGlobalStyles } from '@resources';
import { InvestPercent, MultiSelectList } from '@components';
import { SIGN_UP_STEP5 } from '@constants';

export const Step6 = () => {
  const globalStyle = useGlobalStyles();

  return (
    <View>
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
          { textAlign: 'center' },
        ]}
      >
        {loc('INVESTMENT_TYPES')}
      </Text>

      <View style={styles.investmentPercentContainer}>
        <InvestPercent
          percent={37}
          title1={'VACATION'}
          title2={'HOME'}
          backgroundColor={'light_green_background'}
          textColor={'green_text'}
        />
        <InvestPercent
          percent={46}
          title1={'SINGLE_FAMILY'}
          title2={'PROPERTY'}
          backgroundColor={'purple_background'}
          textColor={'purple_text'}
        />
        <InvestPercent
          percent={35}
          title1={'MULTIPLE_FAMILY'}
          title2={'PROPERTY'}
          backgroundColor={'orange_background'}
          textColor={'orange_text'}
        />
      </View>

      <MultiSelectList array={SIGN_UP_STEP5} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  investmentPercentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    width: responsiveWidth(100),
  },
});
