import { useGlobalStyles } from '@resources';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

interface DefaultProps {
  item: any;
}

export const LatestTransactionItemCard = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();

  console.log(props.item);

  const _renderColumn = (
    title: string,
    description: string,
    titleStyle?: ViewStyle,
    descriptionStyle?: ViewStyle,
  ) => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('column', 'space-between', 'flex-start'),
        ]}
      >
        <Text
          style={[
            globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
            { ...titleStyle },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            globalStyle.textStyle('_12', 'lightText', 'NUNITO_REGULAR'),
            { ...descriptionStyle },
          ]}
        >
          {description}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        globalStyle.layoutDirection('row', 'space-between', 'flex-start'),
      ]}
    >
      {_renderColumn(props.item.name, props.item.name)}
      {_renderColumn(
        props.item.type,
        props.item.date,
        { alignSelf: 'flex-end' },
        { alignSelf: 'flex-end' },
      )}
    </View>
  );
};
