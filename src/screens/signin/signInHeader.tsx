/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveHeight, useGlobalStyles } from '@resources';
import LinearGradient from 'react-native-linear-gradient';

export const SignInHeader = () => {
  const { colors } = useTheme() as unknown as CustomTheme;
  const globalStyles = useGlobalStyles();
  return (
    <LinearGradient colors={colors.primaryGradiant} style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <Text
          style={[globalStyles.textStyle('_22', 'white', 'NUNITO_EXTRABOLD')]}
        >
          {loc('SIGN_INTO_TRIBEVEST')}
        </Text>
        <Text
          style={[globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR')]}
        >
          {loc('MANAGE_YOUR_TRIBES')}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(30),
    justifyContent: 'center',
  },
});
