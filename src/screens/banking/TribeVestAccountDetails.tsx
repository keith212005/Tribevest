/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { _renderText } from '@components';
import { useTheme } from '@react-navigation/native';
import { Card } from 'react-native-elements';

const _renderCard = () => {
  const globalStyle = useGlobalStyles();
  return (
    <Card containerStyle={styles.cardContainerStyle}>
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
    </Card>
  );
};

export const TribeVestAccountDetails = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, { backgroundColor: colors.card, flex: 1 }]}>
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

      {_renderCard()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  cardContainerStyle: {
    margin: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
  },
});
