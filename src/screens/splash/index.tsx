/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { resetNavigation } from '@navigator';
import { images } from '@resources';
import { styles } from './style';
import { useTheme } from '@react-navigation/native';

const SplashScreen = (props: any) => {
  const { colors } = useTheme() as unknown as CustomTheme;

  /**
  |--------------------------------------------------
  | Global section end
  |--------------------------------------------------
  */

  // props.resetStore();
  props.networkListener();

  useEffect(() => {
    // navigate to Login or Dashboard
    setTimeout(() => {
      return resetNavigation('Login' as never);
    }, 1000);
  }, []);

  const _renderIconAndDescription = () => {
    return (
      <View style={styles.iconContainer}>
        <View style={styles.iconInnerContainer}>
          <Image source={images.logo} style={{ marginHorizontal: 10 }} />
          <Image source={images.tribevest} />
        </View>
        <Text style={styles.tagline}>{loc('INVESTING_IS_BETTER')}</Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar translucent={true} barStyle={'light-content'} />
      <LinearGradient colors={colors.primaryGradiant} style={styles.container}>
        <ImageBackground
          source={images.background_logo}
          style={styles.backgoundImage}
        />
        {_renderIconAndDescription()}
      </LinearGradient>
    </>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Splash = connects(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
