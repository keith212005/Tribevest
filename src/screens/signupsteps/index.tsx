/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { Step1 } from './step1';
import { Step2 } from './step2';
import { navigate } from '@navigator';
import { SignInHeader, FormContainer, RoundGradientButton2 } from '@components';

export const SignUpSteps = () => {
  const [state, setState] = useState({ stepIndex: 1 });
  const { colors } = useTheme() as unknown as CustomTheme;

  useEffect(() => {}, [state.stepIndex]);

  return (
    <View style={[styles.container]}>
      <SignInHeader
        title={loc('WELCOME_TO_TRIBEVEST')}
        description={loc('WELCOME_MSG')}
        showBackButton={true}
        onBackPress={() => {
          if (state.stepIndex !== 1) {
            setState({ stepIndex: state.stepIndex - 1 });
          } else {
            navigate('SignUp');
          }
        }}
      />

      <FormContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 20, flex: 1 }}
        >
          {state.stepIndex === 1 ? <Step1 /> : null}
          {state.stepIndex === 2 ? <Step2 /> : null}
        </ScrollView>

        <RoundGradientButton2
          gradientColor={colors.primaryGradiant}
          title={loc('CONTINUE')}
          onPress={() => {
            setState({ stepIndex: state.stepIndex + 1 });
          }}
          disabled={false}
        />
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
