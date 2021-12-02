/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

// THIRD PARTY IMPORTS
import { CommonActions, useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import {
  CustomInput,
  SquareButton,
  LinearGradeintBackground,
  CustomStatusBar,
} from '@components';
import { styles } from './style';
import { Onboarding } from '@screens';
import { fieldObject, IfieldObject } from '@constants';
import { responsiveHeight, responsiveWidth, useGlobalStyles } from '@resources';

interface User {
  _key: string;
  username: IfieldObject;
  password: IfieldObject;
}

const SigninScreen = (props: any) => {
  var inputs = new Array(2);
  const { colors } = useTheme() as unknown as CustomTheme;
  const globalStyles = useGlobalStyles();
  const { isAppOpenFirstTime, isUserLoggedIn } = props;

  /**
  |--------------------------------------------------
  | Global Declaration section end
  |--------------------------------------------------
  */

  // Actions to be done when app installed and opened first time only

  const [state, setState]: any = useState<User>({
    _key: '',
    username: fieldObject,
    password: fieldObject,
  });

  useEffect(() => {
    // props.isOpenFirstTime(false);
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

  if (isAppOpenFirstTime && !isUserLoggedIn) {
    return <Onboarding />;
  }

  if (isUserLoggedIn) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CustomStatusBar />
      <LinearGradeintBackground>
        <View
          style={{
            height: responsiveHeight(20),
            justifyContent: 'center',
            marginLeft: responsiveWidth(6),
          }}
        >
          <Text
            style={[globalStyles.textStyle('_22', 'white', 'NUNITO_EXTRABOLD')]}
          >
            {loc('SIGN_INTO_TRIBEVEST')}
          </Text>
          <Text
            style={[globalStyles.textStyle('_14', 'white', 'NUNITO_REGULAR')]}
          >
            {loc('MANAGE_YOUR_TRIBES')}
          </Text>
        </View>

        <View
          style={[styles.gradientContainer, { backgroundColor: colors.card }]}
        >
          <View style={{ flex: 4, justifyContent: 'center' }} />

          <View style={{ flex: 6 }}>
            {_renderInput(0, 'username', { valueObject: state.username })}
            {_renderInput(1, 'password', {
              valueObject: state.password,
              blurOnSubmit: true,
            })}
            <SquareButton
              title="Signin"
              onPress={() => {
                props.isLoggedIn(true);
              }}
            />
          </View>
        </View>
      </LinearGradeintBackground>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    isDarkTheme: state.theme.isDarkTheme,
    isAppOpenFirstTime: state.isOpenedFirstTime,
    isUserLoggedIn: state.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Signin = connects(
  mapStateToProps,
  mapDispatchToProps,
)(SigninScreen);
