import * as React from 'react';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Screen from '@screens';
import { SCREENS } from '@constants';
import { DrawerContent } from '@components';
import { TabNavigator } from './tabNavigator';
import { responsiveWidth } from '@resources';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
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
    <Drawer.Navigator
      initialRouteName={'TabNavigator'}
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          width: responsiveWidth(85),
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      {_addScreen('TabNavigator' as never, true, {
        component: TabNavigator,
      })}
    </Drawer.Navigator>
  );
};
