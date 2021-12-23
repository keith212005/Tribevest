import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';

interface DefaultProps {
  icon: any;
  iconSize: number;
  text: string;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
  tintColor?: string;
  containerStyle?: ViewStyle;
}

export const MotionStatus = ({
  icon,
  text,
  iconSize,
  textStyle,
  iconStyle,
  tintColor,
  containerStyle,
}: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <View
      style={[
        globalStyle.layoutDirection('row', 'flex-start', 'center'),
        { ...containerStyle },
      ]}
    >
      <FastImage
        source={icon}
        style={[globalStyle.squareLayout(iconSize), { ...iconStyle }]}
        resizeMode={FastImage.resizeMode.contain}
        tintColor={tintColor}
      />

      <Text
        style={[
          globalStyle.textStyle('_12', 'text', 'NUNITO_BOLD'),
          { ...textStyle },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
