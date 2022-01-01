/* eslint-disable no-undef */
import React from 'react';
import { Text, TextStyle, View } from 'react-native';

// THIRD PARTY IMPORTS
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// LOCAL IMPORTS
import {
  AvatarGroup,
  Dot,
  TotalVoteCountView,
  TribeHeader,
  VoteCounter,
} from '@components';
import { images, responsiveWidth, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { FACES } from '@constants';

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
            titleFont="NUNITO_REGULAR"
            titleSize={18}
            titleColor="#36B982"
            fontWeight="900"
          />
          <VoteCounter
            title={loc('NO')}
            image={images.dislike}
            backgroundColor="#FF686514"
            titleFont="NUNITO_REGULAR"
            titleSize={18}
            titleColor="#FF3940"
            fontWeight="900"
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
          <Dot />
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
      <TribeHeader
        hideTribeName={true}
        showBackIcon={true}
        hideRightIcon={true}
      />
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
      </View>
    </View>
  );
};