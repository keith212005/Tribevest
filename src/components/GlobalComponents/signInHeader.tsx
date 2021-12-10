/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { responsiveHeight, useGlobalStyles } from '@resources';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackButton } from '@components';

export interface SignInHeaderProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export const SignInHeader: React.FC<SignInHeaderProps> = (
  props: SignInHeaderProps,
) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as unknown as CustomTheme;
  const globalStyles = useGlobalStyles();
  return (
    <LinearGradient
      useAngle={true}
      angle={90}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={colors.primaryGradiant}
      style={[
        styles.container,
        { paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 20 },
      ]}
    >
      <View style={{ height: responsiveHeight(6) }}>
        {props.showBackButton && <BackButton onPress={props.onBackPress} />}
      </View>

      <View>
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
    height: responsiveHeight(26),
    paddingHorizontal: 20,
  },
});
