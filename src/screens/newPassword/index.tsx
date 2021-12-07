/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { styles } from './style';
import { fieldObject, IfieldObject } from '@constants';
import { CustomInput, CustomInputProps } from 'components/Inputs/CustomInput';
import { FastImg, RoundGradientButton2, SignInHeader } from '@components';
import { color, images, useGlobalStyles } from '@resources';
import { navigate } from '@navigator';
import { en } from '@languages';

interface User {
  _key: string;
  username: IfieldObject;
}

export const NewPassword = () => {
  var inputs = new Array(2);
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  const [state, setState]: any = useState<User>({
    _key: '',
    username: fieldObject,
  });

  const handleChange = (value: unknown, key: string) => {
    setState({
      ...state,
      [key]: {
        value: value,
        isError: false,
        errorText: '',
        isFocus: true,
      },
    });
  };

  const checkValidation = (
    numbers: number,
    _key: string,
    _isFocus: boolean,
  ) => {
    var stateObject: any = {};
    const username = state.username.value;
    return new Promise((resolve) => {
      stateObject[_key] = {
        ...state[_key],
        isFocus: _isFocus,
      };

      switch (numbers) {
        case 1:
          if (_.isEmpty(username)) {
            stateObject.username = {
              value: username,
              isError: true,
              errorText: loc('INVALID_EMAIL_MSG'),
              isFocus: false,
            };
          }
        default:
          setState((prevState: any) => ({
            ...prevState,
            ...stateObject,
          }));
          resolve(true);
          break;
      }
    });
  };

  // hadnle onSubmitEditing method of input box
  const onSubmitEditing = (number: number) => {
    if (number < 1) {
      inputs[number + 1].focus();
    } else {
      // this.onLogin();
    }
  };

  const _renderInput = (
    index: number,
    key: string,
    extraProps: CustomInputProps,
  ) => {
    return (
      <CustomInput
        returnKeyType="done"
        label={loc(key)}
        placeholder={loc(key)}
        refName={(input: any) => (inputs[index] = input)}
        onFocus={() => checkValidation(index, key, true)}
        onBlur={() => {}}
        onEndEditing={() => checkValidation(index + 1, key, false)}
        onSubmitEditing={() => onSubmitEditing(index)}
        onChangeText={(val: string) => handleChange(val, key)}
        {...extraProps}
      />
    );
  };

  const _renderMessage = (message: keyof typeof en) => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('row', 'center', 'center'),
          { marginBottom: 3 },
        ]}
      >
        {FastImg(
          images.tick_circle,
          20,
          {},
          { tintColor: 'green', source: images.tick_circle },
        )}
        <Text
          style={[
            globalStyle.textStyle('_12', 'text', 'NUNITO_REGULAR'),
            { paddingHorizontal: 5 },
          ]}
        >
          {loc(message)}
        </Text>
      </View>
    );
  };

  const _renderValidationMessages = () => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('column', 'flex-start', 'flex-start'),
          { flex: 2 },
        ]}
      >
        {_renderMessage('ATLEAST_EIGHT_CHAR')}
        {_renderMessage('ATLEAST_ONE_SYMBOL')}
        {_renderMessage('ATLEAST_ONE_CAPITAL')}
      </View>
    );
  };

  const _renderSubmitButton = () => {
    return (
      <RoundGradientButton2
        gradientColor={colors.primaryGradiant as unknown as keyof typeof color}
        title={loc('RESET_PASSWORD')}
        onPress={() => navigate('CheckEmail')}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SignInHeader
        title={loc('CREATE_NEW_PASSWORD')}
        description={loc('DIFFERENT_PASSWORD_MSG')}
        showBackButton={true}
      />
      <View
        style={[
          styles.body,
          { backgroundColor: isDarkTheme ? colors.background : 'white' },
        ]}
      >
        {/* render Input */}
        {_renderInput(0, 'email', {
          valueObject: state.username,
          leftIcon: images.lock,
          secureTextEntry: true,
        })}
        {/* render validation messages */}
        {_renderValidationMessages()}

        {/* render Reset password button */}
        {_renderSubmitButton()}
      </View>
    </View>
  );
};
