/* eslint-disable @typescript-eslint/no-unused-vars */
import { color } from '@resources';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS

interface ISafeAreaWrapperProps {
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
}

export const LinearGradeintBackground: React.FC<ISafeAreaWrapperProps> = ({
  containerStyle = { flex: 1 },
  children,
}) => {
  return (
    <LinearGradient colors={color.primaryGradiant} style={[containerStyle]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
