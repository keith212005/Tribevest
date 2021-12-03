/* eslint-disable no-undef */
import { FastImg } from '@components';
import { images, useGlobalStyles } from '@resources';
import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export const FaceIdSignIn = () => {
  const globalStyle = useGlobalStyles();
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      {FastImg(images.face_unlock, 30, { marginRight: 20 })}
      <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR')]}>
        {loc('SIGN_IN_WITH_FACEID')}
      </Text>
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
