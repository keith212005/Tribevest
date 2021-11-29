/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';
import { ImageBackground, Image, Text, View } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// LOCAL IMPORTs
import { styles } from './style';
import { SafeAreaWrapper } from '@components';
import { ONBOARDING } from '@constants';
import { color, images, responsiveWidth, useGlobalStyles } from '@resources';
import RoundGradientButton from 'components/Buttons/RoundGradientButton';

export const Onboarding = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const globalStyles = useGlobalStyles();

  const _renderItem = ({ item }: any) => {
    console.log('insets bottom>>', item.imageUrl);
    return (
      <>
        <Image
          source={images[item.imageUrl]}
          style={{ alignSelf: 'center', marginVertical: 50 }}
        />
        <Text
          style={[
            globalStyles.textStyle('_22', 'white', 'NUNITO_BOLD'),
            { textAlign: 'center', padding: 20 },
          ]}
        >
          {loc(item.title)}
        </Text>
        {!_.isEmpty(item.description) ? (
          <Text
            style={[
              globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR'),
              {
                textAlign: 'center',
                marginHorizontal: responsiveWidth(6),
              },
            ]}
          >
            {loc(item.description)}
          </Text>
        ) : null}
      </>
    );
  };

  return (
    <ImageBackground source={images.splashscreen_bg} style={[styles.container]}>
      <SafeAreaWrapper
        statusBarProps={{ hidden: true, translucent: true }}
        containerStyle={{ bottom: 30 }}
      >
        <Carousel
          ref={carouselRef}
          data={ONBOARDING}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
          sliderWidth={responsiveWidth(100)}
          itemWidth={responsiveWidth(100)}
          containerCustomStyle={{ borderWidth: 1 }}
          contentContainerCustomStyle={{ alignItems: 'flex-end' }}
          enableMomentum={true}
          decelerationRate={0.9}
        />
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
        <RoundGradientButton
          title={'Get started'}
          containerStyle={{
            width: responsiveWidth(90),
            alignSelf: 'center',
          }}
        />
      </SafeAreaWrapper>
    </ImageBackground>
  );
};
