/* eslint-disable no-undef */
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { images, useGlobalStyles, verticalScale } from '@resources';
import { SCREENS, TRANSACTIONS } from '@constants';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { TransactionCard } from '@components';
import { Divider } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();

const Transactions = () => {
  const globalStyle = useGlobalStyles();
  const [data, setData] = useState(TRANSACTIONS);

  if (!data) {
    return (
      <View
        style={[
          { flex: 1 },
          globalStyle.layoutDirection('column', 'center', 'center'),
        ]}
      >
        <FastImage
          source={images.no_transactions}
          style={globalStyle.squareLayout(200)}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }

  const renderTransactionItem = ({ item }: any) => (
    <TransactionCard item={item} />
  );

  return (
    <View style={[{ flex: 1 }]}>
      <FlatList
        data={data}
        renderItem={renderTransactionItem}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginVertical: verticalScale(16) }} />
        )}
      />
    </View>
  );
};

const Scheduled = () => {
  return (
    <View>
      <Text>Scheduled</Text>
    </View>
  );
};

const Cancelled = () => {
  return (
    <View>
      <Text>Cancelled</Text>
    </View>
  );
};

export const BankingTransactions = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
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

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Tab.Navigator>
        {_addScreen('Transactions' as never, Transactions)}
        {_addScreen('Scheduled' as never, Scheduled)}
        {_addScreen('Cancelled' as never, Cancelled)}
      </Tab.Navigator>
    </View>
  );
};
