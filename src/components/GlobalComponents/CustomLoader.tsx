import * as React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const CustomLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
