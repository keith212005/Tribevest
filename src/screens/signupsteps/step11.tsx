/* eslint-disable no-undef */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORT

// LOCAL IMPORT
import { BillingForm, CustomSwitch } from '@components';
import { responsiveWidth, useGlobalStyles } from '@resources';

export const Step11 = () => {
  const globalStyle = useGlobalStyles();

  const _renderMonthlyOrAnuallySwitch = () => {
    const _renderLabel = (name: string) => {
      return (
        <Text style={globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD')}>
          {loc(name)}
        </Text>
      );
    };

    return (
      <View
        style={[
          globalStyle.layoutDirection('row', 'space-evenly', 'center'),
          { width: responsiveWidth(80), alignSelf: 'center', marginTop: 20 },
        ]}
      >
        {_renderLabel('MONTHLY_BILLING')}
        <CustomSwitch onPress={(res) => console.log('switch...', res)} />
        {_renderLabel('ANNUAL_BILLING')}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {_renderMonthlyOrAnuallySwitch()}
      <BillingForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
