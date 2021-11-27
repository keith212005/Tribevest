/* eslint-disable no-undef */
import * as React from 'react';
import { Text, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { SCREENS } from '@constants';
import { images, responsiveHeight, useGlobalStyles } from '@resources';
import { FastImg } from '@components';

const Tab = createBottomTabNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const TabNavigator = () => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

  /**
  |--------------------------------------------------
  | Global Declaration section end
  |--------------------------------------------------
  */

  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any,
  ) => {
    return (
      <Tab.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = 'home';

          if (route.name === SCREENS.Tribes) {
            iconName = focused ? images.tribes_active : images.tribes_inactive;
          } else if (route.name === SCREENS.Messages) {
            iconName = focused
              ? images.messages_active
              : images.messages_inactive;
          } else if (route.name === SCREENS.Alerts) {
            iconName = focused ? images.alerts_active : images.alerts_inactive;
          } else if (route.name === SCREENS.Profile) {
            iconName = focused
              ? images.messages_active
              : images.messages_inactive;
          }
          return (
            <>
              {FastImg(iconName, 25)}
              <Text
                style={[
                  globalStyles.textStyle(
                    '_12',
                    'text',
                    focused ? 'NUNITO_BOLD' : 'NUNITO_REGULAR',
                  ),
                  {
                    color: focused ? colors.green : color,
                    marginTop: 5,
                  },
                ]}
              >
                {route.name}
              </Text>
            </>
          );
        },
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: responsiveHeight(Platform.OS === 'ios' ? 10 : 8),
        },
      })}
    >
      {_addScreen('Tribes' as never, false, {})}
      {_addScreen('Messages' as never, false)}
      {_addScreen('Alerts' as never, false)}
      {_addScreen('Profile' as never, false)}
    </Tab.Navigator>
  );
};
