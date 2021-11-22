/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

// THIRD PARTY IMPORTS
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Divider, Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveHeight, useGlobalStyles, images } from '@resources';
import { resetNavigation } from '@navigator';
import { RenderIcon } from '@components';
import DrawerLeftSideFlatList from './DrawerLeftSideFlatList';

export const DrawerContent = (props: any) => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: 'row' }}>
        <DrawerLeftSideFlatList />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});
