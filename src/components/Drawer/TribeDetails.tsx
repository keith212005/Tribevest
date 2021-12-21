/* eslint-disable no-undef */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { images, useGlobalStyles } from '@resources';

export const TribeDetails = (props: any) => {
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  const { colors } = useTheme() as CustomTheme;
  const globalStyle = useGlobalStyles();

  return (
    <View style={styles.container}>
      {isOpen ? (
        <View style={styles.detailsContainer}>
          <Text
            style={[
              styles.tribeNameStyle,
              globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
            ]}
          >
            {props.item.name}
          </Text>
          <TouchableOpacity
            onPress={() => console.log('3 dot button pressed....')}
          >
            <FastImage
              source={images.more_square}
              style={[globalStyle.squareLayout(22)]}
              resizeMode={FastImage.resizeMode.contain}
              tintColor={colors.text}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tribeNameStyle: {
    flex: 8,
    marginHorizontal: 10,
  },
});
