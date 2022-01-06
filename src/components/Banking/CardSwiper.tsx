/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import Carousel from 'react-native-reanimated-carousel';
import { useTheme } from '@react-navigation/native';
import { useSharedValue } from 'react-native-reanimated';

// LOCAL IMPORTS
import { CARDS_LIST } from '@constants';
import { PaginationItem } from './PaginationItem';
import { responsiveHeight, responsiveWidth } from '@resources';
import { CreditCardView } from 'components/Cards/CreditCardView';

export const CardSwiper = () => {
  const progressValue = useSharedValue<number>(0);
  const r = React.useRef<any>(null);
  const { colors } = useTheme() as CustomTheme;

  return (
    <View>
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
            <CreditCardView
              cardName={cardName}
              cardNumber={cardNumber}
              cvv={cvv}
              expDate={expDate}
            />
          );
        }}
        onProgressChange={(_: any, absoluteProgress: any) => {
          progressValue.value = absoluteProgress;
        }}
      />

      {!!progressValue && (
        <View style={styles.paginationContainer}>
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 40,
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? -26 : 0,
  },
});
