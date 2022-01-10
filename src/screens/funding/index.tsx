/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import { styles } from './style';
import {
  CardWrapper,
  Dot,
  MainHeader,
  RoundGradientButton,
  TotalContributionsLineChart,
  _renderText,
} from '@components';
import { images, responsiveWidth, scale, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';

export const Funding = () => {
  const insets = useSafeAreaInsets();
  const globlaStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  const _renderTitleAndCapButtons = () => {
    return (
      <>
        {_renderText(loc('FUNDING'), {
          marginHorizontal: 20,
          ...globlaStyle.textStyle('_28', 'text', 'NUNITO_REGULAR'),
          fontWeight: '900',
        })}
        <View
          style={[
            globlaStyle.layoutDirection('row', 'space-evenly', 'center'),
            { marginTop: 16 },
          ]}
        >
          <RoundGradientButton
            gradientColor={colors.primaryGradiant}
            title={loc('CAP_TABLE')}
            onPress={() => {}}
            icon={images.cap_table}
            iconSize={30}
            extraStyle={{ width: responsiveWidth(45) }}
            titleStyle={{
              ...globlaStyle.textStyle('_16', 'white', 'NUNITO_BOLD'),
              marginLeft: scale(6),
            }}
          />
          <RoundGradientButton
            gradientColor={colors.primaryGradiant}
            title={loc('CAP_LEDGER')}
            onPress={() => {}}
            icon={images.graph}
            iconSize={30}
            extraStyle={{ width: responsiveWidth(45) }}
            titleStyle={{
              ...globlaStyle.textStyle('_16', 'white', 'NUNITO_BOLD'),
              marginLeft: scale(6),
            }}
          />
        </View>
      </>
    );
  };

  const _renderTotalContributionGraph = () => {
    return (
      <CardWrapper containerStyle={{ backgroundColor: colors.background }}>
        {_renderText(loc('TOTAL_CONTRIBUTIONS'), {
          ...globlaStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
        })}
        <View
          style={[globlaStyle.layoutDirection('row', 'flex-start', 'center')]}
        >
          <Dot
            size={10}
            extraStyle={{ marginRight: 10 }}
            colors={colors.greenGradient}
          />
          {_renderText('Personal', {
            ...globlaStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
          })}

          <Dot
            size={10}
            extraStyle={{ marginLeft: 24, marginRight: 5 }}
            colors={colors.primaryGradiant}
          />

          {_renderText('Tribe', {
            ...globlaStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
          })}
        </View>
        <TotalContributionsLineChart />
      </CardWrapper>
    );
  };

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <MainHeader
        headerTitle={'Crypto Crew'}
        rightIcon={images.members}
        onPressRightIcon={() => {}}
        containerStyle={{ marginBottom: 16 }}
      />
      <ScrollView>
        {_renderTitleAndCapButtons()}
        {_renderTotalContributionGraph()}
      </ScrollView>
    </View>
  );
};
