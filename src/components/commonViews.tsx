import React from 'react';
import { Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

export const RenderIcon = (
  name: string,
  type: string,
  size?: number,
  extraProps?: object,
) => {
  return (
    <Icon
      tvParallaxProperties={false}
      name={name}
      type={type}
      size={size}
      {...extraProps}
    />
  );
};

export const RenderImage = (uri: string, extraStyle?: object) => {
  return (
    <Image
      source={{ uri: uri }}
      style={{
        ...extraStyle,
      }}
    />
  );
};

export const FImage = (url: any, extraProps?: any) => {
  return (
    <FastImage
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
      {...extraProps}
    />
  );
};

export const renderAvatar = (url: string, size: number, extraProps: object) => {
  return (
    <Avatar
      activeOpacity={0.2}
      containerStyle={{ backgroundColor: '#BDBDBD' }}
      rounded
      size={size}
      source={{ uri: url }}
      title="AP"
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
