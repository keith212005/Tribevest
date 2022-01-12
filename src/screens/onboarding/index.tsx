/* eslint-disable no-undef */
import React from 'react';
import { ImageBackground, Platform, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { styles } from './style';
import { FastImg, RoundGradientButton, OnboardingCarousel } from '@components';
import { images, responsiveWidth } from '@resources';
import { isOpenFirstTime } from 'actions/isOpenFirstTime';

export const Onboarding = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as unknown as CustomTheme;

  return (
    <ImageBackground
      source={images.splashscreen_bg}
      style={[styles.container, { paddingBottom: insets.bottom }]}
    >
      {FastImg(images.onboarding_logo, 110, { alignSelf: 'center' })}
      <OnboardingCarousel />
      <View
        style={{
          width: responsiveWidth(90),
          alignSelf: 'center',
          marginBottom: Platform.OS === 'ios' ? 0 : 20,
        }}
      >
        <RoundGradientButton
          gradientColor={colors.greenGradient}
          title={loc('GET_STARTED')}
          onPress={() => dispatch(isOpenFirstTime(false))}
        />
      </View>
    </ImageBackground>
  );
};
