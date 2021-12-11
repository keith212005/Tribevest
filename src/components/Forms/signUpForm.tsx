/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { fieldObject } from '@constants';
import { navigate } from '@navigator';
import { CustomInput, RoundGradientButton2 } from '@components';
import { color, images, responsiveHeight, useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';
import { validateEmail } from '@utils';

export const SignUpForm = () => {
  var inputs = new Array(4);

  const [state, setState] = createState({
    showInviteCodeInput: false,
    full_name: fieldObject,
    email: fieldObject,
    phone_number: fieldObject,
    password: fieldObject,
    invite_code: fieldObject,
  });
  const { colors } = useTheme() as unknown as CustomTheme;
  const dispatch = useDispatch();
  const globalStyle = useGlobalStyles();

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
    var stateObject: any = {};
    const full_name = state.full_name.value;
    const email = state.email.value;
    const phone_number = state.phone_number.value;
    const password = state.password.value;

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 4:
          if (_.isEmpty(password)) {
            stateObject.password = {
              value: password,
              isError: true,
              errorText: loc('INVALID_PASSWORD_MSG'),
            };
          }
        case 3:
          if (_.isEmpty(phone_number)) {
            stateObject.phone_number = {
              value: phone_number,
              isError: true,
              errorText: loc('INVALID_PASSWORD_MSG'),
            };
          }
        case 2:
          if (_.isEmpty(email)) {
            stateObject.email = {
              value: email,
              isError: true,
              errorText: loc('INVALID_PASSWORD_MSG'),
            };
          } else if (!validateEmail(email)) {
            stateObject.email = {
              value: email,
              isError: true,
              errorText: loc('INVALID_EMAIL_MSG'),
            };
          }
        case 1:
          if (_.isEmpty(full_name)) {
            stateObject.full_name = {
              value: full_name,
              isError: true,
              errorText: loc('EMPTY_FULL_NAME'),
            };
          }
        default:
          setState(stateObject);
          resolve(true);

          break;
      }
    });
  };

  // handle onSubmitEditing method of input box
  const onSubmitEditing = (number: number) => {
    if (number < 3) {
      inputs[number + 1].focus();
    } else {
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
        onEndEditing={() => checkValidation(index + 1, key)}
        onSubmitEditing={() => onSubmitEditing(index)}
        onChangeText={(val: string) => handleChange(val, key)}
        {...extraProps}
      />
    );
  };

  const _renderInviteCode = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setState({ showInviteCodeInput: !state.showInviteCodeInput });
          }}
        >
          <Text
            style={[
              globalStyle.textStyle('_14', 'primary', 'NUNITO_REGULAR'),
              { paddingTop: responsiveHeight(1) },
            ]}
          >
            {loc('ADD_INVITE_CODE')}
          </Text>
        </TouchableOpacity>

        {state.showInviteCodeInput ? (
          <View>
            <Text
              style={[
                globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
                { paddingVertical: responsiveHeight(1), fontWeight: '600' },
              ]}
            >
              {loc('INVITE_CODE_LABEL')}
            </Text>

            {_renderInput(2, 'invite_code', {
              valueObject: state.invite_code,
            })}
          </View>
        ) : null}
      </>
    );
  };

  return (
    <View style={{ paddingTop: 10 }}>
      {/* Render Full Name */}
      {_renderInput(0, 'full_name', {
        valueObject: state.full_name,
        leftIcon: images.user,
      })}

      {/* Render email */}
      {_renderInput(1, 'email', {
        valueObject: state.email,
        leftIcon: images.sms,
      })}

      {/* Render Phone Number */}
      {_renderInput(2, 'phone_number', {
        valueObject: state.phone_number,
        leftIcon: images.call,
      })}

      {/* Render Password Input */}
      {_renderInput(3, 'password', {
        valueObject: state.password,
        leftIcon: images.lock,
        showPasswordIcon: true,
        blurOnSubmit: true,
      })}

      {/* Render InviteCode */}
      {_renderInviteCode()}

      {/* Render Sign In button */}
      <RoundGradientButton2
        gradientColor={colors.primaryGradiant}
        title={loc('CREATE_ACCOUNT')}
        onPress={() => navigate('SignUpSteps')}
        // disabled={
        //   state.full_name.isError ||
        //   state.email.isError ||
        //   state.phone_number.isError ||
        //   state.password.isError ||
        //   _.isEmpty(state.full_name.value) ||
        //   _.isEmpty(state.email.value) ||
        //   _.isEmpty(state.phone_number.value) ||
        //   _.isEmpty(state.password.value)
        // }
        disabled={false}
      />
    </View>
  );
};
