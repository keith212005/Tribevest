import React, { memo } from 'react';
import { ViewStyle } from 'react-native';

// THIRD PARTY IMPORTS
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// LOCAL IMPORTS
import { color, fonts, fontsize } from '@resources';

interface DefaultProps {
  title: string;
  containerStyle?: ViewStyle;
  extraProps?: any;
}

const RoundGradientButton = ({
  title,
  containerStyle,
  extraProps,
}: DefaultProps) => {
  return (
    <Button
      buttonStyle={{ height: '100%' }}
      containerStyle={{
        borderRadius: 60,
        height: 48,
        ...containerStyle,
      }}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: color.greenGradient,
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      title={title}
      titleStyle={[
        {
          marginLeft: 10,
          color: 'white',
          fontSize: fontsize._16,
          fontFamily: fonts.NUNITO_REGULAR,
          fontWeight: '700',
        },
      ]}
      {...extraProps}
    />
  );
};

export default memo(RoundGradientButton);
