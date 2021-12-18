/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { Step5 } from './step5';
import { Step6 } from './step6';
import { Step7 } from './step7';
import { Step8 } from './step8';
import { Step9 } from './step9';
import { Step10 } from './step10';
import { Step11 } from './step11';
import { Step12 } from './step12';
import { useBackButton } from '@utils';
import { responsiveWidth } from '@resources';
import { navigate, navigationRef } from '@navigator';
import {
  SignInHeader,
  FormContainer,
  RoundGradientButton2,
  SingleSelectList,
} from '@components';
import {
  SIGN_UP_STEP1,
  SIGN_UP_STEP2,
  SIGN_UP_STEP3,
  SIGN_UP_STEP4,
} from '@constants';

export const SignUpSteps = () => {
  const [state, setState] = useState({ stepIndex: 1 });
  const [disabled, setDisabled] = useState<any>({ disabled: false });
  const { colors } = useTheme() as unknown as CustomTheme;
  const insets = useSafeAreaInsets();
  const { stepIndex } = state;
  useEffect(() => {
    setDisabled(false);
  }, [state.stepIndex]);

  /**
  |--------------------------------------------------
  | Android back handler
  |--------------------------------------------------
  */
  const backHandler = () => {
    state.stepIndex !== 1 ? goToPrevious() : navigationRef.goBack();
    return true;
  };
  useBackButton(backHandler);
  /**
  |--------------------------------------------------
  | Android back handler
  |--------------------------------------------------
  */

  const goToNext = () => {
    setState({ stepIndex: ++state.stepIndex });
  };
  const goToPrevious = () => {
    setState({ stepIndex: --state.stepIndex });
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
  } else if (stepIndex === 12) {
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
          state.stepIndex !== 1 ? goToPrevious() : navigate('SignUp');
        }}
      />

      <FormContainer
        containerStyle={{
          paddingBottom: insets.bottom,
          paddingTop: 20,
          paddingHorizontal: Platform.OS === 'ios' ? 10 : 5,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true} // required for dropdown on select state
        >
          {state.stepIndex === 1 ? (
            <SingleSelectList
              array={SIGN_UP_STEP1}
              onPress={(selectedItem: any) => {
                setDisabled(false);
              }}
            />
          ) : null}
          {state.stepIndex === 2 ? (
            <SingleSelectList
              array={SIGN_UP_STEP2}
              onPress={(selectedItem: any) => {
                setDisabled(false);
              }}
            />
          ) : null}
          {state.stepIndex === 3 ? (
            <SingleSelectList
              array={SIGN_UP_STEP3}
              onPress={(selectedItem: any) => {
                setDisabled(false);
              }}
            />
          ) : null}
          {state.stepIndex === 4 ? (
            <SingleSelectList
              array={SIGN_UP_STEP4}
              onPress={(selectedItem: any) => {
                setDisabled(false);
              }}
            />
          ) : null}
          {state.stepIndex === 5 ? <Step5 /> : null}
          {state.stepIndex === 6 ? <Step6 /> : null}
          {state.stepIndex === 7 ? <Step7 /> : null}
          {state.stepIndex === 8 ? <Step8 /> : null}
          {state.stepIndex === 9 ? <Step9 /> : null}
          {state.stepIndex === 10 ? <Step10 /> : null}
          {state.stepIndex === 11 ? <Step11 /> : null}
          {state.stepIndex === 12 ? <Step12 /> : null}
        </ScrollView>

        {state.stepIndex !== 12 && (
          <RoundGradientButton2
            disabled={disabled}
            gradientColor={colors.primaryGradiant}
            title={buttonName}
            onPress={() => goToNext()}
            extraStyle={styles.buttonStyle}
          />
        )}
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonStyle: {
    marginVertical: Platform.OS === 'ios' ? 0 : 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
});
