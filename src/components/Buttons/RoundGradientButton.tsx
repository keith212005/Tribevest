import React, { memo } from 'react';
import {
  Platform,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

// THIRD PARTY IMPORTS
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, images, useGlobalStyles } from '@resources';
import FastImage, { Source } from 'react-native-fast-image';

interface DefaultProps {
  title: string;
  gradientColor: string[];
  onPress: () => void;
  extraStyle?: ViewStyle;
  disabled?: boolean;
  icon?: keyof typeof images;
  iconSize?: number;
  iconTintColor?: string;
  titleStyle?: TextStyle;
  extraLinearGradientProps?: LinearGradientProps;
}

const RoundGradientButtons = ({
  title,
  gradientColor,
  onPress,
  extraStyle,
  disabled,
  icon,
  iconTintColor,
  titleStyle,
  iconSize,
  extraLinearGradientProps,
}: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: color.blue,
        ...Platform.select({
          ios: {
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowRadius: 8,
            shadowOpacity: 0.5,
          },
        }),
        ...extraStyle,
      }}
      onPress={onPress}
    >
      <LinearGradient
        useAngle={true}
        angle={179}
        angleCenter={{ x: 0.2, y: 0.8 }}
        colors={gradientColor}
        style={{
          flexDirection: 'row',
          opacity: disabled ? 0.3 : 1,
          height: 50,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: gradientColor[2],
          ...Platform.select({
            android: { elevation: 15 },
          }),
          ...extraStyle,
        }}
        {...extraLinearGradientProps}
      >
        {icon && (
          <FastImage
            source={icon as Source}
            style={[
              globalStyle.squareLayout(iconSize ? iconSize / 1.5 : 22 / 1.5),
            ]}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={iconTintColor}
          />
        )}

        <Text
          style={[
            globalStyle.textStyle('_14', 'white', 'NUNITO_BOLD'),
            { ...titleStyle },
          ]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const RoundGradientButton = memo(RoundGradientButtons);
