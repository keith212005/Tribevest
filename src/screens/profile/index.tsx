/* eslint-disable no-undef */
import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { images, responsiveHeight, responsiveWidth, scale } from '@resources';
import { RoundGradientButton, UserProfileInfo } from '@components';
import { useTheme } from '@react-navigation/native';

export const Profile = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as CustomTheme;

  return (
    <ImageBackground
      source={images.splashscreen_bg}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{}}
        contentContainerStyle={{
          flex: 1,
          marginTop: responsiveHeight(17),
          backgroundColor: colors.white,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <UserProfileInfo />
        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('NEW')}
          onPress={() => {}}
          icon={images.settings}
          iconTintColor={'white'}
          iconSize={30}
          titleStyle={{}}
          extraStyle={{
            marginTop: scale(24),
            width: responsiveWidth(90),
            alignSelf: 'center',
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};
