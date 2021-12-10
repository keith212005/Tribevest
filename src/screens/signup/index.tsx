/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { styles } from './style';
import { fieldObject, SIGN_UP_STEP1 } from '@constants';
import {
  SignInHeader,
  FormContainer,
  SignUpForm,
  SocialMediaLogin,
} from '@components';
import { navigate, navigationRef } from '@navigator';

export const SignUp = () => {
  const { colors } = useTheme() as unknown as CustomTheme;

  const [state, setState] = createState({
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
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 20 }}
        >
          <SignUpForm />
          <SocialMediaLogin />
        </ScrollView>
      </FormContainer>
    </View>
  );
};
