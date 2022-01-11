/* eslint-disable no-undef */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';

export const GradientTextButton = (props: any) => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        useAngle={true}
        angle={179}
        angleCenter={{ x: 0.2, y: 0.8 }}
        colors={colors.primaryGradiant}
        style={{
          borderRadius: 100,
          padding: 1,
        }}
      >
        <LinearGradient
          useAngle={true}
          angle={179}
          angleCenter={{ x: 0.2, y: 0.8 }}
          colors={['white', 'white']}
          style={{
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: 38,
          }}
        >
          <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
              colors={colors.primaryGradiant}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={{}}
            >
              <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
          </MaskedView>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};
