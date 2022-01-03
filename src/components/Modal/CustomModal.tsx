import { responsiveWidth } from '@resources';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

interface DefaultProps {
  children?: any;
}

export const CustomModal = forwardRef((props: DefaultProps, ref: any) => {
  const modalizeRef = useRef<Modalize>(null);

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
          HeaderComponent={<Divider style={styles.divider} />}
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
