/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { color, useGlobalStyles } from '@resources';

export const Step9 = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as unknown as CustomTheme;

  const _renderTagItem = (name: string, backgroundColor: string) => {
    return (
      <View style={styles.tagItemContainer}>
        <View
          style={[styles.dot, { backgroundColor: color[backgroundColor] }]}
        />
        <Text
          style={[
            globalStyle.textStyle('_12', backgroundColor, 'NUNITO_BOLD'),
            { marginRight: 10 },
          ]}
        >
          {_.upperCase(loc(name))}
        </Text>
      </View>
    );
  };

  const _renderDescription = (
    name: string,
    textColor: string,
    background: string,
  ) => {
    return (
      <View
        style={[
          styles.descriptionContainer,
          { backgroundColor: color[background] },
        ]}
      >
        <Text style={{ color: color[textColor] }}>{loc(name)}</Text>
      </View>
    );
  };

  const _renderMissionTextArea = () => {
    return (
      <View>
        <Text>sdfsf</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Render Tag Container */}
      <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        {_renderTagItem('TRIBE_NAME', 'blue')}
        {_renderTagItem('THE_WHY', 'green_text')}
        {_renderTagItem('THE_GOALS', 'error')}
      </View>

      {/* Render Tribe Name */}
      {_renderDescription(
        'INTEGRITY_INVESTOR_TRIBE',
        'blue',
        'light_blue_background',
      )}

      {/* Render The why*/}
      {_renderDescription(
        'TOGETHER_ACHEIVE_MORE',
        'green_text',
        'light_green_background',
      )}

      {/* Render The goals*/}
      {_renderDescription('LOOK_AFTER_EACHOTHER', 'error', 'error_background')}

      {/* Render Mission */}
      {_renderMissionTextArea()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tagItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    marginHorizontal: 5,
  },
  descriptionContainer: {
    padding: 10,
    alignSelf: 'flex-start',
    margin: 10,
    borderRadius: 5,
  },
});
