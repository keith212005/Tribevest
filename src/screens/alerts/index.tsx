import * as React from 'react';
import { Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

// LOCAL IMPORTS
import { styles } from './style';

export const Alerts = () => {
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  return (
    <SafeAreaView>
      <Text>Alerts screen</Text>
    </SafeAreaView>
  );
};
