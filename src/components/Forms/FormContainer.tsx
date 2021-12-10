/* eslint-disable no-undef */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveHeight } from '@resources';

export const FormContainer = ({ children }: any) => {
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <View
      style={[
        styles.body,
        { backgroundColor: isDarkTheme ? colors.background : 'white' },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    marginTop: responsiveHeight(-4),
    justifyContent: 'space-between',
    paddingTop: responsiveHeight(2),
    // borderWidth: 3,
    // borderColor: 'red',
  },
});
