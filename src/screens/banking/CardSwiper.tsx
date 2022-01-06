/* eslint-disable no-undef */
import { LinearGradientWrapper } from '@components';
import { CARDS_LIST } from '@constants';
import { useTheme } from '@react-navigation/native';
import {
  color,
  fonts,
  images,
  responsiveHeight,
  responsiveWidth,
  useGlobalStyles,
} from '@resources';
import React from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { PaginationItem } from './PaginationItem';

export const CardSwiper = () => {
  const progressValue = useSharedValue<number>(0);
  const r = React.useRef<any>(null);
  const { colors } = useTheme() as CustomTheme;

  const globalStyle = useGlobalStyles();

  const _renderColumn = (topText: string, bottomText: string) => {
    return (
      <>
        <Text style={[globalStyle.textStyle('_12', 'white', 'NUNITO_LIGHT')]}>
          {topText}
        </Text>
        <Text
          style={[globalStyle.textStyle('_14', 'white', 'NUNITO_SEMIBOLD')]}
        >
          {bottomText}
        </Text>
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel<any>
        ref={r}
        pagingEnabled={true}
        loop={false}
        mode={'parallax'}
        style={{ backgroundColor: colors.background }}
        width={responsiveWidth(100)}
        height={responsiveHeight(29)}
        data={CARDS_LIST}
        renderItem={({ cardName, cardNumber, cvv, expDate }) => {
          return (
            <LinearGradientWrapper
              colors={color.cardBackgroundGradient}
              containerStyle={styles.containerStyle}
              extraProps={{
                useAngle: true,
                angle: 45,
                angleCenter: { x: 0.4, y: 0.6 },
              }}
            >
              <Text style={styles.cardName}>{cardName}</Text>
              <Text style={styles.cardNumber}>{cardNumber}</Text>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={[
                    { flex: 5 },
                    globalStyle.layoutDirection(
                      'column',
                      'center',
                      'flex-start',
                    ),
                  ]}
                >
                  {_renderColumn('CVV', cvv)}
                </View>
                <View
                  style={[
                    { flex: 6 },
                    globalStyle.layoutDirection(
                      'column',
                      'center',
                      'flex-start',
                    ),
                  ]}
                >
                  {_renderColumn('Exp. data', expDate)}
                </View>
                <View style={{}}>
                  <FastImage
                    source={images.master_card}
                    style={[globalStyle.squareLayout(60)]}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
              </View>
            </LinearGradientWrapper>
          );
        }}
        onSnapToItem={(index) => {
          console.log('current index:', index);
        }}
        onProgressChange={(_: any, absoluteProgress: any) => {
          progressValue.value = absoluteProgress;
        }}
      />

      {!!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            minWidth: 40,
            alignSelf: 'center',
            marginTop: Platform.OS === 'ios' ? -26 : 0,
          }}
        >
          {CARDS_LIST.map((_, index) => {
            return (
              <PaginationItem
                animValue={progressValue}
                index={index}
                key={index}
                length={CARDS_LIST.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 10,
    padding: 20,
  },
  cardName: {
    fontSize: 14,
    fontFamily: fonts.NUNITO_SEMIBOLD,
    color: 'white',
  },
  cardNumber: {
    fontSize: 16,
    fontFamily: fonts.NUNITO_REGULAR,
    color: 'white',
    marginTop: 16,
    marginBottom: 24,
  },
});
