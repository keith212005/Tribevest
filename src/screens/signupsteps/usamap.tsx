import React from 'react';
import { View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { FastImg } from '@components';
import { images } from '@resources';

export const UsaMap = () => {
  return (
    <View style={styles.container}>
      {FastImg(images.usa_map, 300, { alignSelf: 'center' })}
      {FastImg(images.friendsforever, 130, styles.friends)}
      {FastImg(images.nicedaytribe, 100, styles.niceday)}
      {FastImg(images.wealthquest, 100, styles.wealthQuest)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  niceday: {
    position: 'absolute',
    marginLeft: 30,
    marginTop: 60,
  },
  friends: {
    position: 'absolute',
    marginLeft: 180,
    marginTop: 50,
  },
  wealthQuest: {
    position: 'absolute',
    marginLeft: 100,
    marginTop: 150,
  },
});
