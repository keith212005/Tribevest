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
  ViewStyle,
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
  extraStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}

export const CustomInput: React.FC<CustomInputProps> = (
  props: CustomInputProps,
) => {
  const [state, setState] = createState<any>({
    secureTextEntry: props.showPasswordIcon ? true : false,
  });

  const globalStyle = useGlobalStyles();

  const handleRightIconClick = () => {
    setState({ secureTextEntry: !state.secureTextEntry });
  };

  return (
    <View style={[styles.container, { ...props.containerStyle }]}>
      {props.label && (
        <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}>
          {props.label}
        </Text>
      )}
      <View style={{ justifyContent: 'center' }}>
        {props.leftIcon && (
          <FastImage
            style={[globalStyle.squareLayout(20), styles.leftImage]}
            source={props.leftIcon as Source}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={props.valueObject?.isError ? color.error : color.black}
          />
        )}
        <TextInput
          placeholderTextColor={color.placeHolderColor}
          blurOnSubmit={false}
          secureTextEntry={state.secureTextEntry}
          ref={props.refName}
          style={[
            styles.input,
            {
              backgroundColor: props.valueObject?.isError
                ? color.error_light
                : color.inputBackgroundColor,
              paddingLeft: props.leftIcon ? 40 : 20,
              textAlignVertical: props.multiline ? 'top' : 'auto',
            },
            props.extraStyle,
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
                  : props.valueObject?.isError
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
        {props.valueObject?.errorText}
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
    borderRadius: 8,
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
