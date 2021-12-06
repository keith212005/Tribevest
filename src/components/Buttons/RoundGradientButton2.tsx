import React, { memo } from 'react';
import { Platform, Text, TouchableOpacity, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, useGlobalStyles } from '@resources';

interface DefaultProps {
  title: string;
  gradientColor: keyof typeof color;
  onPress: () => void;
  extraStyle?: ViewStyle;
}

const RoundGradientButtons2 = ({
  title,
  gradientColor,
  onPress,
  extraStyle,
}: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <>
      <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 100,
          justifyContent: 'center',
          marginVertical: 20,
          shadowColor: gradientColor,
          ...Platform.select({
            ios: {
              shadowOffset: {
                width: 5,
                height: 5,
              },
              shadowRadius: 8,
              shadowOpacity: 0.5,
            },
            android: {
              marginVertical: 30,
            },
          }),
          ...extraStyle,
        }}
        onPress={onPress}
      >
        <LinearGradient
          colors={color.primaryGradiant}
          style={{
            height: 50,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: gradientColor,
            ...Platform.select({
              android: {
                elevation: 15,
              },
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
