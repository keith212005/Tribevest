/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import _ from 'lodash';
import { CustomDropDownPicker, CustomInput } from '@components';
import { useGlobalStyles } from '@resources';
import { CustomInputProps } from 'components/Inputs/CustomInput';
import { fieldObject } from '@constants';
import { useTheme } from '@react-navigation/native';

export const BillingForm = () => {
  var inputs = new Array(5);
  const [state, setState] = createState<any>({
    address: fieldObject,
    address_2: fieldObject,
    city: fieldObject,
    states: fieldObject,
    zip: fieldObject,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ]);
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

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
    var stateObject: any = {};
    const address = state.address.value;
    const address_2 = state.address_2.value;
    const city = state.city.value;
    const states = state.states.value;
    const zip = state.zip.value;

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 5:
          if (_.isEmpty(zip)) {
            stateObject.zip = {
              value: zip,
              isError: true,
              errorText: loc('EMPTY_ZIP'),
            };
          }
        case 4:
          if (_.isEmpty(states)) {
            stateObject.states = {
              value: states,
              isError: true,
              errorText: loc('EMPTY_STATE'),
            };
          }
        case 3:
          if (_.isEmpty(city)) {
            stateObject.city = {
              value: city,
              isError: true,
              errorText: loc('EMPTY_CITY'),
            };
          }
        case 2:
          if (_.isEmpty(address_2)) {
            stateObject.address_2 = {
              value: address_2,
              isError: true,
              errorText: loc('EMPTY_ADDRESS_2'),
            };
          }
        case 1:
          if (_.isEmpty(address)) {
            stateObject.address = {
              value: address,
              isError: true,
              errorText: loc('EMPTY_ADDRESS_1'),
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
    if (number < 4) {
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
        extraStyle={{
          borderWidth: 1,
          borderColor: colors.borderGray,
          backgroundColor: state[key].isError
            ? colors.error_light
            : colors.white,
        }}
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
      {_renderInput(0, 'address', 'ADDRESS_LABEL', {
        valueObject: state.address,
      })}
      {_renderInput(1, 'address_2', 'ADDRESS_LINE_2_LABEL', {
        valueObject: state.address_2,
      })}
      {_renderInput(2, 'city', 'CITY_LABEL', {
        valueObject: state.city,
      })}

      <CustomDropDownPicker
        label={loc('STATE_LABEL')}
        placeholder={loc('states')}
        placeholderStyle={{ marginLeft: 8, color: colors.placeHolderColor }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW" // required or get error Virtualized list
        containerProps={{}}
        labelStyle={{ marginLeft: 10 }}
      />
      {_renderInput(4, 'zip', 'ZIP_LABEL', {
        valueObject: state.zip,
        blurOnSubmit: true,
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});
