import React, { memo } from 'react';
import { Platform, Text, TouchableOpacity, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, responsiveHeight, useGlobalStyles } from '@resources';

interface DefaultProps {
  title: string;
  gradientColor: string[];
  onPress: () => void;
  extraStyle?: ViewStyle;
  disabled?: boolean;
}

const RoundGradientButtons2 = ({
  title,
  gradientColor,
  onPress,
  extraStyle,
  disabled,
}: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        style={{
          height: 50,
          borderRadius: 100,
          justifyContent: 'center',
          marginVertical: 20,
          shadowColor: gradientColor[2],
          ...Platform.select({
            ios: {
              shadowOffset: {
                width: 5,
                height: 5,
              },
              shadowRadius: 8,
              shadowOpacity: 0.5,
            },
            android: { marginVertical: 30 },
          }),
          ...extraStyle,
        }}
        onPress={onPress}
      >
        <LinearGradient
          colors={color.primaryGradiant}
          style={{
            opacity: disabled ? 0.3 : 1,
            height: responsiveHeight(6),
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: gradientColor[2],
            ...Platform.select({
              android: { elevation: 15 },
            }),
          }}
        >
          <Text
            style={[globalStyle.textStyle('_16', 'white', 'NUNITO_SEMIBOLD')]}
          >
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export const RoundGradientButton2 = memo(RoundGradientButtons2);
