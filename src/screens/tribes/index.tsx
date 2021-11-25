/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

// LOCAL IMPORTS
import { SafeAreaWrapper, TribeHeader } from '@components';
import { useSelector } from 'react-redux';

const Tribe = (props: any) => {
  const { selectedGradient } = props;
  console.log('selectedGradiet>>>>', selectedGradient);

  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <SafeAreaWrapper
    // statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    // statusBarBackgroundColor={['white', 'white']}
    >
      {/* <TribeHeader title={'ketan'} /> */}
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
