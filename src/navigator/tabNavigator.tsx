/* eslint-disable no-undef */
import * as React from 'react';
import { Text, Platform, View } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// LOCAL IMPORTS
import * as Screen from '@screens';
import { SCREENS } from '@constants';
import { images, responsiveHeight, useGlobalStyles } from '@resources';

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
              <View
                style={{
                  shadowColor: focused ? colors.green : colors.transparent,
                  padding: 2,
                  borderRadius: 10,
                  ...Platform.select({
                    ios: {
                      shadowOffset: {
                        width: 0,
                        height: 8,
                      },
                      shadowRadius: 8,
                      shadowOpacity: 1,
                    },
                    android: {
                      elevation: 5,
                    },
                  }),
                }}
              >
                <FastImage
                  source={iconName as any}
                  style={[globalStyles.squareLayout(20)]}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>

              <Text
                style={[
                  globalStyles.textStyle(
                    '_11',
                    'text',
                    focused ? 'NUNITO_BOLD' : 'NUNITO_REGULAR',
                  ),
                  { color: focused ? colors.green : color },
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
