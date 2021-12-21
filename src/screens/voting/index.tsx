import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { TribeHeader } from '@components';

export const Voting = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <TribeHeader />
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 20 }}>
          <Text>Voting</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
