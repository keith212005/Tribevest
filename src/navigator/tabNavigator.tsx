import * as React from 'react';
import { Text, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// LOCAL IMPORTS
import { SCREENS } from '@constants';
import * as Screen from '@screens';
import { RenderIcon, HeaderLeftIcon, HeaderBackground } from '@components';
import { useSelector } from 'react-redux';
import { responsiveHeight, useGlobalStyles } from '@resources';

const Tab = createBottomTabNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const TabNavigator = () => {
  const selectedGradient = useSelector(
    (state: any) => state.theme.selectedGradient,
  );
  const globalStyles = useGlobalStyles();

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
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: string = 'home';
            console.log(route.name);

            if (route.name === SCREENS.DrawerNavigator) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === SCREENS.Leads) {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }
            return (
              <>
                {RenderIcon(iconName, 'ionicon', 20, {
                  color: focused ? selectedGradient[0] : color,
                })}
                <Text
                  style={[
                    globalStyles.textStyle(
                      '_12',
                      'text',
                      focused ? 'NUNITO_BOLD' : 'NUNITO_REGULAR',
                    ),
                    {
                      color: focused ? selectedGradient[0] : color,
                      marginTop: 5,
                    },
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
          headerBackground: () => <HeaderBackground />,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: responsiveHeight(Platform.OS === 'ios' ? 10 : 8),
          },
          headerTintColor: 'white',
        })}
      >
        {_addScreen('Dashboard' as never, false, {
          options: {
            headerLeft: () => <HeaderLeftIcon />,
          },
        })}
        {/* {_addScreen('Leads' as never, false, {
          options: { headerLeft: () => <HeaderLeftIcon /> },
        })} */}
      </Tab.Navigator>
    </>
  );
};
