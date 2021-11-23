/* eslint-disable max-len */
import { fonts, fontsize, responsiveHeight, responsiveWidth } from '@resources';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

// THIRD PARTY IMPORTS
import FacePile from 'react-native-face-pile';

// LOCAL IMPORTS
import { FACES } from '@constants';
import { ToggleDarkThemeSwitch } from './toggleDarkThemeSwitch';

const url =
  'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export const DrawerRightSideContent = (props: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: url }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crypto Crew</Text>
          <FacePile faces={FACES} hideOverflow={true} />
        </View>
      </ImageBackground>
      <ToggleDarkThemeSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: responsiveHeight(100),
    width: '72%',
  },
  imageBackground: {
    height: responsiveHeight(12),
    width: responsiveWidth(58),
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  titleContainer: {
    justifyContent: 'flex-end',
    height: '100%',
    paddingLeft: 10,
    paddingBottom: 18,
    borderWidth: 1,
  },
  title: {
    color: 'white',
    fontFamily: fonts.NUNITO_EXTRABOLD,
    fontWeight: '900',
    fontSize: fontsize._18,
  },
});
