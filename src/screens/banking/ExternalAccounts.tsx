/* eslint-disable no-undef */

import React from 'react';
import { View, FlatList } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTs
import { styles } from './style';
import { BankingScreenAddAccount, ExternalAccountsListItem } from '@components';
import { EXTERNAL_ACCOUNTS } from '@constants';

const renderItem = ({ item }: any) => {
  return (
    <ExternalAccountsListItem
      item={item}
      onPressViewDetails={() => {
        console.log('View Details.....');
      }}
    />
  );
};

export const ExternalAccounts = () => {
  return (
    <View style={[styles.TribeVestAccountContainer]}>
      <BankingScreenAddAccount
        title={loc('EXTERNAL_ACCOUNTS')}
        buttonName={loc('ADD')}
        image={'add'}
        onPress={() => {}}
      />
      {/* Render External Account List */}
      <FlatList
        style={{ flex: 1, marginTop: 8 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        nestedScrollEnabled={true}
        data={EXTERNAL_ACCOUNTS}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};
