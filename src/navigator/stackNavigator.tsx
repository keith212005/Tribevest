import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import '../../typings/globals';

// THIRD PARTY IMPORTS
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

// LOCAL IMPORTS
import { navigationRef } from './RootNavigation';
import { MyDarkTheme, LightTheme } from '@resources';
import { SCREENS } from '@constants';
import * as Screen from '@screens';
import { DrawerNavigator } from './drawerNavigator';
import { changeLanguage } from '@languages';
import { actionCreators } from '../actions';

const Stack = createStackNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const App = (props: any) => {
  changeLanguage('en');

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
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              cardStyleInterpolator: forFade,
            }}
          >
            {_addScreen('Splash' as never)}
            {_addScreen('Login' as never)}
            {_addScreen('DrawerNavigator' as never, true, {
              component: DrawerNavigator,
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

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(actionCreators, dispatch);
}

//Connect everything
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
