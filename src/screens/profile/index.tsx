import * as React from 'react';
import { Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

// LOCAL IMPORTS
import { styles } from './style';
import { SafeAreaWrapper } from '@components';

export const Profile = () => {
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  return (
    <SafeAreaView
      statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    >
      <Text>Alerts screen</Text>
    </SafeAreaView>
  );
};
