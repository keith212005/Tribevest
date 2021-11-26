import React from 'react';
import { Image, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Icon, Avatar } from 'react-native-elements';

// LOCAL IMPORTS
import { useGlobalStyles } from '@resources';

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

export const RenderImage = (uri: any, size: number, extraStyle?: object) => {
  const globalStyles = useGlobalStyles();
  return (
    <Image
      source={uri}
      style={[globalStyles.squareLayout(size), { ...extraStyle }]}
    />
  );
};

export const RenderUrlImage = (
  uri: string,
  size: number,
  extraStyle?: ViewStyle,
) => {
  const globalStyles = useGlobalStyles();
  return (
    <Image
      source={{ uri: uri }}
      style={[globalStyles.squareLayout(size), { ...extraStyle }]}
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
