/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import { DrawerLeftSide } from './DrawerLeftSide';
import { DrawerRightSideContent } from './DrawerRightSideContent';

export const DrawerContent = (props: any) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: 'row' }}>
        <DrawerLeftSide show={false} />
        <DrawerRightSideContent />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});
