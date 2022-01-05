/* eslint-disable no-undef */

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

// LOCAL IMPORTS
import { TransactionCard, _renderText } from '@components';
import { useGlobalStyles, verticalScale } from '@resources';
import { TRANSACTIONS } from '@constants';
import { Divider } from 'react-native-elements';

const renderTransactionItem = ({ item }: any) => (
  <TransactionCard item={item} />
);

export const Transactions = () => {
  const globalStyle = useGlobalStyles();

  return (
    <View style={styles.container}>
      <View
        style={[globalStyle.layoutDirection('row', 'space-between', 'center')]}
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
        style={styles.flatListStyle}
        renderItem={renderTransactionItem}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginVertical: verticalScale(16) }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  flatListStyle: {
    marginBottom: verticalScale(40),
    marginTop: verticalScale(16),
  },
});
