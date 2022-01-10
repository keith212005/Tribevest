import React from 'react';
import { Text, View, FlatList } from 'react-native';

// THIRD PARTY IMPORTS
import { Divider } from 'react-native-elements';

// LOCAL IMPORTS
import { images, useGlobalStyles, verticalScale } from '@resources';
import { AddFloatingButton, ScheduledListItem, _renderText } from '@components';
import FastImage from 'react-native-fast-image';

export const Scheduled = (props: any) => {
  console.log(props.route.params.SCHEDULED);

  const globalStyle = useGlobalStyles();
  const renderTransactionItem = ({ item }: any) => (
    <ScheduledListItem item={item} />
  );

  if (!props.route.params.SCHEDULED) {
    return (
      <>
        <View
          style={[
            { flex: 1 },
            globalStyle.layoutDirection('column', 'center', 'center'),
          ]}
        >
          <FastImage
            source={images.no_payments_found}
            style={globalStyle.squareLayout(200)}
            resizeMode={FastImage.resizeMode.contain}
          />
          {_renderText(loc('NO_PAYMENTS_FOUND'), {
            ...globalStyle.textStyle('_18', 'text', 'NUNITO_SEMIBOLD'),
          })}
        </View>
        <AddFloatingButton onPress={() => {}} />
      </>
    );
  }
  return (
    <View style={[{ flex: 1 }]}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={props.route.params.SCHEDULED}
        renderItem={renderTransactionItem}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginTop: verticalScale(16) }} />
        )}
      />
      <AddFloatingButton onPress={() => {}} />
    </View>
  );
};
