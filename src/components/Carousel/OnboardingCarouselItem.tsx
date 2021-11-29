/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React, { memo } from 'react';
import { Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

// THIRD PARTY IMPORTS
import _ from 'lodash';

// LOCAL IMPORTS
import { images, useGlobalStyles, responsiveWidth } from '@resources';

const OnboardingCarouselItems = (item: any) => {
  const globalStyles = useGlobalStyles();
  // console.log('pure components', item);
  console.log('rendering pure componetn');

  return (
    <>
      <Image
        source={images[item.item.imageUrl] as unknown as ImageSourcePropType}
        style={{ alignSelf: 'center', marginVertical: 50 }}
      />
      <Text
        style={[
          globalStyles.textStyle('_22', 'white', 'NUNITO_BOLD'),
          { textAlign: 'center', padding: 20 },
        ]}
      >
        {loc(item.item.title)}
      </Text>
      {!_.isEmpty(item.item.description) ? (
        <Text
          style={[
            globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR'),
            {
              textAlign: 'center',
              marginHorizontal: responsiveWidth(6),
            },
          ]}
        >
          {loc(item.item.description)}
        </Text>
      ) : null}
    </>
  );
};

export const OnboardingCarouselItem = memo(OnboardingCarouselItems);

const styles = StyleSheet.create({});
