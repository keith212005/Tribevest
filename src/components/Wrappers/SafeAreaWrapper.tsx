/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ViewStyle,
  StatusBarStyle,
  ColorValue,
  StatusBarProps,
} from 'react-native';

/**
 * ? Local Imports
 */
import { FocusAwareStatusBar } from './FocusAwareStatusBar';

interface ISafeAreaWrapperProps {
  statusBarStyle?: string;
  statusBarBackgroundColor?: string[];
  containerStyle?: ViewStyle;
  statusBarProps?: StatusBarProps;
  children?: React.ReactNode;
}

export const SafeAreaWrapper: React.FC<ISafeAreaWrapperProps> = ({
  statusBarStyle = 'dark-content',
  statusBarBackgroundColor = ['red', 'red'],
  containerStyle = { flex: 1 },
  statusBarProps = {},
  children,
  ...rest
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <FocusAwareStatusBar
        barStyle={statusBarStyle as StatusBarStyle}
        statusBarBackgroundColor={statusBarBackgroundColor}
        statusBarProps={statusBarProps}
      />

      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
