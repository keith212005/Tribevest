/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React from 'react';
import { View, Text } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { fieldObject } from '@constants';
import { CustomInput } from '@components';
import { useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';
import { validateEmail } from '@utils';

export const TribeNameForm = () => {
  var inputs = new Array(1);

  const [state, setState] = createState<any>({
    enter_name: fieldObject,
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
    const enter_name = state.enter_name.value;

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 1:
          if (_.isEmpty(enter_name)) {
            stateObject.enter_name = {
              value: enter_name,
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
    if (number < 1) {
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

  return (
    <View style={{ paddingTop: 10 }}>
      {/* Render Full Name */}
      {_renderInput(0, 'enter_name', {
        valueObject: state.enter_name,
      })}
      <Text style={[globalStyle.textStyle('_12', 'lightText', 'NUNITO_BOLD')]}>
        {loc('CHANGE_NAME_LATER_MSG')}
      </Text>
    </View>
  );
};
