/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { responsiveWidth, useGlobalStyles } from '@resources';
import { InvestPercent, TribeGoalsList } from '@components';

export const Step8 = () => {
  const globalStyle = useGlobalStyles();

  const _renderInvestmentPercent = () => {
    return (
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
    );
  };

  return (
    <View>
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_SEMIBOLD'),
          { textAlign: 'center' },
        ]}
      >
        {loc('FEATURED_TRIBE') + loc('GOALS')}
      </Text>
      {_renderInvestmentPercent()}
      <TribeGoalsList />
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
