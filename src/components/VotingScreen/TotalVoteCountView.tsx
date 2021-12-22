import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// THIRD PARTY IMPORTS
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { fonts, useGlobalStyles } from '@resources';

interface TotalVoteCountViewProps {
  containerStyle?: ViewStyle;
  voteCount: number;
  image: any;
  textStyle: TextStyle;
}

export const TotalVoteCountView = ({
  containerStyle,
  voteCount,
  image,
  textStyle,
}: TotalVoteCountViewProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <Text style={[styles.count, { ...textStyle }]}>{voteCount}</Text>
      <FastImage source={image} style={[globalStyle.squareLayout(16)]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  count: {
    fontFamily: fonts.NUNITO_REGULAR,
    fontSize: 14,
  },
});
