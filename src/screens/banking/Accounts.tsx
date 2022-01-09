/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useCallback } from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';

// LOCAL IMPORTS
import {
  BankingScreenAddAccount,
  CustomModal,
  ExternalAccountsListItem,
  TribevestAccountsListItem,
} from '@components';
import { AvailableBalance } from './AvailableBalance';
import { Statements } from './Statements';
import { Transactions } from './Transactions';
import { EXTERNAL_ACCOUNTS, TRIBEVEST_ACCOUNTS } from '@constants';

export const Accounts = () => {
  const { ref, open } = useModalize();
  const { colors } = useTheme() as CustomTheme;

  const renderTribevestAccountItems = useCallback(
    (item: any) => (
      <TribevestAccountsListItem item={item.item} onSelect={() => open()} />
    ),
    [],
  );

  const renderExternalAccountsItem = useCallback(({ item }: any) => {
    return (
      <View style={{ paddingHorizontal: 18 }}>
        <ExternalAccountsListItem item={item} />
      </View>
    );
  }, []);

  return (
    <>
      {/* RenderTribevest Account List */}
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
        data={TRIBEVEST_ACCOUNTS}
        renderItem={renderTribevestAccountItems}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <BankingScreenAddAccount
            title={loc('TRIBEVEST_ACCOUNT')}
            buttonName={loc('ADD')}
            image={'add'}
            onPress={() => {}}
            containerStyle={{ paddingHorizontal: 20 }}
          />
        )}
        ListFooterComponent={() => (
          <>
            <BankingScreenAddAccount
              title={loc('EXTERNAL_ACCOUNTS')}
              buttonName={loc('ADD')}
              image={'add'}
              onPress={() => {}}
              containerStyle={{
                marginTop: 10,
                paddingHorizontal: 20,
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
          </>
        )}
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
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
  },
});
