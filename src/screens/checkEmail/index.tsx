/* eslint-disable no-undef */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// LOCAL IMPORTS
import {
  FastImg,
  FormContainer,
  RoundGradientButton2,
  SignInHeader,
} from '@components';
import { navigate, navigationRef, resetNavigation } from '@navigator';
import { useTheme } from '@react-navigation/native';
import { images, responsiveWidth, useGlobalStyles } from '@resources';
import { styles } from './style';
import { useSelector } from 'react-redux';

export const CheckEmail = () => {
  const { colors } = useTheme() as unknown as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  const globalStyle = useGlobalStyles();

  const _renderLink = (name: string, onPress: any) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            globalStyle.textStyle('_14', 'blue', 'NUNITO_REGULAR'),
            { marginVertical: 16 },
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderBottomView = () => {
    return (
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: isDarkTheme ? colors.background : colors.white },
        ]}
      >
        {_renderLink(loc('SKIP_CONFIRM_LATER'), () =>
          resetNavigation('Signin' as never),
        )}

        <Text
          style={[
            globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
            { textAlign: 'center', width: responsiveWidth(80) },
          ]}
        >
          {loc('DID_NOT_RECEIVE_EMAIL')}
        </Text>

        {_renderLink(loc('TRY_ANOTHER_EMAIL'), () => {
          navigationRef.goBack();
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SignInHeader
        title={loc('CHECK_YOUR_EMAIL')}
        description={loc('PASSWORD_RESET_EMAIL_SENT')}
        showBackButton={true}
        onBackPress={() => navigationRef.goBack()}
      />
      <FormContainer containerStyle={styles.formContainer}>
        {/* Render Mail Image */}
        {FastImg(images.check_email, responsiveWidth(40), {
          marginVertical: 30,
        })}

        {/* Redner Open Mail Button */}
        <RoundGradientButton2
          gradientColor={colors.primaryGradiant}
          title={loc('OPEN_EMAIL')}
          onPress={() => navigate('NewPassword')}
          extraStyle={styles.openEmailButtonStyle}
        />

        {_renderBottomView()}
      </FormContainer>
    </View>
  );
};
