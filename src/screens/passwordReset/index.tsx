/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import {
  CustomInput,
  FormContainer,
  RoundGradientButton,
  SignInHeader,
} from '@components';
import { styles } from './style';
import { images } from '@resources';
import { navigate, navigationRef } from '@navigator';
import { fieldObject, IfieldObject } from '@constants';
import { CustomInputProps } from 'components/Inputs/CustomInput';

interface User {
  _key: string;
  username: IfieldObject;
}

export const PasswordReset = () => {
  var inputs = new Array(2);
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

  return (
    <View style={styles.container}>
      <SignInHeader
        title={loc('RESET_PASSWORD')}
        description={loc('RESET_YOUR_PASSWORD')}
        showBackButton={true}
        onBackPress={() => {
          navigationRef.goBack();
        }}
      />

      <FormContainer containerStyle={styles.formContainer}>
        {_renderInput(0, 'email', {
          valueObject: state.username,
          leftIcon: images.sms,
        })}

        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('SEND_INSTRUCTIONS')}
          onPress={() => navigate('CheckEmail')}
        />
      </FormContainer>
    </View>
  );
};
