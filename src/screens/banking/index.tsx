/* eslint-disable no-undef */
import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { styles } from './style';
import { CustomDropDownPicker, MainHeader, _renderText } from '@components';
import { images, scale, useGlobalStyles } from '@resources';
import { BANKING_MENU, CARDS_LIST } from '@constants';
import { AccountsLayout } from './AccountsLayout';
import { useTheme } from '@react-navigation/native';
import { CardSwiper } from './CardSwiper';

export const Banking = () => {
  const insets = useSafeAreaInsets();
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  const [actionOpen, setActionOpen] = useState(false);
  const [value, setValue] = useState('Accounts');
  const [items, setItems] = useState(BANKING_MENU);

  const [cardListOpen, setCardListOpen] = useState(false);
  const [cardValue, setCardValue] = useState('Accounts');
  const [cardItems, setCardItems] = useState(CARDS_LIST);

  const onActionOpen = useCallback(() => setCardListOpen(false), []);
  const onCardListOpen = useCallback(() => setActionOpen(false), []);

  return (
    <View style={{}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setActionOpen(false);
          setCardListOpen(false);
        }}
      >
        <View>
          {/* RENDER MAIN HEADER */}
          <MainHeader
            headerTitle="Crypto Crew"
            rightIcon={images.members}
            onPressRightIcon={() => {}}
            containerStyle={{ marginTop: insets.top }}
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
            onOpen={onActionOpen}
            value={value}
            items={items}
            setOpen={setActionOpen}
            setValue={setValue}
            setItems={setItems}
            extraStyle={{
              borderWidth: 0,
              backgroundColor: colors.borderGray,
            }}
            containerStyle={[styles.dropDownContainerStyle]}
            labelStyle={[
              globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR'),
            ]}
          />

          {value === 'Cards' ? (
            <CustomDropDownPicker
              zIndex={2000}
              open={cardListOpen}
              onOpen={onCardListOpen}
              value={cardValue}
              items={cardItems}
              setOpen={setCardListOpen}
              setValue={setCardValue}
              setItems={setCardItems}
              extraStyle={{}}
              containerStyle={[styles.dropDownContainerStyle]}
              labelStyle={[
                globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR'),
              ]}
            />
          ) : null}

          {/* REDNDER LAYOUT ACCORDING TO ITEM SELECTED IN ABOVE PICKER */}
          {value === 'Accounts' ? <AccountsLayout /> : null}
        </View>
      </TouchableWithoutFeedback>
      {value === 'Cards' ? (
        <View style={{ flex: 1, zIndex: -1, marginTop: -30 }}>
          <CardSwiper />
        </View>
      ) : null}
    </View>
  );
};
