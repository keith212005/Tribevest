import React, { memo } from 'react';
import { Image, ViewStyle, Pressable } from 'react-native';

import { useGlobalStyles } from '@resources';

interface TribeAvatarProps {
  url: string;
  size: number;
  borderRadius: number;
  extraStyle: ViewStyle;
  onPress: () => void;
}

const TribeAvatars = ({
  url,
  size,
  borderRadius,
  extraStyle,
  onPress,
}: TribeAvatarProps) => {
  const globalStyles = useGlobalStyles();
  return (
    <Pressable onPress={onPress}>
      <Image
        source={{ uri: url }}
        style={[globalStyles.squareLayout(size), { ...extraStyle }]}
        borderRadius={borderRadius ? borderRadius : 0}
      />
    </Pressable>
  );
};

export const TribeAvatar = memo(TribeAvatars);
