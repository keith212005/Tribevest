import * as React from 'react';
import { Text, Platform, Image, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
// LOCAL IMPORTS
import { SCREENS } from '@constants';
import * as Screen from '@screens';
import { colors, useGlobalStyles, responsiveHeight, images } from '@resources';
import { nullPlaceholder } from 'i18n-js';

const Tab = createBottomTabNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const TabNavigator = () => {
  const globalStyles = useGlobalStyles();

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
          var imageName;

          if (route.name === SCREENS.Tribes) {
            imageName = focused ? images.tribes_active : images.tribes_inactive;
          } else if (route.name === SCREENS.Messages) {
            imageName = focused
              ? images.messages_active
              : images.messages_inactive;
          } else if (route.name === SCREENS.Alerts) {
            imageName = images.alerts_inactive;
          } else if (route.name === SCREENS.Profile) {
            imageName = focused ? images.tribes_active : images.tribes_inactive;
          }
          return (
            <>
              <Image
                source={imageName}
                style={[
                  styles.image(focused),
                  {
                    tintColor:
                      route.name === SCREENS.Alerts && focused
                        ? colors.green
                        : null,
                  },
                ]}
              />

              <Text
                style={[
                  globalStyles.textStyle('_12', 'text', 'NUNITO_REGULAR'),
                  { color: focused ? colors.green : color },
                ]}
              >
                {route.name}
              </Text>
            </>
          );
        },
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: responsiveHeight(Platform.OS === 'ios' ? 10 : 9),
        },
        headerTintColor: 'white',
      })}
    >
      {_addScreen('Tribes' as never, false)}
      {_addScreen('Messages' as never, false)}
      {_addScreen('Alerts' as never, false)}
      {_addScreen('Profile' as never, false)}
    </Tab.Navigator>
  );
};

type Style = {
  image: (focused: boolean) => object;
};
type CreateStyles = <T extends any>(styles: T) => T;
export const createStyles: CreateStyles = StyleSheet.create;
const styles = createStyles<Style>({
  image: (focused) => ({
    width: '100%',
    aspectRatio: 1,
    shadowColor: focused ? colors.green : colors.white,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  }),
});
