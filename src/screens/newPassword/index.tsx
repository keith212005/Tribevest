/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import {
  FormContainer,
  MessageWithIcon,
  RoundGradientButton,
  SignInHeader,
} from '@components';
import { styles } from './style';
import { fieldObject, IfieldObject } from '@constants';
import { CustomInput, CustomInputProps } from 'components/Inputs/CustomInput';
import { images, useGlobalStyles } from '@resources';
import { navigationRef } from '@navigator';

interface User {
  _key: string;
  username: IfieldObject;
}

export const NewPassword = () => {
  var inputs = new Array(2);
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

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

  const _renderValidationMessages = () => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('column', 'flex-start', 'flex-start'),
          { flex: 2 },
        ]}
      >
        <MessageWithIcon
          icon={'tick_circle'}
          tintColor={'green'}
          message={loc('ATLEAST_EIGHT_CHAR')}
          textSize={'_12'}
        />
        <MessageWithIcon
          icon={'tick_circle'}
          tintColor={'green'}
          message={loc('ATLEAST_ONE_SYMBOL')}
          textSize={'_12'}
        />
        <MessageWithIcon
          icon={'tick_circle'}
          tintColor={'green'}
          message={loc('ATLEAST_ONE_CAPITAL')}
          textSize={'_12'}
        />
      </View>
    );
  };

  const _renderSubmitButton = () => {
    return (
      <RoundGradientButton
        gradientColor={colors.primaryGradiant}
        title={loc('RESET_PASSWORD')}
        onPress={() => {}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SignInHeader
        title={loc('CREATE_NEW_PASSWORD')}
        description={loc('DIFFERENT_PASSWORD_MSG')}
        showBackButton={true}
        onBackPress={() => navigationRef.goBack()}
      />
      <FormContainer containerStyle={styles.formContainer}>
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
      </FormContainer>
    </View>
  );
};
