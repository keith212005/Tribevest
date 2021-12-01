/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  StatusBarStyle,
  StatusBarProps,
} from 'react-native';

// THIRD PARTY IMPORTS
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { FocusAwareStatusBar } from './FocusAwareStatusBar';

interface ISafeAreaWrapperProps {
  safeAreaProps?: SafeAreaViewProps;
  statusBarStyle?: string;
  statusBarBackgroundColor?: string[];
  containerStyle?: ViewStyle;
  statusBarProps?: StatusBarProps;
  children?: React.ReactNode;
}

export const SafeAreaWrapper: React.FC<ISafeAreaWrapperProps> = ({
  safeAreaProps = {},
  containerStyle = { flex: 1 },
  statusBarProps = {},
  children,
  ...rest
}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[styles.container, containerStyle, { marginTop: insets.top }]}
      {...safeAreaProps}
    >
      <FocusAwareStatusBar statusBarProps={statusBarProps} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
