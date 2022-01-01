/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import {
  BankBalanceCard,
  CapTableCard,
  OperatingAgreementButton,
  MainHeader,
} from '@components';
import { styles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '@resources';

const Tribe = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <MainHeader
        headerTitle={'Crypto Crew'}
        rightIcon={images.members}
        onPressRightIcon={() => {}}
      />
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
    </View>
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
