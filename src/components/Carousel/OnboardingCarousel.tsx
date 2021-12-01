/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THRID PARTY IMPORTS
import Swiper from 'react-native-swiper';

// LOCAL IMPORTS
import {
  images,
  responsiveHeight,
  responsiveWidth,
  scale,
  useGlobalStyles,
} from '@resources';
import _ from 'lodash';
import { FastImg } from '@components';

export const OnboardingCarousel = () => {
  console.log('rendering onBoarding carousel.....');

  const globalStyles = useGlobalStyles();
  const sliderView = (
    sliderImage: string,
    title: string,
    description: string,
  ) => {
    return (
      <View style={styles.sliderViewContainer}>
        {FastImg(images[sliderImage as keyof typeof images], scale(250))}
        {/* <Image style={{}} source={images[sliderImage as keyof typeof images]} /> */}
        <Text
          style={[
            globalStyles.textStyle('_22', 'white', 'NUNITO_BOLD'),
            styles.title,
          ]}
        >
          {loc(title)}
        </Text>
        {!_.isEmpty(description) ? (
          <Text
            style={[
              globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR'),
              styles.description,
            ]}
          >
            {loc(description)}
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <Swiper
      containerStyle={{
        paddingTop: responsiveHeight(6),
      }}
      paginationStyle={{}}
      loop={false}
      activeDotStyle={styles.activeDotStyle}
    >
      {sliderView('onboarding_welcome', 'ONBOARDING1_TITLE', '')}
      {sliderView(
        'onboarding_create_plan',
        'ONBOARDING2_TITLE',
        'ONBOARDING2_DESCRIPTION',
      )}
      {sliderView(
        'onboarding_invite_friends',
        'ONBOARDING3_TITLE',
        'ONBOARDING3_DESCRIPTION',
      )}
      {sliderView(
        'onboarding_file_llc',
        'ONBOARDING4_TITLE',
        'ONBOARDING4_DESCRIPTION',
      )}
      {sliderView(
        'onboarding_pool_capital',
        'ONBOARDING5_TITLE',
        'ONBOARDING5_DESCRIPTION',
      )}
    </Swiper>
  );
};

export const styles = StyleSheet.create({
  sliderViewContainer: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: responsiveWidth(5),
  },
  activeDotStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
});
