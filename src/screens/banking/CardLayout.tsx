import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

// LOCAL IMPORTS
import { CARDS_LIST } from '@constants';
import { CustomDropDownPicker } from '@components';
import { responsiveWidth, useGlobalStyles } from '@resources';

export const CardLayout = () => {
  const globalStyle = useGlobalStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Tribevest: **** **** 6621');
  const [items, setItems] = useState(CARDS_LIST);
  return (
    <TouchableWithoutFeedback
      style={{ backgroundColor: 'red', width: '100%', borderWidth: 2 }}
      onPress={() => setOpen(false)}
    >
      <CustomDropDownPicker
        zIndex={2000}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={styles.dropdownContainerStyle}
        labelStyle={[globalStyle.textStyle('_14', 'black', 'NUNITO_REGULAR')]}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  dropdownContainerStyle: {
    width: responsiveWidth(90),
    marginLeft: 20,
    marginTop: 8,
  },
});
