/* eslint-disable no-undef */
import React from 'react';
import { Text, View, ScrollView } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { styles } from './style';
import { RoundGradientButton, MainHeader } from '@components';
import { images, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';
import { navigate } from '@navigator';
import { CurrentMotionsCard } from './CurrentMotionsCard';
import { PastMotionsCard } from './PastMotionsCard';

export const Voting = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as CustomTheme;
  const globalStyle = useGlobalStyles();

  const _renderCardTitle = (title: string, extraStyle?: any) => (
    <Text
      style={[
        globalStyle.textStyle('_12', 'lightText', 'NUNITO_BOLD'),
        { ...extraStyle },
      ]}
    >
      {title}
    </Text>
  );

  const _renderNewButtonView = () => (
    <>
      <View style={styles.newButtonContainer}>
        <Text
          style={[
            globalStyle.textStyle('_26', 'text', 'NUNITO_REGULAR'),
            { fontWeight: '900' },
          ]}
        >
          {loc('VOTING')}
        </Text>

        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('NEW')}
          onPress={() => navigate('NewMotionSetup')}
          icon={images.add}
          titleStyle={styles.newButtonTitleStyle}
          extraStyle={styles.newButtonExtraStyle}
        />
      </View>
      {_renderCardTitle(loc('CURRENT_MOTIONS'))}
    </>
  );

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <MainHeader
        headerTitle="Crypto Crew"
        rightIcon={images.members}
        onPressRightIcon={() => {}}
      />
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 20 }}>
          {_renderNewButtonView()}
          <CurrentMotionsCard />
          {_renderCardTitle(loc('PAST_MOTIONS'), {
            marginTop: 20,
            marginBottom: -5,
          })}
          <PastMotionsCard />
        </View>
      </ScrollView>
    </View>
  );
};
