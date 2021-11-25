import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AlertsProps {}

export const Alerts = (props: AlertsProps) => {
  return (
    <View style={styles.container}>
      <Text>Alerts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
