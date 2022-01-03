/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { FlatList, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';

// LOCAL IMPORTS
import { styles } from './style';
import {
  BankingScreenAddAccount,
  CustomModal,
  TribevestAccountsListItem,
} from '@components';

import { TRIBEVEST_ACCOUNTS } from '@constants';
import { TribeVestAccountDetails } from './TribeVestAccountDetails';
import { responsiveWidth } from '@resources';

export const TribevestAccountsList = () => {
  const { ref, open } = useModalize();

  const renderItem = (item: any) => (
    <TribevestAccountsListItem
      item={item.item}
      onSelect={(item2: any) => open()}
    />
  );
  return (
    <View style={[styles.TribeVestAccountContainer]}>
      {/* Render Title and Button */}
      <BankingScreenAddAccount
        title={loc('TRIBEVEST_ACCOUNT')}
        buttonName={loc('ADD')}
        image={'add'}
        onPress={() => {}}
        containerStyle={{ width: responsiveWidth(90) }}
      />

      {/* RenderTribevest Account List */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={TRIBEVEST_ACCOUNTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <CustomModal ref={ref}>
        <TribeVestAccountDetails />
      </CustomModal>
    </View>
  );
};
