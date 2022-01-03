/* eslint-disable no-undef */

import React from 'react';
import { View, FlatList, Platform } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTs
import { BankingScreenAddAccount, ExternalAccountsListItem } from '@components';
import { EXTERNAL_ACCOUNTS } from '@constants';
import { responsiveWidth } from '@resources';

const renderItem = ({ item }: any) => {
  return (
    <ExternalAccountsListItem
      item={item}
      onPressViewDetails={() => console.log('View Details.....')}
    />
  );
};

export const ExternalAccountsList = () => {
  return (
    <View style={[{ flex: 1, paddingHorizontal: 20 }]}>
      <BankingScreenAddAccount
        title={loc('EXTERNAL_ACCOUNTS')}
        buttonName={loc('ADD')}
        image={'add'}
        onPress={() => {}}
        containerStyle={{
          width: responsiveWidth(90),
          marginVertical: Platform.OS === 'ios' ? 5 : 5,
        }}
      />

      {/* Render External Account List */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        nestedScrollEnabled={true}
        data={EXTERNAL_ACCOUNTS}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};
