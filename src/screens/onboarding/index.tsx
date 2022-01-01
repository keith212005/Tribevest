/* eslint-disable no-undef */
import React from 'react';
import { ImageBackground, Platform } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTs
import { styles } from './style';
import { FastImg, OfflineNotice, RoundGradientButton } from '@components';
import { images, responsiveHeight, responsiveWidth } from '@resources';
import { useDispatch } from 'react-redux';
import { isOpenFirstTime } from 'actions/isOpenFirstTime';
import { OnboardingCarousel } from 'components/Carousel/OnboardingCarousel';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Onboarding = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme() as unknown as CustomTheme;
  const insets = useSafeAreaInsets();

  return (
    <>
      {/* <OfflineNotice /> */}
      <ImageBackground
        source={images.splashscreen_bg}
        style={[styles.container, { paddingBottom: insets.bottom }]}
      >
        {FastImg(images.onboarding_logo, 110, {
          alignSelf: 'center',
          marginTop: responsiveHeight(Platform.OS === 'ios' ? 2 : 8),
        })}
        <OnboardingCarousel />
        <RoundGradientButton
          gradientColor={colors.greenGradient as any}
          title={loc('GET_STARTED')}
          containerStyle={{
            width: responsiveWidth(80),
            alignSelf: 'center',
            marginBottom: 40,
          }}
          onPress={() => dispatch(isOpenFirstTime(false))}
        />
      </ImageBackground>
    </>
  );
};
