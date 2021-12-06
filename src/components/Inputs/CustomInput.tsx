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
}

export const CustomInput: React.FC<CustomInputProps> = (
  props: CustomInputProps,
) => {
  const globalStyle = useGlobalStyles();

  console.log(props.valueObject);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <FastImage
          style={[globalStyle.squareLayout(20), styles.leftImage]}
          source={props.leftIcon as Source}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={props.valueObject?.isError ? color.error : color.black}
        />
        <TextInput
          blurOnSubmit={false}
          {...props}
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
        />
        {props.secureTextEntry && (
          <Pressable style={styles.rightImage}>
            <FastImage
              style={[globalStyle.squareLayout(20)]}
              source={images.eye_slash}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Pressable>
        )}
      </View>
      <Text style={[globalStyle.textStyle('_12', 'error', 'NUNITO_REGULAR')]}>
        {props.valueObject && props.valueObject.isError
          ? props.valueObject.errorText
          : ''}
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
