/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { images, useGlobalStyles } from '@resources';
import { TribeNameForm } from '@components';
import FastImage from 'react-native-fast-image';

export const Step5 = () => {
  const globalStyle = useGlobalStyles();

  return (
    <View style={styles.container}>
      <Text
        style={[
          globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
          styles.title,
        ]}
      >
        {loc('AVAILABLE_COMPANY_NAMES')}
      </Text>
      <FastImage
        source={images.usa_map}
        style={{
          width: '100%',
          aspectRatio: 1.5,
          marginVertical: 20,
        }}
        resizeMode={FastImage.resizeMode.center}
      />

      <TribeNameForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
  },
});
