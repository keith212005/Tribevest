import React from 'react';

// THIRD PARTY IMPORTS
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { DrawerContent } from '@components';
import { SCREENS } from '@constants';
import { BottomTabNavigator } from './bottomTabNavigator';
import { responsiveWidth } from '@resources';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const isDrawerLeftSideCollapsed = useSelector(
    (state: any) => state.isDrawerLeftSideCollapsed,
  );

  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any,
  ) => {
    return (
      <Drawer.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };

  return (
    <>
      <Drawer.Navigator
        initialRouteName={'BottomTabNavigator'}
        screenOptions={{
          drawerType: 'back', // important otherwise messup drawerleftside animation
          headerShown: false,
          drawerStyle: {
            width: responsiveWidth(isDrawerLeftSideCollapsed ? 100 : 90),
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        {_addScreen('BottomTabNavigator' as never, true, {
          component: BottomTabNavigator,
        })}
      </Drawer.Navigator>
    </>
  );
};
