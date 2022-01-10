/* eslint-disable no-undef */
import React, { Dispatch, SetStateAction } from 'react';
import { Text, View, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

// LOCAL IMPORT
import { useGlobalStyles, scale } from '@resources';
import { IfieldObject } from '@constants';
import { useTheme } from '@react-navigation/native';

interface DefaultProps {
  onOpen?: () => void;
  open: boolean;
  value: string | number | boolean;
  items: Array<any>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<ValueType | any>>;
  setItems: Dispatch<SetStateAction<any[]>>;
  label?: string;
  valueObject?: IfieldObject;
  extraStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  labelStyle?: any;
}

export const CustomDropDownPicker = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  return (
    <View style={{ ...props.mainContainerStyle }}>
      {props.label && (
        <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}>
          {props.label}
        </Text>
      )}

      <DropDownPicker
        listMode="SCROLLVIEW"
        style={{
          paddingLeft: 16,
          height: scale(40),
          borderColor: colors.placeHolderColor,
          backgroundColor: '#F1F5F9',
          ...props.extraStyle,
        }}
        dropDownContainerStyle={{ borderColor: 'grey' }}
        {...props}
      />

      <Text
        style={[
          globalStyle.textStyle('_12', 'error', 'NUNITO_REGULAR'),
          { height: 19 },
        ]}
      >
        {/* {props.valueObject && props.valueObject.errorText} */}
        {props?.valueObject?.errorText}
      </Text>
    </View>
  );
};
