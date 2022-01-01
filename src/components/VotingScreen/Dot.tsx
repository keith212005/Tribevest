import React from 'react';
import { View, StyleSheet } from 'react-native';

import { color } from '@resources';

export const Dot = () => {
  return <View style={styles.dotStyle} />;
};

const styles = StyleSheet.create({
  dotStyle: {
    height: 5,
    width: 5,
    borderRadius: 5 / 2,
    marginHorizontal: 5,
    backgroundColor: color.lightText,
  },
});
