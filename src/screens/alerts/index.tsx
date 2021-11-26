import * as React from 'react';
import { Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { styles } from './style';
import { SafeAreaWrapper } from '@components';

export const Alerts = () => {
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  return (
    <SafeAreaWrapper
      statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    >
      <Text>Alerts screen</Text>
    </SafeAreaWrapper>
  );
};
