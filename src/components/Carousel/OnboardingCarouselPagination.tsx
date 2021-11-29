/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useEffect } from 'react';
import { StyleSheet } from 'react-native';

// THRID PARTY IMPORTS
import { Pagination } from 'react-native-snap-carousel';

// LOCAL IMPORTS
import { ONBOARDING } from '@constants';
import { color } from '@resources';
import { act } from 'react-test-renderer';

export const OnboardingCarouselPaginations = (activeSlide: any) => {
  console.log('pagination render', activeSlide);

  return (
    <Pagination
      dotsLength={ONBOARDING.length}
      activeDotIndex={activeSlide}
      containerStyle={{ backgroundColor: color.transparent }}
      dotStyle={{
        width: 19,
        borderRadius: 60,
        backgroundColor: color.white,
      }}
      inactiveDotStyle={{
        width: 10,
        height: 10,
        borderRadius: 60,
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export const OnboardingCarouselPagination = memo(OnboardingCarouselPaginations);

const styles = StyleSheet.create({});
