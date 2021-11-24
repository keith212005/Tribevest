/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { SafeAreaWrapper, TotalLeads } from '@components';

const Dash = (props: any) => {
  const { selectedGradient, totalLeads } = props;

  useEffect(() => {}, []);

  return (
    <SafeAreaWrapper
      statusBarStyle="light-content"
      statusBarBackgroundColor={selectedGradient}
    >
      <ScrollView>{/* <TotalLeads /> */}</ScrollView>
    </SafeAreaWrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    totalLeads: state.totalLeads,
    selectedGradient: state.theme.selectedGradient,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Dashboard = connects(mapStateToProps, mapDispatchToProps)(Dash);
