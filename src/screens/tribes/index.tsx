/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

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
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <SafeAreaWrapper
      statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    >
      <TribeHeader title={'Crypto Crew'} />
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
