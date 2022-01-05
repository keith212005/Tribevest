/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import {
  BankingScreenAddAccount,
  CustomModal,
  ExternalAccountsListItem,
  TribevestAccountsListItem,
} from '@components';
import { EXTERNAL_ACCOUNTS, TRIBEVEST_ACCOUNTS } from '@constants';
import { useTheme } from '@react-navigation/native';
import { responsiveWidth } from '@resources';
import React, { useCallback } from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';
import { AvailableBalance } from './AvailableBalance';
import { Statements } from './Statements';
import { Transactions } from './Transactions';

// LOCAL IMPORTS

export const AccountsLayout = () => {
  const { ref, open } = useModalize();
  const { colors } = useTheme() as CustomTheme;

  const renderTribevestAccountItems = useCallback(
    (item: any) => (
      <TribevestAccountsListItem item={item.item} onSelect={() => open()} />
    ),
    [],
  );

  const renderExternalAccountsItem = useCallback(({ item }: any) => {
    return <ExternalAccountsListItem item={item} />;
  }, []);

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
        renderItem={renderTribevestAccountItems}
        keyExtractor={(item) => item.id.toString()}
      />

      <CustomModal ref={ref}>
        <View
          style={[
            styles.modalContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <AvailableBalance />
          <Statements />
          <Transactions />
        </View>
      </CustomModal>

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
        renderItem={renderExternalAccountsItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TribeVestAccountContainer: {
    paddingLeft: 20,
    paddingTop: 24,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
});
