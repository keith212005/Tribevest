/* eslint-disable no-undef */
import React from 'react';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { SafeAreaWrapper, Text } from '@components';

const LeadsScreen = () => {
  return (
    <SafeAreaWrapper statusBarStyle="light-content">
      <Text h1> Leads </Text>
    </SafeAreaWrapper>
  );
};

function mapStateToProps(_state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Leads = connects(mapStateToProps, mapDispatchToProps)(LeadsScreen);
