/* eslint-disable no-undef */
import React from 'react';

import { RoundGradientButton } from '@components';
import { useTheme } from '@react-navigation/native';
import { images } from '@resources';

interface AddFloatingButtonProps {
  onPress?: () => void;
}

export const AddFloatingButton = (props: AddFloatingButtonProps) => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <RoundGradientButton
      gradientColor={colors.primaryGradiant}
      title={''}
      icon={images.add}
      iconSize={33}
      onPress={() => {}}
      extraStyle={{
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        position: 'absolute',
        bottom: 10,
        right: 0,
      }}
      titleStyle={{ fontSize: 16 }}
    />
  );
};
