import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Card, CardProps } from 'react-native-elements';

interface DefaultProps {
  children: any;
  extraProps?: CardProps;
  containerStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
}

export const CardWrapper = ({
  children,
  extraProps,
  containerStyle,
  wrapperStyle,
}: DefaultProps) => {
  return (
    <Card
      containerStyle={[styles.container, { ...containerStyle }]}
      wrapperStyle={[wrapperStyle, { flex: 1 }]}
      {...extraProps}
    >
      {children}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
