import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORTS
import { SIGN_UP_STEP2 } from '@constants';

export const Step2 = () => {
  return (
    <View style={styles.container}>
      {SIGN_UP_STEP2.map((item) => {
        return (
          <View key={item.id} style={{ borderWidth: 1, margin: 10 }}>
            <Text>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
