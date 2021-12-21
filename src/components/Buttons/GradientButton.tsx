import React, { memo } from 'react';
import { ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

// LOCAL IMPORTS
import { color, fonts } from '@resources';
import { FastImg } from '@components';
import { Source } from 'react-native-fast-image';

interface DefaultProps {
  title: string;
  image: Source;
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
      buttonStyle={{
        height: '100%',
        width: '100%',
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
      icon={FastImg(image, imageSize, {})}
      title={title}
      titleStyle={[
        {
          color: 'white',
          fontSize: RFValue(12),
          marginLeft: 20,
          fontFamily: fonts.NUNITO_REGULAR,
          fontWeight: '700',
        },
      ]}
      {...extraProps}
    />
  );
};

export default memo(GradientButton);
