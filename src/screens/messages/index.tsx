import * as React from 'react';
import { Text } from 'react-native';

// LOCAL IMPORTS
import { styles } from './style';
import { SafeAreaWrapper } from '@components';
import { useSelector } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

export const Messages = () => {
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  return (
    <SafeAreaView
      statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    >
      <Text>Messages screen</Text>
    </SafeAreaView>
  );
};
