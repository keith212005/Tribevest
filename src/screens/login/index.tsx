/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

// THIRD PARTY IMPORTS
import { CustomInput, SquareButton, SafeAreaWrapper } from '@components';
import { CommonActions, useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import { fieldObject, IfieldObject } from '@constants';
import { styles } from './style';
import { resetNavigation } from 'navigator/RootNavigation';

interface User {
  _key: string;
  username: IfieldObject;
  password: IfieldObject;
}

const LoginScreen = (props: any) => {
  var inputs = new Array(2);
  const { colors } = useTheme() as unknown as CustomTheme;
  const { isDarkTheme, isOpenedFirstTime } = props;

  /**
  |--------------------------------------------------
  | Global Declaration section end
  |--------------------------------------------------
  */

  // Actions to be done when app installed and opened first time only
  if (isOpenedFirstTime) {
    props.setThemeFirstTime();
  }

  const [state, setState]: any = useState<User>({
    _key: '',
    username: fieldObject,
    password: fieldObject,
  });

  useEffect(() => {
    props.isOpenFirstTime(false);
    if (props.isUserLoggedIn) {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'DrawerNavigator' }],
        }),
      );
    }
  }, [props]);

  //handle of input box for check validation
  const checkValidation = (
    numbers: number,
    _key: string,
    _isFocus: boolean,
  ) => {
    var stateObject: any = {};
    const username = state.username.value;
    const password = state.password.value;
    return new Promise((resolve) => {
      stateObject[_key] = {
        ...state[_key],
        isFocus: _isFocus,
      };

      switch (numbers) {
        case 2:
          if (ld.isEmpty(password)) {
            stateObject.password = {
              value: password,
              isError: true,
              errorText: loc('EMPTY_PASSWORD'),
              isFocus: false,
            };
          }
        case 1:
          if (ld.isEmpty(username)) {
            stateObject.username = {
              value: username,
              isError: true,
              errorText: loc('EMPTY_USERNAME'),
              isFocus: false,
            };
          }
        default:
          setState((prevState: any) => ({
            ...prevState,
            ...stateObject,
          }));
          resolve(true);
          break;
      }
    });
  };

  const handleChange = (value: unknown, key: string) => {
    setState({
      ...state,
      [key]: {
        value: value,
        isError: false,
        errorText: '',
        isFocus: true,
      },
    });
  };

  // hadnle onSubmitEditing method of input box
  const onSubmitEditing = (number: number) => {
    if (number < 1) {
      inputs[number + 1].focus();
    } else {
      // this.onLogin();
    }
  };

  const _renderInput = (index: number, key: string, extraProps = {}) => {
    /// <reference lib="es2017.string" />
    return (
      <CustomInput
        returnKeyType="done"
        label={loc(key)}
        placeholder={loc(key)}
        refName={(input: any) => (inputs[index] = input)}
        onFocus={() => checkValidation(index, key, true)}
        onBlur={() => {}}
        onEndEditing={() => checkValidation(index + 1, key, false)}
        onSubmitEditing={() => onSubmitEditing(index)}
        onChangeText={(val: string) => handleChange(val, key)}
        {...extraProps}
      />
    );
  };

  if (props.isUserLoggedIn) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <SafeAreaWrapper
      statusBarStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={{ flex: 4, justifyContent: 'center' }} />

        <View style={{ flex: 6 }}>
          {_renderInput(0, 'username', { valueObject: state.username })}
          {_renderInput(1, 'password', {
            valueObject: state.password,
            blurOnSubmit: true,
          })}
          <SquareButton
            title="Login"
            onPress={() => {
              props.isLoggedIn(true);
              resetNavigation('DrawerNavigator' as never);
            }}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    isDarkTheme: state.theme.isDarkTheme,
    isOpenedFirstTime: state.isOpenedFirstTime,
    isUserLoggedIn: state.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Login = connects(mapStateToProps, mapDispatchToProps)(LoginScreen);
