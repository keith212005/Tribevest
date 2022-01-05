import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { _renderText } from '@components';
import { scale, useGlobalStyles } from '@resources';

interface DefaultProps {
  item: any;
}

export const TransactionCard = memo(({ item }: DefaultProps) => {
  const globalStyle = useGlobalStyles();

  const _renderRow = (
    leftText: string,
    rightText: string,
    leftTextStyle?: ViewStyle,
    rightTextStyle?: ViewStyle,
  ) => {
    return (
      <View
        style={[globalStyle.layoutDirection('row', 'space-between', 'center')]}
      >
        {_renderText(leftText, { ...leftTextStyle })}
        {_renderText(rightText, { ...rightTextStyle })}
      </View>
    );
  };

  return (
    <View>
      {_renderRow(item.date, '', {
        ...globalStyle.textStyle('_12', 'text', 'NUNITO_REGULAR'),
      })}
      {_renderRow(
        item.cardName,
        item.amount,
        {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          marginTop: scale(8),
          marginBottom: scale(4),
        },
        { ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD') },
      )}

      {_renderRow(
        item.paymentType,
        item.status,
        { ...globalStyle.textStyle('_12', 'lightText', 'NUNITO_REGULAR') },
        { ...globalStyle.textStyle('_12', 'lightText', 'NUNITO_REGULAR') },
      )}
    </View>
  );
});
