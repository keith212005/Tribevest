/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveHeight, scale, useGlobalStyles } from '@resources';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { navigationRef } from '@navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SignInHeader = (props: any) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as unknown as CustomTheme;
  const globalStyles = useGlobalStyles();
  return (
    <LinearGradient
      colors={colors.primaryGradiant}
      style={[
        styles.container,
        {
          justifyContent: props.showBackButton ? 'flex-start' : 'center',
          paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 20,
          paddingHorizontal: 20,
        },
      ]}
    >
      <View style={{ justifyContent: 'center' }}>
        {props.showBackButton && (
          <Icon
            tvParallaxProperties={false}
            size={25}
            name="chevron-left"
            type="feather"
            color="white"
            onPress={() => navigationRef.goBack()}
            containerStyle={styles.backIconStyle}
          />
        )}
        <Text
          style={[globalStyles.textStyle('_22', 'white', 'NUNITO_EXTRABOLD')]}
        >
          {props.title}
        </Text>
        <Text
          style={[globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR')]}
        >
          {props.description}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(30),
  },
  backIconStyle: {
    height: scale(35),
    width: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46AFFF',
    alignSelf: 'flex-start',
    borderRadius: 60,
    marginBottom: responsiveHeight(2),
  },
});
