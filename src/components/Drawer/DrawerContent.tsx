/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { DrawerLeftSide } from './DrawerLeftSide';
import { DrawerRightSide } from './DrawerRightSide';

export const DrawerContent = (props: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
      <DrawerLeftSide />
      <DrawerRightSide />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
