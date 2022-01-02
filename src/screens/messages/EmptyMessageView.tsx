/* eslint-disable no-undef */
import React from 'react';
import { Text, View } from 'react-native';

// THIRD PARTY IMORTS
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { RoundGradientButton } from '@components';
import { images, responsiveWidth, useGlobalStyles } from '@resources';

export const EmptyMessageView = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  return (
    <View
      style={[
        { flex: 1 },
        globalStyle.layoutDirection('column', 'center', 'center'),
      ]}
    >
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={images.no_message}
        style={[globalStyle.squareLayout(responsiveWidth(50))]}
      />
      <Text
        style={[
          globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
          { paddingHorizontal: 44, textAlign: 'center' },
        ]}
      >
        Sed eleifend ligula massa, sed pellentesque justo pharetra vitae
      </Text>
      <RoundGradientButton
        gradientColor={colors.primaryGradiant}
        title={loc('START_CONVERSATION')}
        onPress={() => {}}
        extraStyle={{ width: responsiveWidth(90), marginTop: 24 }}
        titleStyle={{ fontSize: 16 }}
      />
    </View>
  );
};
