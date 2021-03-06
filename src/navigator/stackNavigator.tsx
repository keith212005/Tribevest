/* eslint-disable no-undef */
import React from 'react';
import { Platform } from 'react-native';
import '../../typings/globals';

// THIRD PARTY IMPORTS
import { connect } from 'react-redux';
import { Host } from 'react-native-portalize';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { SCREENS } from '@constants';
import { navigationRef } from './RootNavigation';
import { MyDarkTheme, LightTheme } from '@resources';
import { DrawerNavigator } from './drawerNavigator';
import { CustomStatusBar, OfflineNotice } from '@components';

const Stack = createNativeStackNavigator();

// const forFade = ({ current }: { current: any }) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });

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

  SystemNavigationBar.setNavigationColor(props.isDark ? '#273143' : 'white');

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={props.isDark ? MyDarkTheme : LightTheme}
      onReady={() => {
        setTimeout(() => {
          if (Platform.OS === 'android') {
            SplashScreen.hide();
          }
        }, 1000);
      }}
    >
      <Host>
        <CustomStatusBar />
        <OfflineNotice />
        <Stack.Navigator
          initialRouteName={'Signin'}
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            // cardStyleInterpolator: forFade,
          }}
        >
          {_addScreen('Signin' as never)}
          {_addScreen('SignUp' as never)}
          {_addScreen('PasswordReset' as never)}
          {_addScreen('CheckEmail' as never)}
          {_addScreen('NewPassword' as never)}
          {_addScreen('FaceId' as never)}

          {_addScreen('DrawerNavigator' as never, true, {
            component: DrawerNavigator,
          })}
          {_addScreen('Onboarding' as never)}
          {_addScreen('SignUpSteps' as never)}
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

function mapStateToProps(state: any) {
  console.log(state);

  return {
    isDark: state.theme.isDarkTheme,
    isOpenedFirstTime: state.isOpenedFirstTime,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
