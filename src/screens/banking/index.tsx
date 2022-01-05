/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { styles } from './style';
import { CustomDropDownPicker, MainHeader, _renderText } from '@components';
import { images, scale, useGlobalStyles } from '@resources';
import { BANKING_MENU } from '@constants';
import { CardLayout } from './CardLayout';
import { AccountsLayout } from './AccountsLayout';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export const Banking = () => {
  const insets = useSafeAreaInsets();
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const [actionOpen, setActionOpen] = useState(false);
  const [value, setValue] = useState('Accounts');
  const [items, setItems] = useState(BANKING_MENU);

  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <TouchableWithoutFeedback onPress={() => setActionOpen(false)}>
      <View
        style={{
          flex: 1,
          marginTop: insets.top,
          backgroundColor: isDarkTheme ? colors.background : 'white',
        }}
      >
        {/* RENDER MAIN HEADER */}
        <MainHeader
          headerTitle="Crypto Crew"
          rightIcon={images.members}
          onPressRightIcon={() => {}}
        />

        {/* RENDER BANKING */}
        {_renderText(loc('BANKING'), {
          ...globalStyle.textStyle('_28', 'text', 'NUNITO_SEMIBOLD'),
          marginTop: scale(16),
          paddingLeft: scale(20),
          fontWeight: '900',
        })}

        {/* RENDER BANKING ACTIONS DROPDOWN PICKER */}
        <CustomDropDownPicker
          open={actionOpen}
          value={value}
          items={items}
          setOpen={setActionOpen}
          setValue={setValue}
          setItems={setItems}
          extraStyle={{ borderWidth: 0 }}
          containerStyle={[styles.dropDownContainerStyle]}
          labelStyle={[globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR')]}
        />

        {/* REDNDER LAYOUT ACCORDING TO ITEM SELECTED IN ABOVE PICKER */}
        {value === 'Accounts' ? (
          <AccountsLayout />
        ) : value === 'Cards' ? (
          <CardLayout />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};
