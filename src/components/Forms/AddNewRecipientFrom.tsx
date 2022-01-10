/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';
import { isEmpty } from 'lodash';

// LOCAL IMPORTS
import { ACCOUNT_TYPES, fieldObject } from '@constants';
import {
  CustomDropDownPicker,
  RoundGradientButton,
  _renderText,
} from '@components';
import { fonts, images, responsiveWidth, useGlobalStyles } from '@resources';
import { CustomInput, CustomInputProps } from 'components/Inputs/CustomInput';
import { scale } from 'react-native-utils-scale';
import { useTheme } from '@react-navigation/native';

export const AddNewRecipientForm = () => {
  var inputs = new Array(4);
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  const [actionOpen, setActionOpen] = useState(false);
  const [value, setValue] = useState('Accounts');
  const [items, setItems] = useState(ACCOUNT_TYPES);

  const [state, setState] = createState<any>({
    name: fieldObject,
    routing_number: fieldObject,
    account_number: fieldObject,
  });

  /**
  |--------------------------------------------------
  | Global declarartion end
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
    const name = state.name.value;
    const routing_number = state.routing_number.value;
    const account_number = state.account_number.value;

    return new Promise((resolve) => {
      stateObject[key] = {
        ...state[key],
      };

      switch (numbers) {
        case 3:
          if (isEmpty(account_number)) {
            stateObject.account_number = {
              value: account_number,
              isError: true,
              errorText: loc('INVALID_ACCOUNT_NUMBER_MSG'),
            };
          }
        case 2:
          if (isEmpty(routing_number)) {
            stateObject.routing_number = {
              value: routing_number,
              isError: true,
              errorText: loc('INVALID_ROUTING_NUMBER_MSG'),
            };
          }
        case 1:
          if (isEmpty(name)) {
            console.log('case 1 wexecuted...');
            stateObject.name = {
              value: name,
              isError: true,
              errorText: loc('INVALID_NAME_MSG'),
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
    if (number < 2) {
      inputs[number + 1].focus();
    } else {
      // this.onLogin();
    }
  };

  const _renderInput = (
    index: number,
    key: string,
    placeholder: string,
    extraProps: CustomInputProps,
  ) => {
    return (
      <CustomInput
        returnKeyType="done"
        placeholder={loc(placeholder)}
        refName={(input: any) => (inputs[index] = input)}
        onFocus={() => checkValidation(index, key)}
        onBlur={() => {}}
        onEndEditing={() => checkValidation(index + 1, key)}
        onSubmitEditing={() => onSubmitEditing(index)}
        onChangeText={(val: string) => handleChange(val, key)}
        extraStyle={{ height: scale(48) }}
        labelStyle={{ marginBottom: scale(5) }}
        {...extraProps}
      />
    );
  };

  console.log('AddNewRecipetoint form render....');

  return (
    <View style={styles.container}>
      {/* Render Title */}
      {_renderText(loc('ADD_NEW_RECIPIENT'), {
        ...globalStyle.textStyle('_16', 'text', 'NUNITO_SEMIBOLD'),
      })}
      {/* Render Legal name Input */}
      <View style={{ marginTop: scale(24) }}>
        {_renderInput(0, 'name', 'ENTER_NAME', {
          label: loc('LEGAL_NAME'),
          valueObject: state.name,
        })}

        {/* Render Routing Number Input */}
        {_renderInput(1, 'routing_number', 'ENTER_ROUTING_NUMBER', {
          label: loc('ROUTING_NUMBER'),
          valueObject: state.routing_number,
          leftIcon: images.banking,
          secureTextEntry: true,
        })}

        {/* Render Acount Number Input */}
        {_renderInput(2, 'account_number', 'ENTER_ACCOUNT_NUMBER', {
          label: loc('ACCOUNT_NUMBER'),
          valueObject: state.account_number,
          secureTextEntry: true,
          blurOnSubmit: true,
        })}

        <View style={{ flexDirection: 'row' }}>
          <CustomDropDownPicker
            label={loc('ACCOUNT_TYPE')}
            open={actionOpen}
            value={value}
            items={items}
            setOpen={setActionOpen}
            setValue={setValue}
            setItems={setItems}
            extraStyle={{}}
            mainContainerStyle={{}}
            containerStyle={{ width: responsiveWidth(90), zIndex: 2000 }}
            labelStyle={[
              globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR'),
            ]}
          />
        </View>

        {/* Render Add a recipient button */}
        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('SIGN_IN')}
          onPress={() => {}}
          titleStyle={{ fontSize: 16, fontFamily: fonts.NUNITO_BOLD }}
          extraStyle={{
            marginTop: scale(10),
            width: responsiveWidth(90),
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

export const VirtualizedView = (props: any) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
