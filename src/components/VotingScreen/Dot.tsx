import React from 'react';
import { ViewStyle } from 'react-native';

// LOCAL IMPORTS
import { color } from '@resources';
import LinearGradient from 'react-native-linear-gradient';

interface DefaultProps {
  extraStyle: ViewStyle;
  size: number;
  colors: Array<string>;
}

export const Dot = ({ extraStyle, size, colors }: DefaultProps) => {
  return (
    <>
      <LinearGradient
        colors={colors}
        style={[
          {
            height: size,
            width: size,
            borderRadius: size / 2,
            backgroundColor: color,
            ...extraStyle,
          },
        ]}
        useAngle={true}
        angle={145}
        angleCenter={{ x: 0.2, y: 0.8 }}
      />
    </>
  );
};
