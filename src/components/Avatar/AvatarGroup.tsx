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
}

export const AvatarGroup = ({
  list,
  size,
  containerStyle,
  showVotes,
}: AvatarGroupProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={styles.innerContainer}>
        {list.map((item: any) => {
          console.log(item);
          return (
            <View key={item.id} style={{ borderWidth: 2 }}>
              <FastImage
                style={[styles.image, globalStyle.squareLayout(size)]}
                source={{ uri: item.imageUrl }}
              />
              {item.hasOwnProperty('upVote') && showVotes ? (
                <FastImage
                  source={item.upVote ? images.like : images.dislike}
                  style={[
                    styles.likeDislike,
                    globalStyle.squareLayout(size / 2),
                    {
                      position: 'absolute',
                      justifyContent: 'flex-end',
                      marginTop: size / 2,
                      marginLeft: size / 2,
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
  },
  image: {
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
    marginRight: -10,
  },
  likeDislike: {},
});
