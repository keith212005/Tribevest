/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { styles } from './style';
import {
  BankBalanceCard,
  CapTableCard,
  OperatingAgreementButton,
  SafeAreaWrapper,
  TribeHeader,
} from '@components';

const Tribe = () => {
  return (
    <SafeAreaWrapper>
      <TribeHeader />
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 20 }}>
          <OperatingAgreementButton />
          <BankBalanceCard />
          <CapTableCard />
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    selectedGradient: state.theme.selectedGradient,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Tribes = connects(mapStateToProps, mapDispatchToProps)(Tribe);