/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import * as React from 'react';
import { Image, ImageBackground, Text, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { styles } from './style';
import { navigate } from 'navigator/RootNavigation';
import { images } from '@resources';
import { useTheme } from '@react-navigation/native';

const SplashScreen = (props: any) => {
  const { colors } = useTheme() as unknown as CustomTheme;

  React.useEffect(() => {
    props.networkListener();

    props.setAppLanguage('en');
    setTimeout(() => navigate('Login' as never), 2000);
  }, [props]);

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
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient colors={colors.primaryGradiant} style={styles.container}>
        <ImageBackground
          source={images.background_logo}
          style={styles.imageBackground}
        />
        {_renderIconAndDescription()}
      </LinearGradient>
    </>
  );
};

export default Splash;

function mapStateToProps(state: any) {
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
