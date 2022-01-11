/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import { fontScale } from 'react-native-utils-scale';
import { DetailsMyContributionsTabNavigator } from './DetailsMyContributionsTabNavigator';

// LOCAL IMPORTS
import { BANKING_MENU } from '@constants';
import { images, useGlobalStyles } from '@resources';
import {
  CustomDropDownPicker,
  _renderText,
  GradientTextButton,
} from '@components';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export const FundingRoundsTabScreen = () => {
  const globalStyle = useGlobalStyles();
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const { colors } = useTheme() as CustomTheme;

  const [actionOpen, setActionOpen] = useState(false);
  const [value, setValue] = useState('Accounts');
  const [items, setItems] = useState(BANKING_MENU);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkTheme ? colors.background : colors.white,
      }}
    >
      {/* RENDER STATEMENTS DROPDOWN PICKER */}
      <CustomDropDownPicker
        open={actionOpen}
        value={value}
        items={items}
        setOpen={setActionOpen}
        setValue={setValue}
        setItems={setItems}
        extraStyle={{ borderWidth: 0 }}
        mainContainerStyle={{
          marginTop: 16,
          zIndex: 1000,
        }}
        containerStyle={{}}
        labelStyle={[globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR')]}
      />

      <GradientTextButton
        style={[{ fontSize: fontScale(14) }]}
        onPress={() => console.log('sdfdsfsaddsafda')}
      >
        {loc('CREATE_NEW_FUNDING_FOUND')}
      </GradientTextButton>

      <View
        style={{
          borderWidth: 1,
          marginVertical: 8,
          borderRadius: 8,
          borderColor: 'grey',
          padding: 16,
          flex: 1,
        }}
      >
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'center'),
          ]}
        >
          {_renderText(loc('OUR_THIRD_FUNDING_ROUND'), {
            ...globalStyle.textStyle('_16', 'text', 'NUNITO_SEMIBOLD'),
          })}
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 4,
              backgroundColor: '#D8F7EA',
              borderRadius: 60,
            }}
          >
            {_renderText(loc('ACTIVE'), {
              ...globalStyle.textStyle('_10', 'green_text', 'NUNITO_SEMIBOLD'),
            })}
          </View>
        </View>

        {_renderText('12 ' + loc('DAYS_LEFT'), {
          ...globalStyle.textStyle('_10', 'lightText', 'NUNITO_SEMIBOLD'),
        })}

        <View
          style={[globalStyle.layoutDirection('row', 'flex-start', 'center')]}
        >
          <FastImage
            source={images.dollar_circle}
            style={[globalStyle.squareLayout(20)]}
            resizeMode={FastImage.resizeMode.contain}
          />

          {_renderText('$25,000.00', {
            ...globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
            marginLeft: 4,
            marginVertical: 10,
          })}
        </View>

        <DetailsMyContributionsTabNavigator />
      </View>
    </View>
  );
};
