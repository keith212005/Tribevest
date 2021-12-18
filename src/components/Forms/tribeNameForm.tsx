/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React from 'react';
import { View, Text } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { fieldObject } from '@constants';
import { CustomInput } from '@components';
import { useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';

export const TribeNameForm = () => {
  var inputs = new Array(1);
  const [state, setState] = createState<any>({
    tribe_name: fieldObject,
  });

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
    const tribe_name = state.tribe_name.value;

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 1:
          if (_.isEmpty(tribe_name)) {
            stateObject.tribe_name = {
              value: tribe_name,
              isError: true,
              errorText: loc('EMPTY_TRIBE_NAME'),
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
  const onSubmitEditing = () => {
    // if (number < 1) {
    //   inputs[number + 1].focus();
    // } else {
    // }
  };

  const _renderInput = (
    index: number,
    key: string,
    extraProps: CustomInputProps,
  ) => {
    return (
      <CustomInput
        label={loc(key)}
        returnKeyType="done"
        placeholder={loc(key)}
        refName={(input: any) => (inputs[index] = input)}
        onFocus={() => checkValidation(index, key)}
        onEndEditing={() => checkValidation(index + 1, key)}
        onSubmitEditing={() => onSubmitEditing()}
        onChangeText={(val: string) => handleChange(val, key)}
        blurOnSubmit={true}
        {...extraProps}
      />
    );
  };

  return (
    <View style={{ paddingTop: 10 }}>
      {/* Render Full Name */}
      {_renderInput(0, 'tribe_name', {
        valueObject: state.tribe_name,
      })}
      <Text style={[globalStyle.textStyle('_12', 'lightText', 'NUNITO_BOLD')]}>
        {loc('CHANGE_NAME_LATER_MSG')}
      </Text>
    </View>
  );
};
