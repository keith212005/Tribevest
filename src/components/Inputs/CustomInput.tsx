/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { IfieldObject } from '@constants';
import { useGlobalStyles } from '@resources';

interface Props extends TextInputProps {
  label?: string;
  refName?: any;
  valueObject?: IfieldObject;
}

const CustomInput: React.FC<Props> = (props: Props) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

  return (
    <>
      {props.label && (
        <Text
          style={globalStyle.textStyle(
            '_14',
            'textPrimaryColor',
            'NUNITO_SEMIBOLD',
          )}
        >
          {props.label}
        </Text>
      )}
      <TextInput
        blurOnSubmit={false}
        {...props}
        ref={props.refName}
        style={[
          styles.input,
          {
            backgroundColor: colors.white,
            borderColor:
              props.valueObject && props.valueObject.isError
                ? colors.hot_red
                : props.valueObject && props.valueObject.isFocus
                ? colors.primaryColor
                : colors.unfocusBorder,
          },
        ]}
      />
      <Text
        style={[globalStyle.textStyle('_14', 'hot_red', 'NUNITO_SEMIBOLD')]}
      >
        {props.valueObject && props.valueObject.isError
          ? props.valueObject.errorText
          : ''}
      </Text>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
