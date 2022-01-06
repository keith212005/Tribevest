/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { CreditCardView } from 'components/Cards/CreditCardView';

interface CardsMoreDetailsPopupProps {}

export const CardsMoreDetailsPopup = (props: CardsMoreDetailsPopupProps) => {
  const { colors } = useTheme() as CustomTheme;

  const _renderCardView = () => {
    return (
      <View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
          <CreditCardView
            cardName={'Marketing'}
            cardNumber={'2344 2343 2343 3453'}
            cvv={'234'}
            expDate={'03/24'}
          />
        </View>
      </View>
    );
  };

  return <View style={[styles.container, {}]}>{_renderCardView()}</View>;
};

const styles = StyleSheet.create({
  container: {},
});
