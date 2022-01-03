/* eslint-disable no-undef */
import React, { memo } from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { _renderText } from '@components';

// THIRD PARTY IMPORTS
import { Card, Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

interface DefaultProps {
  item: any;
  onSelect: (item: any) => void;
}

export const TribevestAccountsListItem = memo(
  ({ item, onSelect }: DefaultProps) => {
    const globalStyle = useGlobalStyles();
    const { colors } = useTheme() as CustomTheme;

    const _renderAvailableBalance = (
      title: string,
      amount: string,
      extraStyle?: ViewStyle,
    ) => {
      return (
        <View style={{ margin: 5, ...extraStyle }}>
          {_renderText(title, {
            ...globalStyle.textStyle('_12', 'lightText', 'NUNITO_REGULAR'),
          })}
          {_renderText(amount, {
            ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          })}
        </View>
      );
    };

    return (
      <Pressable onPress={() => onSelect(item)}>
        <Card
          containerStyle={[
            styles.cardContainerStyle,
            { backgroundColor: colors.card },
          ]}
        >
          <View
            style={[
              globalStyle.layoutDirection('row', 'space-between', 'center'),
            ]}
          >
            {_renderAvailableBalance(
              loc('AVAILABLE_BALANCE'),
              item.available_balance,
              { flex: 4 },
            )}
            <Divider orientation="vertical" />
            {_renderAvailableBalance(
              loc('ACCOUNT_DETAILS'),
              item.account_details,
              { flex: 4, marginLeft: 5 },
            )}
          </View>
        </Card>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: 1,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
