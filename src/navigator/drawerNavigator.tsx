import React from 'react';

// THIRD PARTY IMPORTS
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect, useSelector } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { DrawerContent } from '@components';
import { actionCreators } from '@actions';
import { SCREENS } from '@constants';
import { TabNavigator } from './tabNavigator';
import { responsiveWidth } from '@resources';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
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
        initialRouteName={'TabNavigator'}
        screenOptions={{
          drawerType: 'front',
          headerShown: false,
          drawerStyle: {
            width: responsiveWidth(isDrawerLeftSideCollapsed ? 100 : 86),
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        {_addScreen('TabNavigator' as never, true, {
          component: TabNavigator,
        })}
      </Drawer.Navigator>
    </>
  );
};

function mapStateToProps(state: any) {
  console.log(state);

  return {
    selectedGradient: state.theme.selectedGradient,
    isDarkTheme: state.theme.isDarkTheme,
    isDrawerLeftSideCollapsed: state.isDrawerLeftSideCollapsed,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(actionCreators, dispatch);
}

//Connect everything
export const DrawerNavigator = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerNav);
