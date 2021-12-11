/* eslint-disable no-undef */
import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveHeight } from '@resources';
import { color } from 'react-native-elements/dist/helpers';

interface DefaultProps {
  children: any;
  containerStyle?: ViewStyle;
}

export const FormContainer = ({ children, containerStyle }: DefaultProps) => {
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <View
      style={[
        styles.body,
        {
          backgroundColor: isDarkTheme ? colors.background : colors.white,
          ...containerStyle,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: color.white,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    marginTop: responsiveHeight(-4),
    paddingTop: responsiveHeight(2),
  },
});
