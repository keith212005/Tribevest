import React, { memo } from 'react';
import { ViewStyle, ImageSourcePropType } from 'react-native';

// THIRD PARTY IMPORTS
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

// LOCAL IMPORTS
import { color, fonts } from '@resources';
import { FastImg } from '@components';

interface DefaultProps {
  title: string;
  image: ImageSourcePropType;
  imageSize: number;
  containerStyle?: ViewStyle;
  extraProps?: any;
}

const GradientButton = ({
  title,
  image,
  imageSize,
  containerStyle,
  extraProps,
}: DefaultProps) => {
  return (
    <Button
      buttonStyle={{ height: '100%' }}
      containerStyle={{
        borderRadius: 10,
        height: 44,
        ...containerStyle,
      }}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: color.primaryGradiant,
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      icon={FastImg(image, imageSize)}
      title={title}
      titleStyle={[
        {
          marginLeft: 10,
          color: 'white',
          fontSize: RFValue(14),
          fontFamily: fonts.NUNITO_REGULAR,
          fontWeight: '700',
        },
      ]}
      {...extraProps}
    />
  );
};

export default memo(GradientButton);
