/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { View } from 'react-native';

// THIRD PARTY IMPORTS
import { SquareButton } from '@components';

// LOCAL IMPORTS
import { styles } from './style';
import { resetNavigation } from 'navigator/RootNavigation';

const LoginScreen = (props: any) => {
  useEffect(() => {
    props.isOpenFirstTime(false);
  }, [props]);

  return (
    <View style={styles.container}>
      <SquareButton
        title="Login"
        onPress={() => resetNavigation('DrawerNavigator' as never)}
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
export const Login = connects(mapStateToProps, mapDispatchToProps)(LoginScreen);
