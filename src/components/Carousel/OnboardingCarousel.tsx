/* eslint-disable no-undef */
import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

// THIRD PARTY IMPORTS
import { isEmpty } from 'lodash';

// LOCAL IMPORTS
import { ONBOARDING_SCREENS } from '@constants';
import { FastImg, _renderText } from '@components';
import { images, scale, useGlobalStyles } from '@resources';

const { width } = Dimensions.get('window');

export const OnboardingCarousel = () => {
  const globalStyle = useGlobalStyles();
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 20],
  });
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={0}
      >
        {ONBOARDING_SCREENS.map((item) => (
          <View
            key={item.id}
            style={[
              {
                width: width,
                ...globalStyle.layoutDirection('column', 'center', 'center'),
              },
            ]}
          >
            {FastImg(images[item.image], scale(250), {})}
            {_renderText(loc(item.title), {
              ...globalStyle.textStyle('_22', 'white', 'NUNITO_BOLD'),
              textAlign: 'center',
              paddingVertical: 30,
              paddingHorizontal: 10,
            })}

            {_renderText(
              isEmpty(item.description) ? '' : loc(item.description),
              {
                ...globalStyle.textStyle('_14', 'white', 'NUNITO_REGULAR'),
                textAlign: 'center',
                paddingHorizontal: 10,
              },
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorConatiner} pointerEvents="none">
        {ONBOARDING_SCREENS.map((item) => (
          <Indicator key={item.id} />
        ))}
        <Animated.View
          style={[
            styles.activeIndicator,
            { position: 'absolute', transform: [{ translateX }] },
          ]}
        />
      </View>
    </View>
  );
};

const Indicator = () => {
  return <View style={styles.indicator} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 16,
    marginLeft: 2,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
});
