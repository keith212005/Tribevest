/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// LOCAL IMPORTS
import { useTheme } from '@react-navigation/native';
import { Statements } from './Statements';
import { AvailableBalance } from './AvailableBalance';
import { Transactions } from './Transactions';

export const TribeVestAccountDetails = () => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background, flex: 1 },
      ]}
    >
      <AvailableBalance />
      <Statements />
      <Transactions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
