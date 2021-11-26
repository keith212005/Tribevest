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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
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
  containerStyle = { flex: 1 },
  statusBarProps = {},
  children,
  ...rest
}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[styles.container, containerStyle, { marginTop: insets.top }]}
    >
      <FocusAwareStatusBar
        barStyle={statusBarStyle as StatusBarStyle}
        statusBarProps={statusBarProps}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
