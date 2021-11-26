import React from 'react';
import { Dimensions } from 'react-native';

// THIRD PARTY IMPORTS
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { DrawerContent } from '@components';
import { actionCreators } from '@actions';
import { SCREENS } from '@constants';
import { TabNavigator } from './tabNavigator';

const { width } = Dimensions.get('window');
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
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
            width: width - width / 7,
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
  return {
    selectedGradient: state.theme.selectedGradient,
    isDarkTheme: state.theme.isDarkTheme,
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
