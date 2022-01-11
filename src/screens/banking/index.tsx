/* eslint-disable no-undef */
import React, { useCallback, useState, useEffect } from 'react';
import { LogBox, TouchableWithoutFeedback, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import {
  BankingStatements,
  BankingAccounts,
  BankingCards,
  BankingTransactions,
  BankingPayments,
} from '@screens';
import { BANKING_MENU, CARDS_LIST } from '@constants';
import { images, useGlobalStyles } from '@resources';
import { CustomDropDownPicker, MainHeader, _renderText } from '@components';

export const Banking = () => {
  const insets = useSafeAreaInsets();
  const globalStyle = useGlobalStyles();

  const [actionOpen, setActionOpen] = useState(false);
  const [value, setValue] = useState('Accounts');
  const [items, setItems] = useState(BANKING_MENU);

  const [cardListOpen, setCardListOpen] = useState(false);
  const [cardValue, setCardValue] = useState('Accounts');
  const [cardItems, setCardItems] = useState(CARDS_LIST);

  const onActionOpen = useCallback(() => setCardListOpen(false), []);
  const onCardListOpen = useCallback(() => setActionOpen(false), []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* RENDER MAIN HEADER */}
      <MainHeader
        headerTitle="Crypto Crew"
        rightIcon={images.members}
        onPressRightIcon={() => {}}
        containerStyle={{ marginTop: insets.top }}
      />

      <TouchableWithoutFeedback
        onPress={() => {
          setActionOpen(false);
          setCardListOpen(false);
        }}
      >
        <>
          {/* RENDER BANKING */}
          {_renderText(loc('BANKING'), {
            ...globalStyle.textStyle('_28', 'text', 'NUNITO_SEMIBOLD'),
            marginTop: 16,
            paddingLeft: 20,
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
            extraStyle={{}}
            mainContainerStyle={{
              marginHorizontal: 20,
              zIndex: 2000,
              minHeight: actionOpen ? 250 : 0,
              elevation: 10,
            }}
            containerStyle={{}}
            labelStyle={[
              globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR'),
            ]}
          />

          {/* REDNDER LAYOUT ACCORDING TO ITEM SELECTED IN ABOVE PICKER */}

          {/* Render Accounts Layout */}
          {value === 'Accounts' ? <BankingAccounts /> : null}

          {/* Render Banking Cards Layout */}
          {value === 'Cards' ? (
            <>
              <CustomDropDownPicker
                open={cardListOpen}
                value={cardValue}
                items={cardItems}
                setOpen={setCardListOpen}
                setValue={setCardValue}
                setItems={setCardItems}
                onOpen={onCardListOpen}
                extraStyle={{}}
                mainContainerStyle={{
                  marginHorizontal: 20,
                  zIndex: 1000,
                  minHeight: cardListOpen ? 200 : 0,
                }}
                labelStyle={[
                  globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR'),
                ]}
              />
              <BankingCards containerStyle={{ zIndex: -1 }} />
            </>
          ) : null}

          {/* Render Transactions Layout */}
          {value === 'Transactions' ? (
            <>
              <CustomDropDownPicker
                open={cardListOpen}
                value={cardValue}
                items={cardItems}
                setOpen={setCardListOpen}
                setValue={setCardValue}
                setItems={setCardItems}
                onOpen={onCardListOpen}
                extraStyle={{}}
                mainContainerStyle={{
                  marginHorizontal: 20,
                  zIndex: 1000,
                  minHeight: cardListOpen ? 250 : 0,
                }}
                labelStyle={[
                  globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR'),
                ]}
              />
              <BankingTransactions />
            </>
          ) : null}

          {/* Render Statements Layout */}
          {value === 'Statements' ? <BankingStatements /> : null}

          {/* Render Payments Layout */}
          {value === 'Payments' ? <BankingPayments /> : null}
        </>
      </TouchableWithoutFeedback>
    </View>
  );
};
