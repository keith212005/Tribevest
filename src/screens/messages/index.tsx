/* eslint-disable no-undef */
import React from 'react';

// THIRD PARTY IMPORTS

// LOCAL IMPORTS
import { MainHeader, RoundGradientButton, SafeAreaWrapper } from '@components';
import { images } from '@resources';
import { EmptyMessageView } from './EmptyMessageView';
import { useTheme } from '@react-navigation/native';

export const Messages = () => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <>
      <SafeAreaWrapper>
        <MainHeader
          headerTitle={loc('MESSAGES')}
          hideLeftImage={true}
          titleStyle={{ textAlign: 'center' }}
          rightIcon={images.user_circle_add}
          rightIconTintColor="null"
          onPressRightIcon={() => {}}
        />
        <EmptyMessageView />
      </SafeAreaWrapper>
      <RoundGradientButton
        gradientColor={colors.primaryGradiant}
        title={''}
        icon={images.add}
        iconSize={33}
        onPress={() => {
          console.log('plusclicked.....');
        }}
        extraStyle={{
          width: 48,
          height: 48,
          borderRadius: 48 / 2,
          position: 'absolute',
          bottom: 8,
          right: 12,
        }}
        titleStyle={{ fontSize: 16 }}
      />
    </>
  );
};
