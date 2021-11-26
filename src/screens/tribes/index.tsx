/* eslint-disable no-undef */
import React from 'react';

// THIRD PARTY IMPORTS
import { useSelector } from 'react-redux';

// LOCAL IMPORTS
import { SafeAreaWrapper, TribeHeader } from '@components';

const Tribe = () => {
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

  return (
    <SafeAreaWrapper
      statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    >
      <TribeHeader title={'Crypto Crew'} />
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
