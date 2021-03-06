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
  Dot,
  FastImg,
  MotionStatus,
  Rotate,
  RoundGradientButton,
  TotalVoteCountView,
} from '@components';
import {
  fonts,
  images,
  responsiveWidth,
  scale,
  useGlobalStyles,
} from '@resources';
import { FACES } from '@constants';
import { navigate } from '@navigator';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const CurrentMotionsCard = () => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as CustomTheme;
  const [open, setopen] = useState(true);
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setopen(!open);
  };

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
          <Dot
            size={6}
            extraStyle={{ marginHorizontal: 10 }}
            colors={['grey', 'grey']}
          />
          {_renderText('Dec 11', { color: colors.lightText })}
          <MotionStatus
            icon={images.pending}
            tintColor={colors.orange}
            text={loc('PENDING')}
            iconSize={18}
            textStyle={{
              marginHorizontal: 3,
              color: colors.orange_text,
            }}
            containerStyle={{ marginLeft: 10 }}
          />
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

        <Dot
          size={6}
          extraStyle={{ marginHorizontal: 10 }}
          colors={['grey', 'grey']}
        />
        {_renderText('super majority 75%', {
          ...globalStyle.textStyle('_14', 'lightText', 'NUNITO_REGULAR'),
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
          size={responsiveWidth(9.5)}
          showVotes={true}
          containerStyle={{ marginVertical: 10 }}
        />
        <RoundGradientButton
          gradientColor={colors.primaryGradiant}
          title={loc('VOTE')}
          onPress={() => {
            navigate('Vote');
          }}
          extraStyle={{
            height: 38,
            width: responsiveWidth(80),
            alignSelf: 'center',
            marginHorizontal: 50,
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
    marginBottom: 10,
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
});
