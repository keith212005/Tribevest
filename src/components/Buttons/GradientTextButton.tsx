/* eslint-disable no-undef */
import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import FastImage, { Source } from 'react-native-fast-image';

// LOCAL IMPORTS
import { scale, useGlobalStyles } from '@resources';

interface DefaultProps {
  children?: any;
  extraProps?: LinearGradientProps;
  icon?: Source;
  onPress?: () => void;
  textStyle?: TextStyle;
  backgroundColor?: any;
  containerStyle?: ViewStyle;
  fixedBackgroundColor?: boolean;
}

export const GradientTextButton = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...props.containerStyle }}
    >
      <LinearGradient
        useAngle={true}
        angle={179}
        angleCenter={{ x: 0.2, y: 0.8 }}
        colors={
          props.fixedBackgroundColor
            ? props.backgroundColor
            : colors.primaryGradiant
        }
        style={{ borderRadius: 100, padding: 1 }}
        {...props.extraProps}
      >
        <LinearGradient
          useAngle={true}
          angle={179}
          angleCenter={{ x: 0.2, y: 0.8 }}
          colors={props.backgroundColor ?? ['white', 'white']}
          style={{
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: scale(38),
            flexDirection: 'row',
          }}
        >
          {props.icon && (
            <FastImage
              source={props.icon as Source}
              style={[globalStyle.squareLayout(20)]}
              resizeMode={FastImage.resizeMode.contain}
            />
          )}

          <MaskedView
            maskElement={<Text {...props} />}
            style={{ marginLeft: 5 }}
          >
            <LinearGradient
              colors={colors.primaryGradiant}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={{ borderWidth: 0, borderColor: 'red' }}
            >
              <Text {...props} style={[{ opacity: 0, ...props.textStyle }]} />
            </LinearGradient>
          </MaskedView>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};
