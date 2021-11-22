/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import styles from './style';
import { navigate } from 'navigator/RootNavigation';

const TribesScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text>This is Tribes screen</Text>
      <FastImage
        style={{ width: 50, height: 50, borderWidth: 1 }}
        source={{
          uri: 'https://www.istockphoto.com/photos/nature',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

function mapStateToProps(_state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Tribes = connects(
  mapStateToProps,
  mapDispatchToProps,
)(TribesScreen);
