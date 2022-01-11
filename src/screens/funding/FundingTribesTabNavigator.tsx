/* eslint-disable no-undef */
import React from 'react';
import { Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// LOCAL IMPORTS
import { useSelector } from 'react-redux';
import { SCREENS } from '@constants';
import { useGlobalStyles } from '@resources';
import { FundingRoundsTabScreen } from './FundingRoundsTabScreen';
import { TribeContributionsTabScreen } from './TribeContributionsTabScreen';

const Tab = createMaterialTopTabNavigator();

export const FundingTribesTabNavigator = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  const _addScreen = (
    name: keyof typeof SCREENS,
    component?: React.FunctionComponent,
    extraProps?: any,
  ) => {
    return (
      <Tab.Screen
        name={name}
        component={component}
        options={{
          tabBarIndicatorContainerStyle: {
            borderBottomWidth: 1,
            borderColor: colors.lightText,
            backgroundColor: isDarkTheme ? colors.background : colors.white,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
            borderRadius: 60,
            borderColor: colors.blue,
          },
          tabBarLabel: (item: any) => {
            return (
              <Text
                style={{
                  ...globalStyle.textStyle(
                    '_14',
                    item.focused ? 'blue' : 'text',
                    'NUNITO_REGULAR',
                  ),
                }}
              >
                {name}
              </Text>
            );
          },
        }}
        {...extraProps}
      />
    );
  };

  return (
    <Tab.Navigator>
      {_addScreen('Funding Rounds' as never, FundingRoundsTabScreen)}
      {_addScreen('Tribe Contributions' as never, TribeContributionsTabScreen)}
    </Tab.Navigator>
  );
};
