/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { CustomDropDownPicker, MainHeader, _renderText } from '@components';
import { images, useGlobalStyles } from '@resources';
import { BANKING_MENU } from '@constants';
import { styles } from './style';
import { TribevestAccounts } from './TribevestAccounts';
import { ExternalAccounts } from './ExternalAccounts';

export const Banking = () => {
  const insets = useSafeAreaInsets();
  const globalStyle = useGlobalStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Accounts');
  const [items, setItems] = useState(BANKING_MENU);

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <MainHeader
        headerTitle="Crypto Crew"
        rightIcon={images.members}
        onPressRightIcon={() => {}}
      />

      {_renderText(loc('BANKING'), {
        ...globalStyle.textStyle('_28', 'text', 'NUNITO_SEMIBOLD'),
        marginTop: 16,
        paddingLeft: 20,
        fontWeight: '900',
      })}

      <CustomDropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={styles.dropDownContainerStyle}
        labelStyle={[globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR')]}
      />

      <TribevestAccounts />
      <ExternalAccounts />
    </View>
  );
};
