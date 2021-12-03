import React, { memo } from 'react';
import { Platform, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Button, colors } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, fonts, fontsize, moderateScale } from '@resources';

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
      buttonStyle={{
        height: moderateScale(51),
        margin: moderateScale(20),
        backgroundColor: color.primaryColor,
        borderRadius: 100,
      }}
      containerStyle={{
        width: '100%',
        height: 100,
        shadowColor: color.primaryColor,
        ...Platform.select({
          ios: {
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowRadius: 8,
            shadowOpacity: 1,
          },
          android: {
            backgroundColor: color.transparent,
            elevation: 5,
          },
        }),
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
