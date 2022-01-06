/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THRID PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import { LinearGradientWrapper } from '@components';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { fonts, images, useGlobalStyles } from '@resources';

interface CreditCardViewProps {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expDate: string;
}

export const CreditCardView = (props: CreditCardViewProps) => {
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
    <LinearGradientWrapper
      colors={colors.cardBackgroundGradient}
      containerStyle={styles.containerStyle}
      extraProps={{
        useAngle: true,
        angle: 45,
        angleCenter: { x: 0.4, y: 0.6 },
      }}
    >
      <CircleOne />
      <CircleTwo />

      <Text style={styles.cardName}>{props.cardName}</Text>
      <Text style={styles.cardNumber}>{props.cardNumber}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={[
            { flex: 5 },
            globalStyle.layoutDirection('column', 'center', 'flex-start'),
          ]}
        >
          {_renderColumn('CVV', props.cvv)}
        </View>
        <View
          style={[
            { flex: 6 },
            globalStyle.layoutDirection('column', 'center', 'flex-start'),
          ]}
        >
          {_renderColumn('Exp. data', props.expDate)}
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
};

const CircleOne = () => {
  return (
    <View
      style={{
        borderWidth: 0.2,
        padding: 20,
        borderRadius: 600 / 2,
        height: 600,
        width: 600,
        borderColor: '#FFFFFF',
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 36,
      }}
    />
  );
};

const CircleTwo = () => {
  return (
    <View
      style={{
        borderWidth: 0.2,
        padding: 20,
        borderRadius: 600 / 2,
        height: 600,
        width: 600,
        borderColor: '#FFFFFF',
        position: 'absolute',
        marginLeft: 60,
        marginTop: -300,
      }}
    />
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
