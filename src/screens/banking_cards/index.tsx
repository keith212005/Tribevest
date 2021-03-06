/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { Divider } from 'react-native-elements';
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';

// LOCAL IMPORTS
import { images, useGlobalStyles, scale, verticalScale } from '@resources';
import { CardSwiper, CustomModal, _renderText } from '@components';
import { CardsMoreDetailsPopup } from './CardMoreDetailsPopup';

interface DefaultProps {
  containerStyle?: ViewStyle;
}

export const BankingCards = (props: DefaultProps) => {
  const { ref, open } = useModalize();
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  const _renderAddress = () => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('row', 'flex-start', 'flex-start'),
          { marginTop: scale(18) },
        ]}
      >
        <FastImage
          style={[globalStyle.squareLayout(20), {}]}
          source={images.location}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={colors.text}
        />
        <View>
          {_renderText(loc('ADDRESS'), {
            ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
            marginLeft: scale(5),
          })}
          {_renderText('1816 Vilage Oak Coury, Austin TX, USA, 78704', {
            ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_SEMIBOLD'),
            marginLeft: scale(5),
            marginTop: scale(4),
            width: scale(150),
          })}
        </View>
      </View>
    );
  };

  const _renderAppleWalletButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.appleWalletButtonContainer,
          globalStyle.layoutDirection('row', 'flex-start', 'center'),
        ]}
      >
        <FastImage
          style={[globalStyle.squareLayout(30)]}
          source={images.apple_wallet}
          resizeMode={FastImage.resizeMode.contain}
        />
        {_renderText(loc('ADD_TO_APPLE_WALLET'), {
          ...globalStyle.textStyle('_16', 'white', 'NUNITO_REGULAR'),
          marginLeft: scale(16),
        })}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={[{ ...props.containerStyle }]}>
      <CardSwiper />

      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-between', 'flex-start'),
            { marginTop: 26 },
          ]}
        >
          {_renderText(loc('MARKETING'), {
            ...globalStyle.textStyle('_12', 'text', 'NUNITO_BLACK'),
          })}

          <TouchableOpacity onPress={() => open()}>
            <FastImage
              style={[globalStyle.squareLayout(20), {}]}
              source={images.pending}
              resizeMode={FastImage.resizeMode.contain}
              tintColor={colors.text}
            />
          </TouchableOpacity>
        </View>

        {/* Render Divider */}
        <Divider style={{ paddingVertical: 19 }} />

        {/* Render Address */}
        {_renderAddress()}

        {/* Render Add to Apple wallet button */}
        {_renderAppleWalletButton()}
      </View>

      <CustomModal ref={ref}>
        <CardsMoreDetailsPopup />
      </CustomModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appleWalletButtonContainer: {
    marginTop: scale(20),
    backgroundColor: 'black',
    borderRadius: scale(10),
    alignSelf: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(68),
    marginBottom: scale(20),
  },
});
