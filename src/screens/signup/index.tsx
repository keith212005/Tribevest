/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import {
  SignInHeader,
  FormContainer,
  SignUpForm,
  SocialMediaLogin,
} from '@components';
import { styles } from './style';
import { fieldObject } from '@constants';
import { navigationRef } from '@navigator';

export const SignUp = () => {
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState<any>({
    email: fieldObject,
    password: fieldObject,
  });

  /**
  |--------------------------------------------------
  | Global declaration end.
  |--------------------------------------------------
  */

  return (
    <View style={styles.container}>
      <SignInHeader
        title={loc('GET_STARTED_WITH_TRIBEVEST')}
        description={loc('CREATE_YOUR_ACCOUNT')}
        showBackButton={true}
        onBackPress={() => navigationRef.goBack()}
      />

      <FormContainer>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <SignUpForm />

          {/* Render Google Facebook Apple Buttons*/}
          <SocialMediaLogin
            leftText={loc('ALREADY_HAVE_ACCOUNT')}
            rightText={loc('SIGN_IN')}
            onPressRightText={() => navigationRef.goBack()}
            onPressIcon={(iconName) => console.log(iconName)}
          />
        </ScrollView>
      </FormContainer>
    </View>
  );
};
