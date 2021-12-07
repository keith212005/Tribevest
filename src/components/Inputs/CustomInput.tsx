/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  View,
  Platform,
  Pressable,
} from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';

// LOCAL IMPORTS
import { IfieldObject } from '@constants';
import {
  color,
  images,
  scale,
  useGlobalStyles,
  verticalScale,
} from '@resources';
import FastImage, { Source } from 'react-native-fast-image';

export interface CustomInputProps extends TextInputProps {
  label?: string;
  refName?: any;
  valueObject?: IfieldObject;
  leftIcon?: string;
  showPasswordIcon?: boolean;
  onPressRightIcon?: any;
}

export const CustomInput: React.FC<CustomInputProps> = (
  props: CustomInputProps,
) => {
  console.log('rendering Custom inptu');
  const [state, setState] = createState({
    secureTextEntry: props.showPasswordIcon ? true : false,
  });
  const globalStyle = useGlobalStyles();

  const handleRightIconClick = () => {
    setState({ secureTextEntry: !state.secureTextEntry });
  };

  console.log(props.valueObject && props.valueObject.isError);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center' }}>
        <FastImage
          style={[globalStyle.squareLayout(20), styles.leftImage]}
          source={props.leftIcon as Source}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={props.valueObject?.isError ? color.error : color.black}
        />
        <TextInput
          blurOnSubmit={false}
          secureTextEntry={state.secureTextEntry}
          ref={props.refName}
          style={[
            styles.input,
            {
              backgroundColor:
                props.valueObject && props.valueObject.isError
                  ? color.error_light
                  : color.inputBackgroundColor,
            },
          ]}
          {...props}
        />
        {props.showPasswordIcon && (
          <Pressable style={styles.rightImage} onPress={handleRightIconClick}>
            <FastImage
              style={[globalStyle.squareLayout(20)]}
              source={
                state.secureTextEntry && !props.valueObject?.isError
                  ? images.eye_slash
                  : props.valueObject && props.valueObject.isError
                  ? images.eye_slash_error
                  : images.eye_slash_error
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </Pressable>
        )}
      </View>
      <Text
        style={[
          globalStyle.textStyle('_12', 'error', 'NUNITO_REGULAR'),
          { height: scale(19) },
        ]}
      >
        {props.valueObject && props.valueObject.errorText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    color: color.black,
    padding: 10,
    borderRadius: 8,
    paddingLeft: 40,
    height: Platform.OS === 'ios' ? verticalScale(40) : verticalScale(50),
  },
  leftImage: {
    position: 'absolute',
    zIndex: 1,
    margin: scale(10),
  },
  rightImage: {
    marginRight: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingRight: 10,
  },
});
