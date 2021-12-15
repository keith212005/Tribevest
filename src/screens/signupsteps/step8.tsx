/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { responsiveWidth, useGlobalStyles } from '@resources';
import { InvestPercent, MultiSelectList } from '@components';
import { SIGN_UP_STEP8 } from '@constants';

export const Step8 = () => {
  const globalStyle = useGlobalStyles();

  return (
    <View>
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
          { textAlign: 'center' },
        ]}
      >
        {loc('FEATURED_TRIBE') + loc('GOALS')}
      </Text>
      <View style={styles.investmentPercentContainer}>
        <InvestPercent
          percent={37}
          title1={'FEATURED_TRIBE'}
          title2={'GOALS'}
          title3={''}
          backgroundColor={'light_green_background'}
          textColor={'green_text'}
        />
        <InvestPercent
          percent={46}
          title1={'EXPERIENCE'}
          title2={'LEARN_TOGETHER'}
          title3={''}
          backgroundColor={'purple_background'}
          textColor={'purple_text'}
        />
        <InvestPercent
          percent={35}
          title1={'BUILD_WEALTH'}
          title2={'THROUGH'}
          title3={'OWNERSHIP'}
          backgroundColor={'orange_background'}
          textColor={'orange_text'}
        />
      </View>
      <MultiSelectList array={SIGN_UP_STEP8} onPress={() => {}} />
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
