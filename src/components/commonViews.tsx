import React from 'react';

// THIRD PARTY IMPORTS
import { Icon, Avatar, AvatarProps } from 'react-native-elements';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { ViewStyle } from 'react-native';

export const RenderIcon = (
  name: string,
  type: string,
  size?: number,
  extraProps?: object,
) => {
  return (
    <Icon
      tvParallaxProperties={undefined}
      name={name}
      type={type}
      size={size}
      {...extraProps}
    />
  );
};

export const FastImg = (
  uri: any,
  size: number,
  extraStyle?: ViewStyle,
  extraProps?: FastImageProps,
) => {
  const globalStyles = useGlobalStyles();
  return (
    <FastImage
      {...extraProps}
      source={uri}
      style={[globalStyles.squareLayout(size), { ...extraStyle }]}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export const FastImgUrl = (uri: any, size: number, extraStyle?: object) => {
  const globalStyles = useGlobalStyles();
  return (
    <FastImage
      source={{ uri: uri }}
      style={[globalStyles.squareLayout(size), { ...extraStyle }]}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export const renderAvatar = (
  url: string,
  size: number,
  extraProps?: AvatarProps,
) => {
  return (
    <Avatar
      activeOpacity={0.2}
      containerStyle={{ backgroundColor: '#BDBDBD' }}
      rounded
      size={size}
      source={{ uri: url }}
      title="AP"
      imageProps={{ transition: true }}
      {...extraProps}
    />
  );
};

// antdesign
// entypo
// evilicon
// feather
// font-awesome
// font-awesome-5
// fontisto
// foundation
// ionicon
// material
// material-community
// octicon
// simple-line-icon
// zocial
