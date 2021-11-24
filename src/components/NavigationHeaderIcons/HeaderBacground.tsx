import React from 'react';

// THIRD PARTY IMPORTS
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

export const HeaderBackground = () => {
  const selectedGradient = useSelector(
    (state: any) => state.theme.selectedGradient,
  );

  return (
    <LinearGradient
      colors={selectedGradient}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
};
