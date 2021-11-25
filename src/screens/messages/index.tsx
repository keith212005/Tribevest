import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MessagesProps {}

export const Messages = (props: MessagesProps) => {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
