import React, { memo } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// LOCAL IMPORTS
import { _renderText } from '@components';
import { scale, useGlobalStyles } from '@resources';

interface DefaultProps {
  item: any;
}

export const ScheduledListItem = memo((props: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  const _renderColumn = (
    title: string,
    description: string,
    titleStyle?: ViewStyle,
    descriptionStyle?: ViewStyle,
  ) => {
    return (
      <View
        style={[
          globalStyle.layoutDirection('column', 'flex-start', 'flex-start'),
        ]}
      >
        {_renderText(title, {
          ...globalStyle.textStyle('_12', 'text', 'NUNITO_REGULAR'),
          ...titleStyle,
        })}
        {_renderText(description, {
          marginTop: scale(8),
          ...globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD'),
          ...descriptionStyle,
        })}
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        globalStyle.layoutDirection('row', 'space-between', 'flex-start'),
      ]}
    >
      {_renderColumn(props.item.date, props.item.amount)}
      {_renderColumn(
        '',
        'cancel',
        {},
        { ...globalStyle.textStyle('_14', 'error_text', 'NUNITO_REGULAR') },
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: scale(16),
  },
});
