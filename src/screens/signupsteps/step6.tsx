/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORT
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORT
import { responsiveWidth, useGlobalStyles } from '@resources';
import { InvestPercent, PropertyList } from '@components';

export const Step6 = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const _renderInvestmentPercent = () => {
    return (
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
        {loc('INVESTMENT_TYPES')}
      </Text>
      {_renderInvestmentPercent()}
      <PropertyList />
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
