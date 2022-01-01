import { fonts, useGlobalStyles } from '@resources';
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';

interface DefaultProps {
  backgroundColor?: string;
  image: string;
  title: string;
  titleFont?: string;
  titleSize?: number;
  titleColor?: string;
  fontWeight?: string;
  onPress: () => void;
}

export const VoteCounter = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.container, { backgroundColor: props.backgroundColor }]}
    >
      <FastImage
        source={props.image as Source}
        style={[globalStyle.squareLayout(60)]}
      />
      <Text
        style={[
          {
            color: props.titleColor,
            fontSize: props.titleSize,
            fontWeight: props.fontWeight,
            // marginTop: 7,
            // fontFamily: fonts[props.titleFont],
          },
        ]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 161,
    width: 147,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
