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
import { images, useGlobalStyles, verticalScale, scale } from '@resources';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { MY_CONTRIBUTIONS } from '@constants';
import { Divider } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { FundingTribesTabNavigator } from './FundingTribesTabNavigator';

export const Funding = () => {
  const insets = useSafeAreaInsets();
  const globlaStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

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
            extraStyle={{
              width: scale(155),
              height: verticalScale(38),
            }}
            titleStyle={{
              ...globlaStyle.textStyle('_14', 'white', 'NUNITO_REGULAR'),
              marginLeft: scale(6),
            }}
            extraLinearGradientProps={{
              useAngle: true,
              angle: 169,
              angleCenter: { x: 0.3, y: 0.7 },
              colors: colors.primaryGradiant,
            }}
          />
          <RoundGradientButton
            gradientColor={colors.primaryGradiant}
            title={loc('CAP_LEDGER')}
            onPress={() => {}}
            icon={images.graph}
            iconSize={30}
            extraStyle={{
              width: scale(155),
              height: verticalScale(38),
            }}
            titleStyle={{
              ...globlaStyle.textStyle('_14', 'white', 'NUNITO_REGULAR'),
              marginLeft: scale(6),
            }}
            extraLinearGradientProps={{
              useAngle: true,
              angle: 169,
              angleCenter: { x: 0.3, y: 0.7 },
              colors: colors.primaryGradiant,
            }}
          />
        </View>
      </>
    );
  };

  const _renderLastNextContribution = () => {
    const _renderCard = (
      amount: string,
      title: string,
      description: string,
    ) => {
      return (
        <CardWrapper
          containerStyle={{
            flex: 5,
            backgroundColor: isDarkTheme ? colors.background : 'white',
          }}
        >
          {_renderText(amount, {
            ...globlaStyle.textStyle('_24', 'blue', 'NUNITO_BOLD'),
          })}
          {_renderText(loc(title), {
            ...globlaStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
            width: scale(100),
            marginVertical: scale(8),
          })}
          {_renderText(description, {
            ...globlaStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
          })}
        </CardWrapper>
      );
    };
    return (
      <View
        style={[globlaStyle.layoutDirection('row', 'space-evenly', 'center')]}
      >
        {_renderCard(
          '$9,000.00',
          'MY_LAST_CONTRIBUTIONS',
          'Since October 2020',
        )}
        {_renderCard('$1,200.00', 'MY_NEXT_CONTRIBUTIONS', 'Scheduled 5/31/21')}
      </View>
    );
  };

  const _renderTotalContributionGraph = () => {
    return (
      <CardWrapper
        containerStyle={{
          backgroundColor: isDarkTheme ? colors.background : 'white',
        }}
      >
        {_renderText(loc('TOTAL_CONTRIBUTIONS'), {
          ...globlaStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
        })}
        <View
          style={[globlaStyle.layoutDirection('row', 'flex-start', 'center')]}
        >
          <Dot
            size={8}
            extraStyle={{ marginRight: 10 }}
            colors={colors.greenGradient}
          />
          {_renderText('Personal', {
            ...globlaStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
          })}

          <Dot
            size={8}
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

  const _renderMyContributionSchedule = () => {
    return (
      <CardWrapper
        containerStyle={{
          backgroundColor: isDarkTheme ? colors.background : 'white',
        }}
      >
        {_renderText(loc('MY_CONTRIBUTION_SCHEDULE'), {
          ...globlaStyle.textStyle('_18', 'text', 'NUNITO_BOLD'),
          marginBottom: 20,
        })}

        <ScrollView style={{ height: scale(320) }}>
          {MY_CONTRIBUTIONS.map((item) => {
            return (
              <View key={item.id}>
                <View
                  style={[
                    globlaStyle.layoutDirection(
                      'row',
                      'space-between',
                      'center',
                    ),
                  ]}
                >
                  <View>
                    {_renderText(item.amount, {
                      ...globlaStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
                    })}
                    {_renderText('Start: ' + item.date, {
                      ...globlaStyle.textStyle(
                        '_12',
                        'lightText',
                        'NUNITO_BOLD',
                      ),
                      marginTop: scale(4),
                    })}
                  </View>
                  <View
                    style={[
                      globlaStyle.layoutDirection('row', 'center', 'center'),
                    ]}
                  >
                    <View
                      style={{
                        backgroundColor: isDarkTheme ? colors.card : '#F1F5F9',
                        paddingHorizontal: 7,
                        paddingVertical: 5,
                        borderRadius: 5,
                      }}
                    >
                      {_renderText(item.times, {
                        ...globlaStyle.textStyle(
                          '_14',
                          'text',
                          'NUNITO_REGULAR',
                        ),
                      })}
                    </View>
                    {_renderText(item.type, {
                      paddingLeft: scale(8),
                      paddingRight: scale(25),
                      ...globlaStyle.textStyle(
                        '_14',
                        'lightText',
                        'NUNITO_REGULAR',
                      ),
                    })}

                    <FastImage
                      source={images.arrow_right}
                      style={[globlaStyle.squareLayout(30)]}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                </View>
                <Divider style={{ marginVertical: verticalScale(16) }} />
              </View>
            );
          })}
        </ScrollView>
      </CardWrapper>
    );
  };

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <MainHeader
        headerTitle={'Crypto Crew'}
        rightIcon={images.members}
        onPressRightIcon={() => {}}
      />
      <ScrollView contentContainerStyle={{ paddingTop: 16 }}>
        {_renderTitleAndCapButtons()}
        {_renderTotalContributionGraph()}
        {_renderLastNextContribution()}
        {_renderMyContributionSchedule()}
        <FundingTribesTabNavigator />
      </ScrollView>
    </View>
  );
};
