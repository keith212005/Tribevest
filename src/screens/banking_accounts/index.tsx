/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useCallback } from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import { Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';

// LOCAL IMPORTS
import {
  BankingScreenAddAccount,
  CardWrapper,
  CustomModal,
  ExternalAccountsListItem,
  StatementCard,
  TransactionCard,
  TribevestAccountsListItem,
  _renderText,
} from '@components';
import {
  EXTERNAL_ACCOUNTS,
  MONTHLY_STATEMENT,
  TRANSACTIONS,
  TRIBEVEST_ACCOUNTS,
} from '@constants';
import { images, useGlobalStyles, verticalScale } from '@resources';

export const BankingAccounts = () => {
  const { ref, open } = useModalize();
  const { colors } = useTheme() as CustomTheme;
  const globalStyle = useGlobalStyles();

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

  const _renderAvailableBalance = () => {
    return (
      <>
        {_renderText(loc('TRIBEVEST_ACCOUNT'), {
          ...globalStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
        })}
        {_renderText(loc('AVAILABLE_BALANCE'), {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
          marginTop: 16,
        })}

        {_renderText('$72,520.00', {
          ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
          marginTop: 4,
        })}

        <CardWrapper
          containerStyle={{
            margin: 0,
            marginBottom: 20,
            marginRight: 0,
            backgroundColor: colors.card,
          }}
        >
          {_renderText(loc('ACCOUNT_DETAILS'), {
            ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
          })}
          {_renderText('**** **** 4837', {
            ...globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
            marginTop: 2,
          })}
          {_renderText(loc('SHOW_ACCOUNT_DETAILS'), {
            ...globalStyle.textStyle('_14', 'blue', 'NUNITO_REGULAR'),
            marginTop: 8,
          })}
        </CardWrapper>
      </>
    );
  };

  const renderMonthlyStatementCard = ({ item }: any) => (
    <StatementCard item={item} />
  );

  const _renderStatements = () => {
    return (
      <>
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'center'),
          ]}
        >
          {_renderText(loc('STATEMENTS'), {
            ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
            marginTop: 4,
          })}

          <View
            style={[
              globalStyle.layoutDirection('row', 'space-between', 'center'),
            ]}
          >
            {_renderText(loc('STATEMENT_PERIOD'), {
              ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
              marginTop: 4,
            })}
            <FastImage
              source={images.info_circle}
              style={[globalStyle.squareLayout(18), { marginLeft: 6 }]}
              resizeMode={FastImage.resizeMode.contain}
              tintColor={colors.text}
            />
          </View>
        </View>

        <FlatList
          data={MONTHLY_STATEMENT}
          horizontal={true}
          contentContainerStyle={{ paddingLeft: 18 }}
          style={{ marginHorizontal: -18 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMonthlyStatementCard}
        />
      </>
    );
  };

  const renderTransactionItem = ({ item }: any) => (
    <TransactionCard item={item} />
  );

  const _renderTransactions = () => {
    return (
      <>
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'center'),
          ]}
        >
          {_renderText(loc('TRANSACTIONS'), {
            ...globalStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
          })}
          {_renderText(loc('VIEW_ALL'), {
            ...globalStyle.textStyle('_14', 'blue', 'NUNITO_REGULAR'),
          })}
        </View>

        <FlatList
          data={TRANSACTIONS}
          style={{
            marginBottom: verticalScale(40),
            marginTop: verticalScale(16),
            height: 400,
          }}
          renderItem={renderTransactionItem}
          ItemSeparatorComponent={() => (
            <Divider style={{ marginVertical: verticalScale(16) }} />
          )}
        />
      </>
    );
  };

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
          {_renderAvailableBalance()}
          {_renderStatements()}
          {_renderTransactions()}
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
