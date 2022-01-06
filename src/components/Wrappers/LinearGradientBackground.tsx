/* eslint-disable @typescript-eslint/no-unused-vars */
import { color } from '@resources';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS

interface ISafeAreaWrapperProps {
  colors: any;
  containerStyle?: Array<any> | ViewStyle;
  children?: React.ReactNode;
  extraProps?: any;
}

export const LinearGradientWrapper: React.FC<ISafeAreaWrapperProps> = ({
  colors = color.primaryGradiant,
  containerStyle = { flex: 1 },
  children,
  extraProps = {},
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[containerStyle]}
      useAngle={true}
      angle={145}
      angleCenter={{ x: 0.2, y: 0.8 }}
      {...extraProps}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
