/* eslint-disable no-shadow */
/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { fieldObject } from '@constants';
import { navigate } from '@navigator';
import { FaceIdSignIn } from './faceIdSignIn';
import { isLoggedIn } from 'actions/isLoggedIn';
import { CustomInput, RoundGradientButton2 } from '@components';
import { color, images, responsiveHeight, useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';
import { validateEmail } from '@utils';

export const SignInForm = () => {
  var inputs = new Array(2);

  const [state, setState] = createState({
    email: fieldObject,
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

  const handleChange = (value: string, key: string) => {
    setState({
      ...state,
      [key]: {
        value: value,
        isError: false,
        errorText: '',
      },
    });
  };

  const checkValidation = (numbers: number, key: string) => {
    console.log('checkValidation called....');

    var stateObject: any = {};
    const email = state.email.value;
    const password = state.password.value;

    console.log(key);

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 2:
          if (_.isEmpty(password)) {
            stateObject.password = {
              value: password,
              isError: true,
              errorText: loc('INVALID_PASSWORD_MSG'),
            };
          }
        case 1:
          if (_.isEmpty(email)) {
            stateObject.email = {
              value: email,
              isError: true,
              errorText: loc('INVALID_EMAIL_MSG'),
            };
          } else if (!validateEmail(email)) {
            stateObject.email = {
              value: email,
              isError: true,
              errorText: loc('INVALID_EMAIL_MSG'),
            };
          }
        default:
          setState(stateObject);
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
        onFocus={() => checkValidation(index, key)}
        onBlur={() => {}}
        onEndEditing={() => checkValidation(index + 1, key)}
        onSubmitEditing={() => onSubmitEditing(index)}
        onChangeText={(val: string) => handleChange(val, key)}
        {...extraProps}
      />
    );
  };

  return (
    <View
      style={[{ backgroundColor: isDarkTheme ? colors.background : 'white' }]}
    >
      {/* Render Face Id Sign In */}
      <FaceIdSignIn />

      {/* Render Email Input */}
      {_renderInput(0, 'email', {
        valueObject: state.email,
        leftIcon: images.sms,
      })}

      {/* Render Password Input */}
      {_renderInput(1, 'password', {
        valueObject: state.password,
        leftIcon: images.lock,
        showPasswordIcon: true,
        blurOnSubmit: true,
      })}

      {/* Render forgot password */}
      <TouchableOpacity onPress={() => navigate('PasswordReset')}>
        <Text
          style={[
            globalStyle.textStyle('_14', 'primary', 'NUNITO_REGULAR'),
            { paddingTop: responsiveHeight(1) },
          ]}
        >
          {loc('FORGOT_PASSWORD')}
        </Text>
      </TouchableOpacity>

      {/* Render Sign In button */}
      <RoundGradientButton2
        gradientColor={colors.primaryGradiant as unknown as keyof typeof color}
        title={loc('SIGN_IN')}
        onPress={() => dispatch(isLoggedIn(true))}
      />
    </View>
  );
};
