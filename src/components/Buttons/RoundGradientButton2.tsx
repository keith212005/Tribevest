import React, { memo } from 'react';
import { ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, fonts, fontsize } from '@resources';

interface DefaultProps {
  title: string;
  gradientColor: keyof typeof color;
  onPress: Function;
  containerStyle?: ViewStyle;
  extraProps?: any;
}

const RoundGradientButtons2 = ({
  title,
  gradientColor,
  onPress,
  containerStyle,
  extraProps,
}: DefaultProps) => {
  return (
    <Button
      buttonStyle={{ height: '100%' }}
      containerStyle={{
        width: '100%',
        borderRadius: 30,
        height: 48,
        ...containerStyle,
      }}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: gradientColor,
        start: { x: 0, y: 0.25 },
        end: { x: 0.5, y: 1 },
      }}
      title={title}
      titleStyle={[
        {
          marginLeft: 10,
          color: 'white',
          fontSize: fontsize._16,
          fontFamily: fonts.NUNITO_REGULAR,
          fontWeight: '700',
        },
      ]}
      onPress={onPress}
      {...extraProps}
    />
  );
};

export const RoundGradientButton2 = memo(RoundGradientButtons2);
