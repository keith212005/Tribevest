/* eslint-disable no-undef */
import React from 'react';
import { ImageBackground, Platform } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTs
import { styles } from './style';
import { FastImg, SafeAreaWrapper } from '@components';
import { images, responsiveHeight, responsiveWidth } from '@resources';
import RoundGradientButton from 'components/Buttons/RoundGradientButton';
import { useDispatch } from 'react-redux';
import { isOpenFirstTime } from 'actions/isOpenFirstTime';
import { OnboardingCarousel } from 'components/Carousel/OnboardingCarousel';
import { colors } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

export const Onboarding = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme() as unknown as CustomTheme;

  return (
    <ImageBackground source={images.splashscreen_bg} style={[styles.container]}>
      <SafeAreaWrapper
        statusBarProps={{ hidden: true }}
        containerStyle={{ bottom: 30 }}
      >
        {FastImg(images.onboarding_logo, 110, {
          alignSelf: 'center',
          marginTop: responsiveHeight(Platform.OS === 'ios' ? 2 : 8),
        })}
        <OnboardingCarousel />
        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('GET_STARTED')}
          containerStyle={{
            width: responsiveWidth(80),
            alignSelf: 'center',
          }}
          onPress={() => dispatch(isOpenFirstTime(false))}
        />
      </SafeAreaWrapper>
    </ImageBackground>
  );
};
