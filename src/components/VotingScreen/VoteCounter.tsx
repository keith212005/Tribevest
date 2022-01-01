import { fonts, fontsize, useGlobalStyles } from '@resources';
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';

interface DefaultProps {
  backgroundColor?: string;
  image: string;
  title: string;
  titleFont?: string;
  titleSize?: keyof typeof fontsize;
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
          globalStyle.textStyle(
            props.titleSize as keyof typeof fontsize,
            props.titleColor as string,
            props.titleFont as keyof typeof fonts,
          ),
          { fontWeight: props.fontWeight, marginTop: 7 },
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
