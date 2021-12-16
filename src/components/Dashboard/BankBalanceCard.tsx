/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Pressable,
  Platform,
  UIManager,
} from 'react-native';

// THIRD PARTY IMPORTS
import { Card } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { FastImg, Rotate } from '@components';
import { images, scale, useGlobalStyles } from '@resources';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const BankBalanceCard = () => {
  const [open, setopen] = useState(false);

  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setopen(!open);
  };

  const _renderCardHeader = () => {
    return (
      <Pressable onPress={onPress}>
        <View style={[styles.row]}>
          <Text
            style={[globalStyle.textStyle('_24', 'blue', 'NUNITO_EXTRABOLD')]}
          >
            $45,198.00
          </Text>
          <Rotate onPress={onPress}>
            {FastImg(images.arrow_drop_down_circle, 25)}
          </Rotate>
        </View>
        <View style={[styles.row, { marginBottom: 20 }]}>
          {_renderText(loc('BANK_ACCOUNT_BALANCE'))}
          {_renderText('Oct 2020', { color: colors.lightText })}
        </View>
      </Pressable>
    );
  };

  const _renderText = (name: string, extraStyle?: any) => {
    return (
      <Text
        style={[
          globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          { ...extraStyle },
        ]}
      >
        {name}
      </Text>
    );
  };

  const _renderCollapsibleCardBody = () => {
    return (
      <>
        <Card.Divider />
        <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}>
          {loc('RECENT_ACTIVITY')}
        </Text>

        <View style={[styles.row, { justifyContent: 'space-evenly' }]}>
          {_renderText(loc('TYPE'), { flex: 5 })}
          {_renderText(loc('AMOUNT'), { flex: 2 })}
          {_renderText(loc('DATE'), { flex: 2, textAlign: 'right' })}
        </View>

        <View style={[styles.row]}>
          {_renderText('Contribution', { flex: 5 })}
          {_renderText('$5000', { flex: 2, color: colors.lightText })}
          {_renderText('10/10/21', { color: colors.lightText })}
        </View>
      </>
    );
  };

  return (
    <Card containerStyle={[styles.container, { backgroundColor: colors.card }]}>
      {_renderCardHeader()}
      {open && _renderCollapsibleCardBody()}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(5),
  },
});
