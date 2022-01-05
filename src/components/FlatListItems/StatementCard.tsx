/* eslint-disable no-undef */
import React, { memo } from 'react';

// LOCAL IMPORTS
import { CardWrapper, _renderText } from '@components';
import { scale, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';

interface MonthlyStatementCardProps {
  item: any;
}

export const StatementCard = memo(({ item }: MonthlyStatementCardProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  return (
    <CardWrapper
      containerStyle={{
        marginBottom: scale(12),
        marginLeft: 0,
        backgroundColor: colors.card,
        width: scale(200),
        height: scale(117),
        padding: 0,
      }}
      wrapperStyle={{ padding: scale(16) }}
    >
      {_renderText(item.month, {
        ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
      })}
      {_renderText(loc('STATEMENT'), {
        ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
      })}
      {_renderText(item.from, {
        ...globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
        marginTop: scale(16),
      })}
    </CardWrapper>
  );
});
