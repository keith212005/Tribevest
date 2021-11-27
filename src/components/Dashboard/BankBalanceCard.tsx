/* eslint-disable no-undef */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { Card } from 'react-native-elements';

// LOCAL IMPORTS
import { FastImg } from '@components';
import { images, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';

export const BankBalanceCard = () => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

  const _renderCardHeader = () => {
    return (
      <>
        <View>
          <View style={[styles.row]}>
            <Text
              style={[
                globalStyles.textStyle('_24', 'blue', 'NUNITO_REGULAR'),
                { fontWeight: '900' },
              ]}
            >
              $45,198.00
            </Text>
            {FastImg(images.arrow_drop_down_circle, 25)}
          </View>
          <View style={[styles.row, { marginBottom: 20 }]}>
            <Text
              style={[globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}
            >
              {loc('BANK_ACCOUNT_BALANCE')}
            </Text>

            <Text
              style={[
                globalStyles.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
              ]}
            >
              Oct 2020
            </Text>
          </View>
        </View>
        <Card.Divider />
      </>
    );
  };

  const _renderTableTitle = (
    title1: string,
    title2: string,
    title3: string,
  ) => {
    return (
      <View style={[styles.row, { justifyContent: 'space-evenly' }]}>
        <Text
          style={[
            { flex: 5 },
            globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ]}
        >
          {loc(title1)}
        </Text>
        <Text
          style={[
            { flex: 2 },
            globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ]}
        >
          {loc(title2)}
        </Text>
        <Text
          style={[
            { flex: 2, textAlign: 'right' },
            globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ]}
        >
          {loc(title3)}
        </Text>
      </View>
    );
  };

  const _renderCardBody = () => {
    return (
      <View>
        <View
          style={[
            styles.row,
            globalStyles.textStyle('_14', 'text', 'NUNITO_BOLD'),
          ]}
        >
          <Text
            style={[globalStyles.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}
          >
            {loc('RECENT_ACTIVITY')}
          </Text>
        </View>

        {_renderTableTitle('TYPE', 'AMOUNT', 'DATE')}
        <View style={[styles.row]}>
          <Text
            style={[
              { flex: 5 },
              globalStyles.textStyle('_14', 'text', 'NUNITO_REGULAR'),
            ]}
          >
            Contirbution
          </Text>
          <Text
            style={[
              { flex: 2 },
              globalStyles.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
            ]}
          >
            $5000
          </Text>
          <Text
            style={[
              globalStyles.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
            ]}
          >
            10/10/21
          </Text>
        </View>
      </View>
    );
  };

  console.log('rendering BankBalanceCard.tsx');

  return (
    <Card containerStyle={[styles.container, { backgroundColor: colors.card }]}>
      {_renderCardHeader()}
      {_renderCardBody()}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    borderRadius: 10,
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
