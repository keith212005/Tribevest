/* eslint-disable no-undef */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// LOCAL IMPORT
import { color, useGlobalStyles } from '@resources';

type DefaltProps = {
  percent: number;
  title1: string;
  title2: string;
  title3?: string;
  backgroundColor: keyof typeof color;
  textColor: string;
};

export const InvestPercent: React.FunctionComponent<DefaltProps> = (
  props: DefaltProps,
) => {
  const globalStyle = useGlobalStyles();

  const _renderTitle = (title: string | undefined) => {
    return (
      <Text
        style={[
          globalStyle.textStyle('_12', 'text', 'NUNITO_REGULAR'),
          styles.title,
        ]}
      >
        {title ? loc(title) : ''}
      </Text>
    );
  };
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
      {_renderTitle(props.title1)}
      {_renderTitle(props.title2)}
      {_renderTitle(props.title3)}
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
