/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';

// LOCAL IMPORTS
import { color, responsiveHeight, useGlobalStyles } from '@resources';
import { CustomInput } from '@components';

export const Step9 = () => {
  const globalStyle = useGlobalStyles();

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
        <Text style={{ color: color[textColor], textAlign: 'justify' }}>
          {loc(name)}
        </Text>
      </View>
    );
  };

  const _renderMissionTextArea = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <CustomInput
          returnKeyType="done"
          label={loc('MISSION')}
          placeholder={loc('YOUR_MISSION')}
          multiline={true}
          numberOfLines={5}
          extraStyle={{ height: responsiveHeight(16) }}

          // refName={(input: any) => (inputs[index] = input)}
          // onFocus={() => checkValidation(index, key)}
          // onBlur={() => {}}
          // onEndEditing={() => checkValidation(index + 1, key)}
          // onSubmitEditing={() => onSubmitEditing(index)}
          // onChangeText={(val: string) => handleChange(val, key)}
          // {...extraProps}
        />
        <Text
          style={[
            globalStyle.textStyle('_12', 'textPrimaryColor', 'NUNITO_REGULAR'),
            { marginTop: -12 },
          ]}
        >
          {loc('CHANGE_LATER')}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Render Tag Container */}
      <View style={{ flexDirection: 'row' }}>
        {_renderTagItem('tribe_name', 'blue')}
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
  container: {
    paddingHorizontal: 20,
  },
  tagItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    marginVertical: 2,
    borderRadius: 5,
  },
});
