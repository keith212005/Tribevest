/* eslint-disable no-undef */
import { FastImg } from '@components';
import { images } from '@resources';
import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export const FaceIdSignIn = () => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      {FastImg(images.face_unlock, 30, { marginRight: 20 })}
      <Text>{loc('SIGN_IN_WITH_FACEID')}</Text>
    </Pressable>
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
