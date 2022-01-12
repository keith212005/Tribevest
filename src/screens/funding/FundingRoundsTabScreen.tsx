/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { DetailsMyContributionsTabNavigator } from './DetailsMyContributionsTabNavigator';

// LOCAL IMPORTS
import { GradientTextButton, CustomDropDownPicker } from '@components';
import { BANKING_MENU } from '@constants';
import { useGlobalStyles } from '@resources';

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

      {/* Render Create new funding round button */}
      <GradientTextButton
        onPress={() => console.log('sdfdsfsaddsafda')}
        backgroundColor={
          isDarkTheme ? [colors.card, colors.card] : ['white', 'white']
        }
      >
        {loc('CREATE_NEW_FUNDING_FOUND')}
      </GradientTextButton>

      {/* Render Funding Rounds and Tribe Contributions Tab */}
      <DetailsMyContributionsTabNavigator />
    </View>
  );
};
