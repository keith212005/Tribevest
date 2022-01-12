/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// LOCAL IMPORTS
import { SCREENS } from '@constants';
import { _renderText } from '@components';
import { useSelector } from 'react-redux';
import { images, useGlobalStyles } from '@resources';
import { DetailsTabScreen } from './DetailsTabScreen';
import { MyContributionsTabScreen } from './MyContributionsTabScreen';

const Tab = createMaterialTopTabNavigator();

export const DetailsMyContributionsTabNavigator = () => {
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
            backgroundColor: isDarkTheme ? colors.card : colors.white,
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
    <View style={[styles.container]}>
      <View
        style={[globalStyle.layoutDirection('row', 'space-between', 'center')]}
      >
        {/* Render Funding Round Number */}
        {_renderText(loc('OUR_THIRD_FUNDING_ROUND'), {
          ...globalStyle.textStyle('_16', 'text', 'NUNITO_SEMIBOLD'),
        })}
        {/* Render Active Button */}
        <View style={[styles.activeBtnContainer]}>
          {_renderText(loc('ACTIVE'), {
            ...globalStyle.textStyle('_10', 'green_text', 'NUNITO_SEMIBOLD'),
          })}
        </View>
      </View>

      {/* Render Days Left */}
      {_renderText('12 ' + loc('DAYS_LEFT'), {
        ...globalStyle.textStyle('_10', 'lightText', 'NUNITO_SEMIBOLD'),
        marginVertical: 10,
      })}

      <View
        style={[globalStyle.layoutDirection('row', 'flex-start', 'center')]}
      >
        {/* Render Dollar Image */}
        <FastImage
          source={images.dollar_circle}
          style={[globalStyle.squareLayout(20)]}
          resizeMode={FastImage.resizeMode.contain}
        />

        {/* Render Amount */}
        {_renderText('$25,000.00', {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
          marginLeft: 4,
        })}
      </View>

      {/* Render Details and My Contributions Tab Navigator */}
      <Tab.Navigator>
        {_addScreen('Details' as never, DetailsTabScreen)}
        {_addScreen('My Contributions' as never, MyContributionsTabScreen)}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: 'grey',
  },
  activeBtnContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#D8F7EA',
    borderRadius: 60,
  },
});
