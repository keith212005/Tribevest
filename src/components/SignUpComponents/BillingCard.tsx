/* eslint-disable no-undef */
import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

// LOCAL IMPORT
import { color, useGlobalStyles } from '@resources';
import { useTheme } from '@react-navigation/native';

interface BillingCardProps {
  title: string;
  amount: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}

export const BillingCard = (props: BillingCardProps) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme() as unknown as CustomTheme;

  return (
    <Pressable
      key={props.title}
      onPress={props.onPress}
      style={[
        styles.container,
        {
          backgroundColor: props.selected
            ? color.light_blue_background
            : colors.white,
          borderColor: props.selected ? color.blue : colors.placeHolderColor,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          globalStyle.textStyle(
            '_14',
            props.selected ? 'blue' : 'black',
            'NUNITO_BOLD',
          ),
        ]}
      >
        {props.title}
      </Text>
      <Text
        style={[
          styles.text,
          globalStyle.textStyle(
            '_24',
            props.selected ? 'blue' : 'black',
            'NUNITO_BOLD',
          ),
        ]}
      >
        ${props.amount}
      </Text>
      <Text
        style={[
          styles.text,
          globalStyle.textStyle(
            '_14',
            props.selected ? 'blue' : 'lightText',
            'NUNITO_REGULAR',
          ),
        ]}
      >
        {props.description}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  text: {
    color: color.blue,
  },
});
