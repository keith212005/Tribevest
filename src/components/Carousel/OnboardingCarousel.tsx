/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

// THRID PARTY IMPORTS
import Carousel from 'react-native-snap-carousel';

// LOCAL IMPORTS
import { responsiveWidth } from '@resources';
import { ONBOARDING } from '@constants';
import { OnboardingCarouselItem } from './OnboardingCarouselItem';
import { OnboardingCarouselPagination } from './OnboardingCarouselPagination';

export const OnboardingCarousel = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={ONBOARDING}
        renderItem={(item) => {
          return <OnboardingCarouselItem item={item.item} />;
        }}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={responsiveWidth(100)}
        itemWidth={responsiveWidth(100)}
        containerCustomStyle={{ borderWidth: 1 }}
        contentContainerCustomStyle={{ alignItems: 'flex-end' }}
        enableMomentum={true}
        decelerationRate={0.9}
      />
      <OnboardingCarouselPagination activeSlide={activeSlide} />
    </>
  );
};

const styles = StyleSheet.create({});
