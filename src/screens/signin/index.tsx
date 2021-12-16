/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

// THIRD PARTY IMPORTS
import { CommonActions } from '@react-navigation/native';

// LOCAL IMPORTS
import { Onboarding } from '@screens';
import {
  SocialMediaLogin,
  SignInHeader,
  SignInForm,
  FormContainer,
} from '@components';
import { FaceIdSignIn } from 'components/Forms/faceIdSignIn';
import { navigate } from '@navigator';

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
    <View style={{ flex: 1 }}>
      <SignInHeader
        title={loc('SIGN_INTO_TRIBEVEST')}
        description={loc('MANAGE_YOUR_TRIBES')}
      />

      <FormContainer>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{}}
        >
          {/* Render Face Id Sign In */}
          <FaceIdSignIn />

          {/* Render Sign In Form*/}
          <SignInForm />

          {/* Render Google Facebook Apple Buttons*/}
          <SocialMediaLogin
            leftText={loc('NEW_TO_TRIBEVEST')}
            rightText={loc('CREATE_AN_ACCOUNT')}
            onPressRightText={() => navigate('SignUp')}
            onPressIcon={(iconName) => console.log(iconName)}
          />
        </ScrollView>
      </FormContainer>
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
