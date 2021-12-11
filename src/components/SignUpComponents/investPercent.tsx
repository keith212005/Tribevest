/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { color, useGlobalStyles } from '@resources';

type DefaltProps = {
  percent: number;
  title1: string;
  title2: string;
  backgroundColor: keyof typeof color;
  textColor: string;
};

export const InvestPercent: React.FunctionComponent<DefaltProps> = (
  props: DefaltProps,
) => {
  const globalStyle = useGlobalStyles();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: color[props.backgroundColor] as keyof typeof color,
          },
        ]}
      >
        <Text
          style={[
            globalStyle.textStyle('_14', props.textColor, 'NUNITO_SEMIBOLD'),
          ]}
        >
          {props.percent}%
        </Text>
      </View>
      <Text
        style={[
          globalStyle.textStyle('_12', 'text', 'NUNITO_REGULAR'),
          styles.title,
        ]}
      >
        {loc(props.title1)}
      </Text>
      <Text style={{ textAlign: 'center' }}>{loc(props.title2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
