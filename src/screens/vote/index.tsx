/* eslint-disable no-undef */
import React from 'react';
import { ScrollView, Text, TextStyle, View } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import {
  AvatarGroup,
  Dot,
  RoundGradientButton,
  TotalVoteCountView,
  MainHeader,
  VoteCounter,
} from '@components';
import { FACES } from '@constants';
import { navigate } from '@navigator';
import { useTheme } from '@react-navigation/native';
import { images, responsiveWidth, useGlobalStyles } from '@resources';

export const Vote = () => {
  const insets = useSafeAreaInsets();
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;

  const _renderText = (name: string, extraStyle?: TextStyle) => {
    return (
      <Text
        style={[
          globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          { ...extraStyle },
        ]}
      >
        {name}
      </Text>
    );
  };

  const _renderUserInfo = () => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('row', 'flex-start', 'center'),

          { marginTop: 10 },
        ]}
      >
        <FastImage
          source={{ uri: FACES[0].imageUrl }}
          style={[globalStyle.squareLayout(60), { borderRadius: 60 }]}
        />
        <View style={{ marginLeft: 10 }}>
          {_renderText('Jonathan Ross', {
            ...globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
          })}
          {_renderText('@joninvestor', {
            ...globalStyle.textStyle('_12', 'text', 'NUNITO_BOLD'),
          })}
        </View>
        {_renderText('Dec 11, 2021', {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          flex: 1,
          textAlign: 'right',
          color: colors.lightText,
        })}
      </View>
    );
  };

  const _renderCastYourVote = () => {
    return (
      <View style={{ marginTop: 40 }}>
        {_renderText(loc('CAST_YOUR_VOTE'), {
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_EXTRABOLD'),
          color: colors.lightText,
          alignSelf: 'center',
        })}
        <View
          style={[
            globalStyle.layoutDirection('row', 'space-evenly', 'flex-start'),
            { marginTop: 16 },
          ]}
        >
          <VoteCounter
            title={loc('YES')}
            image={images.like}
            backgroundColor="#36B98214"
            titleFont="NUNITO_BOLD"
            titleSize={'_18'}
            titleColor="green_text"
            fontWeight="900"
            onPress={() => {}}
          />
          <VoteCounter
            title={loc('NO')}
            image={images.dislike}
            backgroundColor="#FF686514"
            titleFont="NUNITO_REGULAR"
            titleSize={'_18'}
            titleColor="error_text"
            fontWeight="900"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  };

  const _renderVotes = () => {
    return (
      <View style={{ marginTop: 40 }}>
        <View
          style={[globalStyle.layoutDirection('row', 'flex-start', 'center')]}
        >
          {_renderText(loc('VOTES'), {
            ...globalStyle.textStyle('_14', 'text', 'NUNITO_BOLD'),
          })}
          <Dot
            size={6}
            extraStyle={{ marginHorizontal: 10 }}
            colors={['grey', 'grey']}
          />
          {_renderText('super majority 75%', {
            ...globalStyle.textStyle('_14', 'text', 'NUNITO_REGULAR'),
            color: colors.lightText,
          })}
          <View
            style={[
              globalStyle.layoutDirection('row', 'flex-end', 'center'),
              { flex: 1 },
            ]}
          >
            <TotalVoteCountView
              voteCount={7}
              image={images.like}
              containerStyle={{ backgroundColor: '#36B98214', marginLeft: 5 }}
              textStyle={{ color: colors.green_text, marginHorizontal: 2 }}
            />
            <TotalVoteCountView
              voteCount={4}
              image={images.dislike}
              containerStyle={{ backgroundColor: '#FF686514', marginLeft: 5 }}
              textStyle={{ color: colors.error_text, marginHorizontal: 2 }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
      <MainHeader
        headerTitle="Crypto Crew"
        hideTribeName={true}
        showBackIcon={true}
        hideRightIcon={true}
        rightIcon={images.members}
        onPressRightIcon={() => {}}
        onPressBackButton={() => navigate('Voting')}
      />
      <ScrollView>
        <View style={{ padding: 20 }}>
          {_renderText('Purchase a multi-family in downtown Austin', {
            ...globalStyle.textStyle('_18', 'text', 'NUNITO_REGULAR'),
            fontWeight: '900',
          })}
          {_renderText(loc('CREATED_BY'), {
            color: colors.lightText,
            marginTop: 10,
          })}

          {_renderUserInfo()}

          {_renderText(loc('DESCRIPTION'), {
            color: colors.lightText,
            marginTop: 10,
          })}

          {_renderText(
            'Pellentesque eu nisi malesuada, volutpat lectus non, varius sapien. Nulla ornare est id odio euismod, non fringilla urna ornare vivamus vitae arcu',
            { ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD') },
          )}

          {_renderVotes()}
          <AvatarGroup
            list={FACES}
            size={responsiveWidth(9.5)}
            showVotes={true}
            containerStyle={{
              marginVertical: 10,
              alignSelf: 'center',
            }}
          />

          {_renderCastYourVote()}
          <RoundGradientButton
            icon={images.refresh}
            gradientColor={['#1846FF14', '#1846FF14']}
            title={loc('RESET_MY_VOTE')}
            onPress={() => {}}
            titleStyle={{ color: '#189EFF', marginLeft: 10 }}
            extraStyle={{ marginTop: 16 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
