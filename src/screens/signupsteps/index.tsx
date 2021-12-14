/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';
import { Step5 } from './step5';
import { Step6 } from './step6';
import { Step7 } from './step7';
import { Step8 } from './step8';
import { Step9 } from './step9';
import { Step10 } from './step10';
import { Step11 } from './step11';

import { navigate, navigationRef } from '@navigator';
import { SignInHeader, FormContainer, RoundGradientButton2 } from '@components';
import { responsiveWidth } from '@resources';
import { useBackButton } from '@utils';

export const SignUpSteps = () => {
  const [state, setState] = useState({ stepIndex: 1 });
  const { colors } = useTheme() as unknown as CustomTheme;
  const insets = useSafeAreaInsets();
  const { stepIndex } = state;
  useEffect(() => {}, [state.stepIndex]);

  /**
  |--------------------------------------------------
  | Android back handler
  |--------------------------------------------------
  */
  const backHandler = () => {
    if (state.stepIndex !== 1) {
      goToPrevious();
    } else {
      navigationRef.goBack();
    }
    return true;
  };
  useBackButton(backHandler);
  /**
  |--------------------------------------------------
  | Android back handler
  |--------------------------------------------------
  */

  const goToNext = () => {
    setState({ stepIndex: state.stepIndex + 1 });
  };
  const goToPrevious = () => {
    setState({ stepIndex: state.stepIndex - 1 });
  };

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
  } else if (stepIndex === 7) {
    headerTitle = loc('HOW_MANY_MEMBERS_TRIBE');
    headerDescription = '';
    buttonName = loc('SAVE_N_CONTINUE');
  } else if (stepIndex === 8) {
    headerTitle = loc('OUR_TRIBE_GOALS');
    headerDescription = '';
    buttonName = loc('SAVE_N_CONTINUE');
  } else if (stepIndex === 9) {
    headerTitle = loc('MISSION_STATEMENT');
    headerDescription = loc('INSPIRE_PARTNER');
    buttonName = loc('SAVE_N_CONTINUE');
  } else if (stepIndex === 10) {
    let userName = 'Kasey';
    let tribeName = 'Wealth Tribe';
    headerTitle = userName + loc('YOUR_TRIBE') + tribeName + loc('LOOKS_GREAT');
    headerDescription = '';
    buttonName = loc('CHECKOUT');
  } else if (stepIndex === 11) {
    let userName = 'Kasey';
    let tribeName = 'Wealth Tribe';
    headerTitle = userName + loc('YOUR_TRIBE') + tribeName + loc('LOOKS_GREAT');
    headerDescription = '';
    buttonName = loc('SKIP_NOW');
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
            goToPrevious();
          } else {
            navigate('SignUp');
          }
        }}
      />

      <FormContainer
        containerStyle={{
          paddingBottom: insets.bottom,
          paddingTop: 20,
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
          {state.stepIndex === 7 ? <Step7 /> : null}
          {state.stepIndex === 8 ? <Step8 /> : null}
          {state.stepIndex === 9 ? <Step9 /> : null}
          {state.stepIndex === 10 ? <Step10 /> : null}
          {state.stepIndex === 11 ? <Step11 /> : null}
        </ScrollView>

        <RoundGradientButton2
          disabled={false}
          gradientColor={colors.primaryGradiant}
          title={buttonName}
          onPress={() => goToNext()}
          extraStyle={styles.buttonStyle}
        />
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonStyle: {
    marginVertical: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
});
