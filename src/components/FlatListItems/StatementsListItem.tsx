import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// THRID PARTY IMPORTS
import { Divider } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// LOCAL IMPORTS
import { images, useGlobalStyles, verticalScale } from '@resources';

interface DefaultProps {
  item: any;
}

export const StatementsListItem = memo(({ item }: DefaultProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <>
      <Divider style={{ marginVertical: verticalScale(16) }} />
      <View
        style={[globalStyle.layoutDirection('row', 'space-between', 'center')]}
      >
        <Text style={[globalStyle.textStyle('_14', 'text', 'NUNITO_SEMIBOLD')]}>
          {item.from}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <FastImage
            source={images.download_statement}
            resizeMode={FastImage.resizeMode.cover}
            style={[globalStyle.squareLayout(18), {}]}
            tintColor={'grey'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
});
