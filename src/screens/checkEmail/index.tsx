/* eslint-disable no-undef */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// LOCAL IMPORTS
import { SignInHeader } from 'screens/signin/signInHeader';
import { FastImg, RoundGradientButton2 } from '@components';
import { navigate, navigationRef, resetNavigation } from '@navigator';
import { useTheme } from '@react-navigation/native';
import { color, images, responsiveWidth, useGlobalStyles } from '@resources';
import { styles } from './style';
import { useSelector } from 'react-redux';

export const CheckEmail = () => {
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const globalStyle = useGlobalStyles();

  const _renderBottomView = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: isDarkTheme ? colors.background : colors.white,
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            resetNavigation('Signin' as never);
          }}
        >
          <Text
            style={[
              globalStyle.textStyle('_14', 'blue', 'NUNITO_REGULAR'),
              { marginVertical: 16 },
            ]}
          >
            {loc('SKIP_CONFIRM_LATER')}
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
            { textAlign: 'center' },
          ]}
        >
          {loc('DID_NOT_RECEIVE_EMAIL')}
          <TouchableOpacity onPress={() => navigationRef.goBack()}>
            <Text
              style={[
                globalStyle.textStyle('_14', 'blue', 'NUNITO_REGULAR'),
                { marginHorizontal: responsiveWidth(10) },
              ]}
            >
              {loc('TRY_ANOTHER_EMAIL')}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  };

  const _renderOpenEmail = () => {
    return (
      <View
        style={[
          styles.openEmailContainer,
          { backgroundColor: isDarkTheme ? colors.background : colors.white },
        ]}
      >
        {FastImg(images.check_email, responsiveWidth(40), {
          alignSelf: 'center',
          bottom: -10,
          marginVertical: 30,
        })}

        <RoundGradientButton2
          gradientColor={
            colors.primaryGradiant as unknown as keyof typeof color
          }
          title={loc('OPEN_EMAIL')}
          onPress={() => navigate('NewPassword')}
          extraStyle={{ width: responsiveWidth(90), alignSelf: 'center' }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <SignInHeader
        title={loc('CHECK_YOUR_EMAIL')}
        description={loc('PASSWORD_RESET_EMAIL_SENT')}
        showBackButton={true}
      />
      {_renderOpenEmail()}
      {_renderBottomView()}
    </View>
  );
};
