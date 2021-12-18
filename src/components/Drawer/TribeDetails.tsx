import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { FastImg } from '@components';
import { fonts, images } from '@resources';

export const TribeDetails = (props: any) => {
  const isOpen = useSelector((state: any) => state.isDrawerLeftSideCollapsed);
  return (
    <View style={styles.container}>
      {isOpen ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.tribeNameStyle}>{props.item.name}</Text>
          <TouchableOpacity
            onPress={() => console.log('3 dot button pressed....')}
          >
            {FastImg(images.more_square, 20)}
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
    fontSize: 16,
    color: 'black',
    fontFamily: fonts.NUNITO_EXTRABOLD,
  },
});
