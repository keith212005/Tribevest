/* eslint-disable no-undef */
import React from 'react';
import { View, StyleSheet } from 'react-native';

// LOCAL IMPORTS
import { DrawerLeftSide } from './DrawerLeftSide';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DrawerRightSide from './DrawerRightSide';

const DrawerContents = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
      <DrawerLeftSide />
      <DrawerRightSide />
    </View>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const DrawerContent = connects(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContents);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
  },
});
