/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

// THIRD PARTY IMPORTS
import { CommonActions } from '@react-navigation/native';

// LOCAL IMPORTS
import { Onboarding } from '@screens';
import { SignInHeader } from './signInHeader';
import { SignInForm } from './SignInForm';
import { SocialMediaLogin } from './socialMediaLogin';
import { FaceIdSignIn } from './FaceIdSignIn';

const SigninScreen = (props: any) => {
  const { isAppOpenFirstTime, isUserLoggedIn } = props;

  useEffect(() => {
    // props.isOpenFirstTime(false);
    if (props.isUserLoggedIn) {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'DrawerNavigator' }],
        }),
      );
    }
  }, [props]);

  /**
  |--------------------------------------------------
  | Global Declaration section end
  |--------------------------------------------------
  */

  // Actions to be done when app installed and opened first time only
  if (isAppOpenFirstTime && !isUserLoggedIn) {
    return <Onboarding />;
  }

  if (isUserLoggedIn) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SignInHeader />
      <SignInForm />
      <SocialMediaLogin />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    isDarkTheme: state.theme.isDarkTheme,
    isAppOpenFirstTime: state.isOpenedFirstTime,
    isUserLoggedIn: state.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Signin = connects(
  mapStateToProps,
  mapDispatchToProps,
)(SigninScreen);
