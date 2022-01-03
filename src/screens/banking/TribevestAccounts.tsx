/* eslint-disable no-undef */
import React from 'react';
import { FlatList, View } from 'react-native';

// LOCAL IMPORTS
import { styles } from './style';
import {
  BankingScreenAddAccount,
  TribevestAccountsListItem,
} from '@components';

import { TRIBEVEST_ACCOUNTS } from '@constants';

const renderItem = (item: any) => (
  <TribevestAccountsListItem item={item.item} />
);

export const TribevestAccounts = () => {
  return (
    <View style={[styles.TribeVestAccountContainer]}>
      {/* Render Title and Button */}
      <BankingScreenAddAccount
        title={loc('TRIBEVEST_ACCOUNT')}
        buttonName={loc('ADD')}
        image={'add'}
        onPress={() => {}}
      />

      {/* RenderTribevest Account List */}
      <FlatList
        style={{ flex: 1, marginTop: 8 }}
        data={TRIBEVEST_ACCOUNTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
