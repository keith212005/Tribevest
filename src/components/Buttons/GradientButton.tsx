import React, { memo } from 'react';
import { ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, fonts, fontsize } from '@resources';
import { FastImg } from '@components';
import { Source } from 'react-native-fast-image';
import { fontScale, scale } from 'react-native-utils-scale';

interface DefaultProps {
  title: string;
  image: Source;
  imageSize: number;
  containerStyle?: ViewStyle;
  extraProps?: any;
  titleStyle?: ViewStyle;
}

export const GradientButton = memo(
  ({
    title,
    image,
    imageSize,
    containerStyle,
    extraProps,
    titleStyle,
  }: DefaultProps) => {
    return (
      <Button
        buttonStyle={{
          height: '100%',
          width: '100%',
          justifyContent: 'flex-start',
          borderWidth: 1,

          borderRadius: 10,
        }}
        containerStyle={{
          borderRadius: 10,
          height: 44,
          ...containerStyle,
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: color.primaryGradiant,
          useAngle: true,
          angle: 176,
          angleCenter: { x: 0.2, y: 0.8 },
        }}
        icon={FastImg(image, imageSize, { marginLeft: 6 })}
        title={title}
        titleStyle={[
          {
            color: 'white',
            fontSize: fontScale(fontsize._14),
            marginLeft: scale(8),
            fontFamily: fonts.NUNITO_SEMIBOLD,
            fontWeight: '700',
          },
          { ...titleStyle },
        ]}
        {...extraProps}
      />
    );
  },
);
