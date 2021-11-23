/* eslint-disable no-undef */
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

// THIRD PARTY IMPORTS
import { Button, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS

interface SquareButtonProps extends ButtonProps {
  title: string;
  buttonStyle?: object;
  onPress: () => void;
}

const SquareButton = (props: SquareButtonProps) => {
  const { colors } = useTheme() as unknown as CustomTheme;
  return (
    <Button
      buttonStyle={[
        styles.buttonStyle,
        props.buttonStyle,
        { backgroundColor: colors.orange },
      ]}
      {...props}
    />
  );
};

export default memo(SquareButton);

const styles = StyleSheet.create({
  buttonStyle: {
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: '#A58FFF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
