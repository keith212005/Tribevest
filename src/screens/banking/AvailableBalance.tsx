/* eslint-disable no-undef */
import React from 'react';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { CardWrapper, _renderText } from '@components';

// THIRD PARTY IMORTS
import { useTheme } from '@react-navigation/native';

const _renderCard = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  return (
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
  );
};

export const AvailableBalance = () => {
  const globalStyle = useGlobalStyles();
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

      {_renderCard()}
    </>
  );
};
