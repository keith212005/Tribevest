/* eslint-disable no-undef */
import React, { forwardRef, useImperativeHandle, useRef, memo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

// THIRD PARTY IMPORTS
import { Divider } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

// LOCAL IMPORTS
import { responsiveHeight, responsiveWidth } from '@resources';

interface DefaultProps extends ModalizeProps {
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
          modalStyle={{
            backgroundColor: colors.background,
            marginTop: responsiveHeight(Platform.OS === 'ios' ? 14 : 13),
          }}
          HeaderComponent={<HeaderComponent />}
          {...props}
        >
          {props.children}
        </Modalize>
      </Portal>
    </>
  );
});

const HeaderComponent = memo(() => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <View
      style={[
        { backgroundColor: colors.background },
        styles.headerComponentContainer,
      ]}
    >
      <Divider style={styles.divider} />
    </View>
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
  headerComponentContainer: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
