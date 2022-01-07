/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import {
  CustomDTPicker,
  CustomEditor,
  MainHeader,
  _renderText,
} from '@components';
import { navigate } from '@navigator';
import { fonts, scale, useGlobalStyles } from '@resources';
import { CustomInput, CustomInputProps } from 'components/Inputs/CustomInput';
import { CheckBox } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { fontScale } from 'react-native-utils-scale';

export const NewMotionSetup = () => {
  const insets = useSafeAreaInsets();
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const [date, setDate] = useState<Date>(new Date());
  const [deadline, setDeadLine] = useState(false);

  const _renderInput = (
    index: number,
    key: string,
    placeholder: string,
    extraProps: CustomInputProps,
    containerStyle: ViewStyle,
  ) => {
    return (
      <CustomInput
        label={loc(key)}
        returnKeyType="done"
        placeholder={placeholder}
        refName={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        onEndEditing={() => {}}
        onSubmitEditing={() => {}}
        onChangeText={() => {}}
        containerStyle={containerStyle}
        {...extraProps}
      />
    );
  };

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <MainHeader
        showBackIcon={true}
        onPressBackButton={() => navigate('Voting')}
      />
      <View style={{ paddingHorizontal: scale(20), paddingTop: scale(16) }}>
        {_renderText(loc('NEW_MOTION_SETUP'), {
          ...globalStyle.textStyle('_20', 'text', 'NUNITO_BOLD'),
        })}
        {_renderInput(
          0,
          'title',
          loc('ENTER_TITLE'),
          {},
          { marginTop: scale(16) },
        )}
        {_renderText(loc('RECIPIENT_NAMES_MSG'), {
          ...globalStyle.textStyle('_12', 'text', 'NUNITO_REGULAR'),
          marginTop: scale(-16),
          marginLeft: 2,
        })}

        {_renderText(_.startCase(_.toLower(loc('DESCRIPTION'))), {
          ...globalStyle.textStyle('_20', 'text', 'NUNITO_BOLD'),
        })}

        <CustomEditor />

        <CheckBox
          title={loc('SET_VOTE_DEADLINE')}
          checked={deadline}
          onPress={() => setDeadLine(!deadline)}
          style={{}}
          containerStyle={{
            padding: 0,
            marginLeft: 0,
            marginTop: 20,
            width: '100%',
            borderWidth: 0,
          }}
          wrapperStyle={{ backgroundColor: colors.background }}
          fontFamily={fonts.NUNITO_REGULAR}
          textStyle={{
            ...globalStyle.textStyle('_10', 'text', 'NUNITO_SEMIBOLD'),
          }}
        />

        <CustomDTPicker
          mode={'date'}
          date={date}
          minimumDate={new Date()}
          onSuccess={(date) => setDate(date)}
          containerStyle={{ marginTop: 16 }}
        />

        {_renderText(_.startCase(_.toLower(loc('CURRENT_VOTING_THRESHHOLD'))), {
          ...globalStyle.textStyle('_18', 'lightText', 'NUNITO_SEMIBOLD'),
          marginTop: 32,
        })}
      </View>
    </View>
  );
};
