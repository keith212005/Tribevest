/* eslint-disable no-undef */
import React from 'react';
import { Platform } from 'react-native';
import '../../typings/globals';

// THIRD PARTY IMPORTS
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { SCREENS } from '@constants';
import { navigationRef } from './RootNavigation';
import { MyDarkTheme, LightTheme } from '@resources';
import { DrawerNavigator } from './drawerNavigator';

const Stack = createStackNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const App = (props: any) => {
  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any,
  ) => {
    return (
      <Stack.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={props.isDarkTheme ? MyDarkTheme : LightTheme}
      onReady={() => {
        setTimeout(() => {
          if (Platform.OS === 'android') {
            SplashScreen.hide();
          }
        }, 1000);
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: forFade,
        }}
      >
        {/* {_addScreen('Splash' as never)} */}
        {_addScreen('Login' as never)}
        {_addScreen('DrawerNavigator' as never, true, {
          component: DrawerNavigator,
        })}
        {_addScreen('Onboarding' as never)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function mapStateToProps(state: any) {
  return { isOnline: state.isOnline, isDarkTheme: state.theme.isDarkTheme };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
