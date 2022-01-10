/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import {
  images,
  responsiveWidth,
  useGlobalStyles,
  scale,
  responsiveHeight,
} from '@resources';
import { useTheme } from '@react-navigation/native';
import {
  AddNewRecipientForm,
  CustomModal,
  RoundGradientButton,
  _renderText,
} from '@components';
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize';

interface AddARecipientProps {
  onPress: () => void;
}

export const AddARecipient = (props: AddARecipientProps) => {
  const globalStyle = useGlobalStyles();
  const [data, setData] = useState();
  const { colors } = useTheme() as CustomTheme;
  const { ref, open } = useModalize();

  return (
    <View
      style={[
        { flex: 1 },
        globalStyle.layoutDirection('column', 'center', 'center'),
      ]}
    >
      <FastImage
        source={images.no_saved_recipients}
        style={globalStyle.squareLayout(200)}
        resizeMode={FastImage.resizeMode.contain}
      />
      {_renderText(loc('NO_SAVED_RECIPIENTS_YET'), {
        ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
      })}
      {_renderText(loc('ADD_RECIPIENTS_GET_STARTED'), {
        ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
      })}

      <RoundGradientButton
        gradientColor={colors.primaryGradiant}
        title={loc('NEW')}
        onPress={() => {
          open();
        }}
        icon={images.add}
        titleStyle={{}}
        extraStyle={{ marginTop: scale(24), width: responsiveWidth(90) }}
      />

      <CustomModal
        ref={ref}
        modalExtraStyle={{ marginTop: responsiveHeight(40) }}
      >
        <AddNewRecipientForm />
      </CustomModal>
    </View>
  );
};
