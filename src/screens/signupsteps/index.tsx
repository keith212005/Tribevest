/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { Step1 } from './step1';
import { Step2 } from './step2';
import { navigate } from '@navigator';
import { SignInHeader, FormContainer, RoundGradientButton2 } from '@components';
import { Step3 } from './step3';
import { Step4 } from './step4';
import { Step5 } from './step5';
import { responsiveWidth } from '@resources';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Step6 } from './step6';

export const SignUpSteps = () => {
  const [state, setState] = useState({ stepIndex: 1 });
  const { colors } = useTheme() as unknown as CustomTheme;
  const insets = useSafeAreaInsets();

  const { stepIndex } = state;

  useEffect(() => {}, [state.stepIndex]);

  let headerTitle,
    headerDescription,
    buttonName = '';

  if (stepIndex === 1 || stepIndex === 2) {
    headerTitle = loc('WELCOME_TO_TRIBEVEST');
    headerDescription = loc('WELCOME_MSG');
    buttonName = loc('CONTINUE');
  } else if (stepIndex === 3) {
    headerTitle = loc('HOW_MUCH_CAPITAL_INV_GROUP');
    headerDescription = '';
    buttonName = loc('CONTINUE');
  } else if (stepIndex === 4) {
    headerTitle = loc('LAUNCH_TIMELINE');
    headerDescription = '';
    buttonName = loc('CONTINUE');
  } else if (stepIndex === 5) {
    headerTitle = loc('NAME_YOUR_TRIBE');
    headerDescription = '';
    buttonName = loc('SAVE_N_CONTINUE');
  } else if (stepIndex === 6) {
    headerTitle = loc('INVESTMENT_INTEREST');
    headerDescription = '';
    buttonName = loc('CONTINUE');
  } else {
    headerTitle = '';
  }
  return (
    <View style={[styles.container]}>
      <SignInHeader
        title={headerTitle}
        description={headerDescription}
        showBackButton={true}
        onBackPress={() => {
          if (state.stepIndex !== 1) {
            setState({ stepIndex: state.stepIndex - 1 });
          } else {
            navigate('SignUp');
          }
        }}
      />

      <FormContainer
        containerStyle={{
          paddingTop: 20,
          paddingBottom: insets.bottom,
          paddingHorizontal: Platform.OS === 'ios' ? 10 : 5,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {state.stepIndex === 1 ? <Step1 /> : null}
          {state.stepIndex === 2 ? <Step2 /> : null}
          {state.stepIndex === 3 ? <Step3 /> : null}
          {state.stepIndex === 4 ? <Step4 /> : null}
          {state.stepIndex === 5 ? <Step5 /> : null}
          {state.stepIndex === 6 ? <Step6 /> : null}
        </ScrollView>

        <RoundGradientButton2
          disabled={false}
          gradientColor={colors.primaryGradiant}
          title={buttonName}
          onPress={() => setState({ stepIndex: state.stepIndex + 1 })}
          extraStyle={{
            marginVertical: 10,
            width: responsiveWidth(90),
            alignSelf: 'center',
          }}
        />
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
