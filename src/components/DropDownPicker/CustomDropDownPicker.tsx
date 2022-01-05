/* eslint-disable no-undef */
import React from 'react';
import { Text, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker';

// LOCAL IMPORT
import { scale, useGlobalStyles } from '@resources';
import { IfieldObject } from '@constants';
import { useTheme } from '@react-navigation/native';

interface DefaultProps extends DropDownPickerProps {
  label?: string;
  valueObject?: IfieldObject;
  extraStyle: ViewStyle;
}

export const CustomDropDownPicker = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  return (
    <>
      {props.label && (
        <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}>
          {props.label}
        </Text>
      )}

      <DropDownPicker
        style={{
          paddingLeft: scale(16),
          height: scale(40),
          borderColor: colors.placeHolderColor,
          backgroundColor: '#F1F5F9',
          ...props.extraStyle,
        }}
        {...props}
      />

      <Text
        style={[
          globalStyle.textStyle('_12', 'error', 'NUNITO_REGULAR'),
          { height: scale(19) },
        ]}
      >
        {/* {props.valueObject && props.valueObject.errorText} */}
        {props?.valueObject?.errorText}
      </Text>
    </>
  );
};
