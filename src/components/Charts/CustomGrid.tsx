/* eslint-disable no-undef */
import { useTheme } from '@react-navigation/native';
import React from 'react';

import { G, Line } from 'react-native-svg';
import { useSelector } from 'react-redux';

export const CustomGrid = ({ x, y, data, ticks }: any) => {
  const { colors } = useTheme() as CustomTheme;
  const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);
  return (
    <G>
      {
        // Horizontal grid
        ticks.map((tick: number) => (
          <Line
            key={tick}
            x1={'0%'}
            x2={'100%'}
            y1={y(tick)}
            y2={y(tick)}
            stroke={isDarkTheme ? colors.whiteOpacity : colors.grey}
          />
        ))
      }
      {
        // Vertical grid
        data.map((_, index: number) => (
          <Line
            key={index}
            y1={'0%'}
            y2={'100%'}
            x1={x(index)}
            x2={x(index)}
            stroke={isDarkTheme ? colors.whiteOpacity : colors.grey}
          />
        ))
      }
    </G>
  );
};
