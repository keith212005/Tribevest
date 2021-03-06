/* eslint-disable no-undef */
import * as React from 'react';
import { Text, View } from 'react-native';

// LOCAL IMPORT
import { fontsize, images, useGlobalStyles } from '@resources';
import { FastImg } from '@components';

interface DefaultProps {
  icon: string;
  tintColor: string;
  message: string;
  textSize?: keyof typeof fontsize;
}

export const MessageWithIcon = (props: DefaultProps) => {
  const globalStyle = useGlobalStyles();

  return (
    <View
      style={[
        globalStyle.layoutDirection('row', 'flex-start', 'center'),
        { marginBottom: 10 },
      ]}
    >
      {FastImg(
        images[props.icon],
        24,
        {},
        { tintColor: props.tintColor, source: images.tick_circle_light },
      )}
      <Text
        style={[
          globalStyle.textStyle(
            props.textSize ? props.textSize : '_14',
            'text',
            'NUNITO_REGULAR',
          ),
          { paddingHorizontal: 5 },
        ]}
      >
        {props.message}
      </Text>
    </View>
  );
};
