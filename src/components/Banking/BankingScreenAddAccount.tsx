/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// LOCAL IMPORTs
import { RoundGradientButton, _renderText } from '@components';
import {
  fonts,
  images,
  moderateScale,
  responsiveWidth,
  useGlobalStyles,
} from '@resources';

//THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { fontScale } from 'react-native-utils-scale';

interface DefaultProps {
  title: string;
  buttonName: string;
  image: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

export const BankingScreenAddAccount = ({
  title,
  buttonName,
  image,
  onPress,
  containerStyle,
}: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  return (
    <View
      style={[
        globalStyle.layoutDirection('row', 'flex-start', 'center'),
        { ...containerStyle },
      ]}
    >
      {_renderText(title, {
        ...globalStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
        flex: 1,
      })}

      <RoundGradientButton
        gradientColor={colors.primaryGradiant}
        title={buttonName}
        onPress={onPress}
        icon={images[image]}
        iconSize={30}
        titleStyle={styles.newButtonTitleStyle}
        extraStyle={styles.newButtonExtraStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newButtonExtraStyle: {
    width: responsiveWidth(22),
    height: moderateScale(32),
    alignSelf: 'center',
  },
  newButtonTitleStyle: {
    fontFamily: fonts.NUNITO_REGULAR,
    fontSize: fontScale(12),
    marginLeft: 2,
  },
});
