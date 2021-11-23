/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Text, Platform, Image, StyleSheet, View } from 'react-native';

// THIRD PARTY IMPORTS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

// LOCAL IMPORTS
import { HeaderLeftIcon } from '@components';
import { SCREENS } from '@constants';
import * as Screen from '@screens';
import { useGlobalStyles, responsiveHeight, images, color } from '@resources';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const TabNavigator = () => {
  const globalStyles = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarktheme);

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
              <View style={styles.imageContainer(focused, colors)}>
                <Image source={imageName} style={[styles.image(focused)]} />
              </View>

              <Text
                style={[
                  globalStyles.textStyle('_12', 'text', 'NUNITO_SEMIBOLD'),
                  { color: focused ? colors.green : colors.text },
                ]}
              >
                {route.name}
              </Text>
            </>
          );
        },
        headerShown: true,
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: responsiveHeight(Platform.OS === 'ios' ? 10 : 7),
        },
      })}
    >
      {_addScreen('Tribes' as never, false, {
        options: {
          headerLeft: () => <HeaderLeftIcon />,
        },
      })}
      {_addScreen('Messages' as never, false)}
      {_addScreen('Alerts' as never, false)}
      {_addScreen('Profile' as never, false)}
    </Tab.Navigator>
  );
};

type Style = {
  image: (focused: boolean) => object;
  imageContainer: (focused: boolean, colors: typeof color) => object;
};
type CreateStyles = <T extends any>(styles: T) => T;
export const createStyles: CreateStyles = StyleSheet.create;
const styles = createStyles<Style>({
  image: (focused) => ({
    width: '100%',
    aspectRatio: 1,
  }),
  imageContainer: (focused, colors) => ({
    ...Platform.select({
      ios: {
        shadowColor: focused ? colors.green : 'transparent',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 15,
      },
      android: {
        elevation: 10,
        shadowColor: colors.green,
      },
    }),
  }),
});
