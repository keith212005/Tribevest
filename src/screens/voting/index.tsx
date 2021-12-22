/* eslint-disable no-undef */
import React from 'react';
import { Text, View, ScrollView } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { styles } from './style';
import { RoundGradientButton, TribeHeader } from '@components';
import { images, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';
import { navigate } from '@navigator';
import { CurrentMotionsCard } from './CurrentMotionsCard';

export const Voting = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme() as CustomTheme;
  const globalStyle = useGlobalStyles();

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
          onPress={() => navigate('Vote')}
          icon={images.add}
          titleStyle={styles.newButtonTitleStyle}
          extraStyle={styles.newButtonExtraStyle}
        />
      </View>
      <Text style={[globalStyle.textStyle('_12', 'lightText', 'NUNITO_BOLD')]}>
        {loc('CURRENT_MOTIONS')}
      </Text>
    </>
  );

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <TribeHeader />
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 20 }}>
          {_renderNewButtonView()}
          <CurrentMotionsCard />
        </View>
      </ScrollView>
    </View>
  );
};
