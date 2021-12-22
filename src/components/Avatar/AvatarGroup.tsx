import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { images, useGlobalStyles } from '@resources';

interface AvatarGroupProps {
  list: Array<object>;
  size: number;
  containerStyle?: ViewStyle;
  showVotes?: boolean;
  maxToShow?: number;
}

export const AvatarGroup = ({
  list,
  size,
  containerStyle,
  showVotes,
  maxToShow,
}: AvatarGroupProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={styles.innerContainer}>
        {list.map((item: any, index: any) => {
          if (
            (maxToShow && maxToShow >= index) ||
            (maxToShow && maxToShow >= 10)
          ) {
            return;
          }
          return (
            <View key={item.id}>
              <FastImage
                style={[styles.image, globalStyle.squareLayout(size)]}
                source={{ uri: item.imageUrl }}
              />
              {item.hasOwnProperty('upVote') && showVotes ? (
                <FastImage
                  source={item.upVote ? images.like : images.dislike}
                  style={[
                    styles.likeDislike,
                    globalStyle.squareLayout(size / 2.2),
                    {
                      position: 'absolute',
                      justifyContent: 'flex-end',
                      marginTop: size / 2,
                      marginLeft: size / 1.9,
                    },
                  ]}
                />
              ) : null}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  image: {
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
    marginRight: -10,
  },
  likeDislike: {},
});
