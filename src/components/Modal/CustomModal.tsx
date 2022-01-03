/* eslint-disable no-undef */
import { useTheme } from '@react-navigation/native';
import { responsiveWidth } from '@resources';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

interface DefaultProps {
  children?: any;
}

export const CustomModal = forwardRef((props: DefaultProps, ref: any) => {
  const modalizeRef = useRef<Modalize>(null);
  const { colors } = useTheme() as CustomTheme;

  useImperativeHandle(ref, () => ({
    open() {
      modalizeRef.current?.open();
    },
    close() {
      modalizeRef.current?.close();
    },
  }));

  return (
    <>
      <Portal>
        <Modalize
          ref={modalizeRef}
          withHandle={false}
          rootStyle={{}}
          modalStyle={{ backgroundColor: colors.card }}
          HeaderComponent={
            <View
              style={{
                backgroundColor: colors.card,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
              }}
            >
              <Divider style={styles.divider} />
            </View>
          }
          {...props}
        >
          {props.children}
        </Modalize>
      </Portal>
    </>
  );
});

const styles = StyleSheet.create({
  divider: {
    padding: 3,
    backgroundColor: '#DADCDE',
    borderRadius: 60,
    alignSelf: 'center',
    width: responsiveWidth(20),
    margin: 10,
  },
});
