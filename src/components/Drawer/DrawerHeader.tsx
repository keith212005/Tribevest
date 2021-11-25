/* eslint-disable max-len */
import { responsiveHeight, useGlobalStyles } from '@resources';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

// THIRD PARTY IMPORTS
import FacePile from 'react-native-face-pile';

// LOCAL IMPORTS
import { FACES } from '@constants';

const DrawerHeader = () => {
  const globalStyles = useGlobalStyles();
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      }}
      imageStyle={{ borderRadius: 5 }}
    >
      <View
        style={{
          paddingHorizontal: 12,
          marginBottom: 12,
          justifyContent: 'flex-start',
        }}
      >
        <Text
          style={[
            globalStyles.textStyle('_18', 'white', 'NUNITO_EXTRABOLD'),
            styles.title,
          ]}
        >
          Crypto Crew
        </Text>
        <FacePile
          faces={FACES}
          hideOverflow={true}
          circleSize={12}
          containerStyle={styles.facePileContainerStyle}
        />
      </View>
    </ImageBackground>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    height: 109,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  title: {
    borderColor: 'white',
  },
  facePileContainerStyle: {
    alignSelf: 'flex-start',
    borderColor: 'white',
  },
});
