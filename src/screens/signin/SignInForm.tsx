/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { CustomInput, RoundGradientButton2 } from '@components';
import { fieldObject, IfieldObject } from '@constants';
import { color, images, responsiveHeight, useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';
import _ from 'lodash';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from 'actions/isLoggedIn';
import { FaceIdSignIn } from './faceIdSignIn';

interface User {
  _key: string;
  username: IfieldObject;
  password: IfieldObject;
}

export const SignInForm = () => {
  var inputs = new Array(2);
  const [state, setState]: any = useState<User>({
    _key: '',
    username: fieldObject,
    password: fieldObject,
  });
  const { colors } = useTheme() as unknown as CustomTheme;
  const dispatch = useDispatch();
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  /**
  |--------------------------------------------------
  | Global declaration
  |--------------------------------------------------
  */

  const handleChange = (value: unknown, key: string) => {
    console.log('handlecahnge claee...', state);

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
    const password = state.password.value;
    return new Promise((resolve) => {
      stateObject[_key] = {
        ...state[_key],
        isFocus: _isFocus,
      };

      switch (numbers) {
        case 2:
          if (_.isEmpty(password)) {
            stateObject.password = {
              value: password,
              isError: true,
              errorText: loc('INVALID_PASSWORD_MSG'),
              isFocus: false,
            };
          }
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

  return (
    <View
      style={[
        { backgroundColor: isDarkTheme ? colors.background : 'white' },
        styles.container,
      ]}
    >
      <FaceIdSignIn />
      {_renderInput(0, 'email', {
        valueObject: state.username,
        leftIcon: images.sms,
      })}

      {_renderInput(1, 'password', {
        valueObject: state.password,
        leftIcon: images.lock,
        secureTextEntry: true,
        blurOnSubmit: true,
      })}
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={[
            globalStyle.textStyle('_14', 'primary', 'NUNITO_REGULAR'),
            { paddingTop: responsiveHeight(1) },
          ]}
        >
          {loc('FORGOT_PASSWORD')}
        </Text>
      </TouchableOpacity>

      <RoundGradientButton2
        gradientColor={colors.primaryGradiant as unknown as keyof typeof color}
        title={loc('SIGN_IN')}
        onPress={() => dispatch(isLoggedIn(true))}
        containerStyle={{ marginVertical: responsiveHeight(3) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    // backgroundColor: color.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -50,
    paddingTop: responsiveHeight(3),
  },
});
