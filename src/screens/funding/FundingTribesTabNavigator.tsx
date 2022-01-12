/* eslint-disable no-undef */
import React from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// LOCAL IMPORTS
import { SCREENS } from '@constants';
import { useSelector } from 'react-redux';
import { CardWrapper, _renderText } from '@components';
import { scale, useGlobalStyles } from '@resources';
import { FundingRoundsTabScreen } from './FundingRoundsTabScreen';
import { TribeContributionsTabScreen } from './TribeContributionsTabScreen';

const Tab = createMaterialTopTabNavigator();

export const FundingTribesTabNavigator = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDark = useSelector((state: any) => state.theme.isDarkTheme);

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
            backgroundColor: isDark ? colors.background : colors.white,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
            borderRadius: 60,
            borderColor: colors.blue,
          },
          tabBarLabel: (item: any) => {
            let color = item.focused ? 'blue' : 'text';
            return (
              <>
                {_renderText(name, {
                  ...globalStyle.textStyle('_14', color, 'NUNITO_REGULAR'),
                })}
              </>
            );
          },
        }}
        {...extraProps}
      />
    );
  };

  return (
    <CardWrapper
      containerStyle={{ backgroundColor: isDark ? colors.background : 'white' }}
    >
      <View style={{ flex: 1, height: scale(1250) }}>
        <Tab.Navigator>
          {_addScreen('Funding Rounds' as never, FundingRoundsTabScreen)}
          {_addScreen(
            'Tribe Contributions' as never,
            TribeContributionsTabScreen,
          )}
        </Tab.Navigator>
      </View>
    </CardWrapper>
  );
};
