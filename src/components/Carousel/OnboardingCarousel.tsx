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
  useGlobalStyles,
} from '@resources';
import { FastImg } from '@components';
import _ from 'lodash';

export const OnboardingCarousel = () => {
  const globalStyles = useGlobalStyles();
  const sliderView = (
    sliderImage: string,
    title: string,
    description: string,
  ) => {
    return (
      <View style={styles.sliderViewContainer}>
        {FastImg(
          images[sliderImage as keyof typeof images],
          responsiveHeight(36),
        )}
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
      paginationStyle={{ marginVertical: 16 }}
      loop={false}
      index={0}
      activeDotStyle={styles.activeDotStyle}
      loadMinimal={true}
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
    paddingVertical: responsiveWidth(8),
    paddingHorizontal: responsiveWidth(5),
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
