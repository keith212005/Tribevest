/* eslint-disable no-undef */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { FastImg } from '@components';
import { images, useGlobalStyles } from '@resources';
import { navigate } from '@navigator';

export const FaceIdSignIn = () => {
  const globalStyle = useGlobalStyles();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('FaceId');
      }}
    >
      {FastImg(images.face_unlock, 30, { marginRight: 20 })}
      <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR')]}>
        {loc('SIGN_IN_WITH_FACEID')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
});
