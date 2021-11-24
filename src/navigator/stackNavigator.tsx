/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import '../../typings/globals';

// THIRD PARTY IMPORTS
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

// LOCAL IMPORTS
import { navigationRef } from './RootNavigation';
import { MyDarkTheme, LightTheme } from '@resources';
import { SCREENS } from '@constants';
import * as Screen from '@screens';
import { DrawerNavigator } from './drawerNavigator';
import { HeaderBackground } from '@components';

const Stack = createStackNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const App = (props: any) => {
  useEffect(() => {}, []);

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
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <NavigationContainer
          ref={navigationRef}
          theme={props.isDarkTheme ? MyDarkTheme : LightTheme}
          onReady={() => {
            setTimeout(() => {
              SplashScreen.hide();
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
            {_addScreen('Theme' as never, false, {
              options: {
                headerShown: true,
                headerBackground: () => <HeaderBackground />,
                headerBackTitleVisible: false,
                headerTintColor: 'white',
                headerMode: 'screen',
              },
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </View>
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
