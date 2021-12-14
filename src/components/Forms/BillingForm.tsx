/* eslint-disable camelcase */
/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import _ from 'lodash';
import { CustomInput } from '@components';
import { useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';
import { fieldObject } from '@constants';

export const BillingForm = () => {
  var inputs = new Array(5);
  const globalStyle = useGlobalStyles();
  const [state, setState] = createState({
    address: fieldObject,
    address_2: fieldObject,
    city: fieldObject,
    state: fieldObject,
    zip: fieldObject,
  });

  /**
  |--------------------------------------------------
  | Global Declaration
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
    const address = state.address.value;

    console.log(key);

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 1:
          if (_.isEmpty(address)) {
            stateObject.address = {
              value: address,
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
    label: string,
    extraProps?: CustomInputProps,
  ) => {
    return (
      <CustomInput
        returnKeyType="done"
        label={loc(label)}
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
    <View style={styles.container}>
      <Text
        style={[
          globalStyle.textStyle('_18', 'text', 'NUNITO_EXTRABOLD'),
          { marginBottom: 10 },
        ]}
      >
        {loc('BILLING_PAYMENT_DETAILS')}
      </Text>
      {_renderInput(0, 'address', 'ADDRESS_LABEL')}
      {_renderInput(1, 'address_2', 'ADDRESS_LINE_2_LABEL')}
      {_renderInput(2, 'city', 'CITY_LABEL')}
      {_renderInput(3, 'state', 'STATE_LABEL')}
      {_renderInput(4, 'zip', 'ZIP_LABEL')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});
