import React from 'react';
import { Text, View, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import { Divider } from 'react-native-elements';

// LOCAL IMPORTS
import { images, useGlobalStyles, verticalScale } from '@resources';
import { AddFloatingButton, TransactionCard, _renderText } from '@components';
import FastImage from 'react-native-fast-image';

export const Payments = (props: any) => {
  const globalStyle = useGlobalStyles();
  const renderTransactionItem = ({ item }: any) => (
    <TransactionCard item={item} />
  );
  if (props.route.params.transactions) {
    return (
      <>
        <View
          style={[
            { flex: 1 },
            globalStyle.layoutDirection('column', 'center', 'center'),
          ]}
        >
          <FastImage
            source={images.no_payments_found}
            style={globalStyle.squareLayout(200)}
            resizeMode={FastImage.resizeMode.contain}
          />
          {_renderText(loc('NO_PAYMENTS_FOUND'), {
            ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
          })}
        </View>
        <AddFloatingButton onPress={() => {}} />
      </>
    );
  }
  return (
    <View style={[{ flex: 1 }]}>
      <FlatList
        data={props.route.params.transactions}
        renderItem={renderTransactionItem}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginVertical: verticalScale(16) }} />
        )}
      />
      <AddFloatingButton onPress={() => {}} />
    </View>
  );
};
