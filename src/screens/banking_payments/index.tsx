/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { SCREENS, TRANSACTIONS, SCHEDULED } from '@constants';
import { AddARecipient } from '@components';
import { useGlobalStyles } from '@resources';
import { Payments } from './payments';
import { Scheduled } from './scheduled';

const Tab = createMaterialTopTabNavigator();

export const BankingPayments = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    if (!transactions) {
      setTransactions(TRANSACTIONS);
    }
  }, []);

  const _addScreen = (
    name: keyof typeof SCREENS,
    component?: React.FunctionComponent,
    extraProps?: any,
    initialParams?: any,
  ) => {
    return (
      <Tab.Screen
        name={name}
        component={component}
        initialParams={initialParams}
        options={{
          tabBarIndicatorContainerStyle: {
            borderBottomWidth: 1,
            borderColor: colors.lightText,
            backgroundColor: colors.background,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
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

  if (!transactions) {
    return <AddARecipient onPress={() => {}} />;
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Tab.Navigator>
        {_addScreen('Payments' as never, Payments, {}, { transactions })}
        {_addScreen('Scheduled' as never, Scheduled, {}, { SCHEDULED })}
      </Tab.Navigator>
    </View>
  );
};
