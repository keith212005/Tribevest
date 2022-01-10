/* eslint-disable no-undef */
import React from 'react';
import { View, Text, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import { Divider } from 'react-native-elements';
import { scale } from 'react-native-utils-scale';

// LOCAL IMPORTS
import { CreditCardView } from 'components/Cards/CreditCardView';
import { LATEST_TRANSACTIONS } from '@constants';
import { LatestTransactionItemCard } from '@components';
import { useGlobalStyles, verticalScale } from '@resources';

export const CardsMoreDetailsPopup = () => {
  const globalStyle = useGlobalStyles();
  const _renderCardView = () => {
    const renderLatestTransactionItems = ({ item }: any) => {
      return <LatestTransactionItemCard item={item} />;
    };

    return (
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <CreditCardView
          cardName={'Marketing'}
          cardNumber={'2344 2343 2343 3453'}
          cvv={'234'}
          expDate={'03/24'}
        />

        <Text
          style={[
            globalStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
            { marginTop: scale(24), marginBottom: scale(16) },
          ]}
        >
          {loc('LATEST_TRANSACTIONS')}
        </Text>
        <FlatList
          style={{ flex: 1, marginBottom: scale(20) }}
          data={LATEST_TRANSACTIONS}
          renderItem={renderLatestTransactionItems}
          ItemSeparatorComponent={() => (
            <Divider style={{ marginVertical: verticalScale(16) }} />
          )}
        />
      </View>
    );
  };

  return <View>{_renderCardView()}</View>;
};
