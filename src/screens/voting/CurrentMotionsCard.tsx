/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Pressable,
  Platform,
  UIManager,
  TextStyle,
} from 'react-native';

// THIRD PARTY IMPORTS
import { Card } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import {
  AvatarGroup,
  FastImg,
  Rotate,
  RoundGradientButton,
  TotalVoteCountView,
} from '@components';
import {
  color,
  fonts,
  images,
  responsiveWidth,
  scale,
  useGlobalStyles,
} from '@resources';
import { FACES } from '@constants';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const CurrentMotionsCard = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setopen(!open);
  };

  const _renderDot = () => <View style={styles.dotStyle} />;

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

  const _renderCardHeader = () => {
    return (
      <Pressable onPress={onPress}>
        <View style={[styles.row]}>
          <Text
            style={[
              globalStyle.textStyle('_16', 'text', 'NUNITO_BOLD'),
              { flex: 1 },
            ]}
          >
            Purchase a multi-family in downtown Austin
          </Text>
          <Rotate onPress={onPress}>
            {FastImg(images.arrow_drop_down_circle, 25)}
          </Rotate>
        </View>
        <View
          style={[
            { marginBottom: 20 },
            globalStyle.layoutDirection('row', 'flex-start', 'center'),
          ]}
        >
          {_renderText('Jonathan Ross', { color: colors.lightText })}
          {_renderDot()}
          {_renderText('Dec 11', { color: colors.lightText })}
          <View
            style={[globalStyle.layoutDirection('row', 'flex-start', 'center')]}
          >
            {FastImg(images.pending, 20, { marginLeft: 6, marginRight: 2 })}
            <Text
              style={[
                globalStyle.textStyle('_12', 'orange_text', 'NUNITO_BOLD'),
              ]}
            >
              {loc('PENDING')}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const _renderVoteReport = () => (
    <View
      style={[globalStyle.layoutDirection('row', 'space-between', 'center')]}
    >
      <View
        style={[globalStyle.layoutDirection('row', 'flex-start', 'center')]}
      >
        {_renderText(loc('VOTES'), { fontWeight: '700' })}
        {_renderDot()}
        {_renderText('super majority 75%', {
          fontFamily: fonts.NUNITO_REGULAR,
          fontSize: 14,
          color: colors.lightText,
        })}
      </View>
      <View style={{ flexDirection: 'row' }}>
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
  );

  const _renderCollapsibleCardBody = () => {
    return (
      <>
        <Card.Divider />
        {_renderVoteReport()}

        <AvatarGroup
          list={FACES}
          size={38}
          showVotes={true}
          containerStyle={{ marginVertical: 10 }}
        />
        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('VOTE')}
          onPress={() => {}}
          extraStyle={{
            height: 38,
            width: responsiveWidth(81),
            alignSelf: 'center',
            // marginVertical: 5,
            // marginBottom: 20,
            marginHorizontal: 50,
            borderWidth: 1,
          }}
        />
      </>
    );
  };

  return (
    <Card containerStyle={[styles.container, { backgroundColor: colors.card }]}>
      {_renderCardHeader()}
      {open && _renderCollapsibleCardBody()}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(5),
  },
  dotStyle: {
    height: 5,
    width: 5,
    borderRadius: 5 / 2,
    marginHorizontal: 5,
    backgroundColor: color.lightText,
  },
});
