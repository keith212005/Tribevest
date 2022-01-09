/* eslint-disable no-undef */
import React, { memo } from 'react';
import { View, ViewStyle, Pressable } from 'react-native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { CardWrapper, _renderText } from '@components';

// THIRD PARTY IMPORTS
import { Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

interface DefaultProps {
  item: any;
  onSelect: (item: any) => void;
}

export const TribevestAccountsListItem = memo(
  ({ item, onSelect }: DefaultProps) => {
    console.log('TribevestAccountsListItem render...');

    const globalStyle = useGlobalStyles();
    const { colors } = useTheme() as CustomTheme;

    const _renderAvailableBalance = (
      title: string,
      amount: string,
      extraStyle?: ViewStyle,
    ) => {
      return (
        <View style={{ margin: scale(5), ...extraStyle }}>
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
        <CardWrapper containerStyle={{ backgroundColor: colors.card }}>
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
              { flex: 4, marginLeft: 20 },
            )}
          </View>
        </CardWrapper>
      </Pressable>
    );
  },
);
