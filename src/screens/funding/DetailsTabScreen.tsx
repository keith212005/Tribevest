/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// LOCAL IMPORTS
import { FastImg, _renderText } from '@components';
import { images, scale, useGlobalStyles } from '@resources';

// THRID PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { Divider } from 'react-native-elements';
import { ContributedParticipantsList } from './ContributedParticipantsList';

export const DetailsTabScreen = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  const _renderManage = () => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('row', 'space-between', 'center'),
          { marginTop: 18 },
        ]}
      >
        {_renderText(loc('MANAGE'), {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
        })}
        {FastImg(images.manage, 20)}
      </View>
    );
  };

  const _renderCardView = (title: string, description: string) => {
    return (
      <View style={[styles.cardContainer, { borderColor: colors.lightText }]}>
        {_renderText(title, {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
        })}
        {_renderText(description, {
          ...globalStyle.textStyle('_12', 'lightText', 'NUNITO_REGULAR'),
          marginTop: scale(4),
        })}
      </View>
    );
  };

  const _renderAbout = () => {
    return (
      <View style={{ marginTop: 16 }}>
        {_renderText(loc('ABOUT'), {
          ...globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
        })}
        {_renderText(loc('ABOUT_TEXT'), {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
        })}
        <Divider style={{ marginVertical: 20 }} />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? colors.card : colors.white },
      ]}
    >
      {_renderManage()}
      {_renderCardView('$1,000.00', loc('MIN_TO_PARTICIPATE'))}
      {_renderCardView('$1,000.00', loc('MAX_TO_PARTICIPATE'))}
      {_renderCardView('Deadline', 'Deadline')}
      {_renderAbout()}
      <ContributedParticipantsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    padding: scale(16),
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
});
