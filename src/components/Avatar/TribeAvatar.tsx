import React, { memo } from 'react';
import { ViewStyle, Pressable } from 'react-native';

import { useGlobalStyles } from '@resources';
import FastImage from 'react-native-fast-image';

interface TribeAvatarProps {
  url: string;
  size: number;
  extraStyle: ViewStyle;
  onPress: () => void;
}

const TribeAvatars = ({ url, size, extraStyle, onPress }: TribeAvatarProps) => {
  const globalStyles = useGlobalStyles();

  return (
    <Pressable onPress={onPress}>
      <FastImage
        source={{ uri: url }}
        style={[globalStyles.squareLayout(size), { ...extraStyle }]}
      />
    </Pressable>
  );
};

export const TribeAvatar = memo(TribeAvatars, (prev, next) => {
  return true;
});
