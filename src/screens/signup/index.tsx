/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View } from 'react-native';

// THIRD PARTY IMPORTS
import createState from 'react-hook-setstate';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { styles } from './style';
import { fieldObject } from '@constants';
import {
  SignInHeader,
  FormContainer,
  SignUpForm,
  SocialMediaLogin,
} from '@components';

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
      />

      <FormContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SignUpForm />
          <SocialMediaLogin />
        </ScrollView>
      </FormContainer>
    </View>
  );
};
